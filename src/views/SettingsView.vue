<template>
    <Content :title="title">
        <ErrorMessage :onError="onError" v-on:update:onError="onError = $event" :error="error"/>
        <table class="ui celled striped table">
            <thead><tr><th colspan="3">Пользовательские настройки</th></tr></thead>
            <tbody>
                <tr><td>Изменить логин</td><ChangeAuthDataButton field="login"/></tr>
                <tr><td>Изменить пароль</td><ChangeAuthDataButton field="password"/></tr>                
            </tbody>
        </table>
        <table class="ui celled striped table">
            <thead><tr><th colspan="3">Системные настройки</th></tr></thead>
            <tbody>
                <tr v-for="item in settingsList" :key="item.id" :ref="item.id" :class="isDisabled(item)">
                    <td>{{item.name}}</td>
                    <td class="right aligned collapsing"><Checkbox :checked="item.value" :name="item.id"  v-on:checkboxEvent="checkboxEvent"/></td>
                </tr>
            </tbody>
        </table>
    </Content>
</template>
<script>
    import Checkbox from '@/components/semantic/Checkbox.vue'; 
    import ChangeAuthDataButton from '@/components/semantic/ChangeAuthDataButton.vue'; 
    import RPCRequest from '@/assets/javascript/RPCRequest.js';
    export default 
    {
        name: 'settings',
        components: {Checkbox, ChangeAuthDataButton},
        data()
        {
            let obj = 
            {
                title : "Настройки",
                onError:false,
                error:{
                    header:"",
                    message:"",
                },
            };
            return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
        },
        computed:
        {
            settingsList()
            {
                return this.$store.state.settingsList;
            },            
        },      
        methods: 
        {
            isDisabled(item)
            {
                return item.enable == true ? '' : 'disabled';
            },
            
            checkboxEvent(data)
            {
                  
                window.document.body.style.cssText ="opacity:.6; pointer-events:none;";
                this.$store.commit("setSettingsList", data); 
                RPCRequest.request('post', 'http://localhost:3000/api/settings', data, {}).then((resp) => 
                {
                    window.document.body.style.cssText ="";
                    if(resp.error)
                    {
                        data.value = !data.value
                        this.$store.commit("setSettingsList", data);  
                        this.error = {
                            message: resp.error.message,
                            header:  resp.error.code
                        }
                        this.onError = true;
                    }
                });
            }
        },
        watch:{}
    }
</script>
<style scoped>

</style>