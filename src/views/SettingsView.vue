<template>
    <Content :title="title">
        <table class="ui celled striped table">
            <thead>
                <tr>
                    <th colspan="3">Пользовательские настройки</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Изменить логин</td>
                    <ChangeAuthDataButton field="login"/>
                </tr>
                <tr>
                    <td>Изменить пароль</td>
                    <ChangeAuthDataButton field="password"/>
                </tr>                
            </tbody>
        </table>
        <table class="ui celled striped table">
            <thead>
                <tr>
                    <th colspan="3">Системные настройки</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in settingsList" :key="item.id" :ref="item.id" :class="isDisabled(item)">
                    <td>{{item.name}}</td>
                    <td class="right aligned collapsing">
                        <Checkbox :checked="item.value"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </Content>
</template>
<script>
    import Checkbox from '@/components/semantic/Checkbox.vue'; 
    import ChangeAuthDataButton from '@/components/semantic/ChangeAuthDataButton.vue'; 
    export default 
    {
        name: 'settings',
        components: {Checkbox, ChangeAuthDataButton},
        data()
        {
            let obj = 
            {
                title : "Настройки"
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
            }
        },
        watch:{}
    }
</script>
<style scoped>

</style>