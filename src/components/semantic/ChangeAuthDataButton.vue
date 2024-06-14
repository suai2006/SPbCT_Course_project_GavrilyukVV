<template>
<td class="right aligned collapsing">
    <button class="ui blue compact icon button" @click="changeFn">
        <i class="edit icon"></i> Изменить
    </button>
    <modal :dialog="dialog"  @close="close">
        <template #header>
            {{formTitle}}
        </template>
        <div class="description">
            <form v-if="field === 'login'" class="ui form">
                <div class="field">
                    <label>{{formLabel}}</label>
                    <input type="text" v-model="login" autocomplete="off" name="changeField" :placeholder="formPlaceholder">
                </div>
            </form>
            <form v-else-if="field === 'password'" class="ui form">
                <div class="field">
                    <label>{{formLabel.old}}</label>
                    <input type="text" v-model="password.old" autocomplete="off" :placeholder="formPlaceholder.old" style="-webkit-text-security: square">
                </div> 
                <div class="field">
                    <label>{{formLabel.new}}</label>
                    <input type="text" v-model="password.new" autocomplete="off" :placeholder="formPlaceholder.new" style="-webkit-text-security: square">
                </div>
                <div class="field">
                    <label>{{formLabel.confirm}}</label>
                    <input type="text" v-model="password.confirm" autocomplete="off" :placeholder="formPlaceholder.confirm" style="-webkit-text-security: square">
                </div>
            </form>
        </div>
        <template #actions>
            <div class="ui black deny button" @click="close">Закрыть</div>
            <div class="ui blue deny button" @click="submit">Сохранить</div>
        </template>
    </modal>
</td>
</template>

<script>
    import modal from '@/components/semantic/Modal.vue';
    const axios = require('axios');
    export default 
    {
        props:["field"],
        name: 'changeLogin',
        components: {modal},
        data()
        {
            let obj = {
                dialog:false,
                password:
                {
                    old: null,
                    new: null,
                    confirm: null,
                },
                login:null
            };
            return obj;
        },
        beforeMount(){},
        mounted(){},
        computed: {
            formTitle()
            {
                if(this.field == "login") return "Изменить логин";
                if(this.field == "password") return "Изменить пароль";
            },
            formLabel()
            {
                if(this.field == "login") return "Введите новый логин";
                if(this.field == "password") return {
                    old: "Введите старый пароль",
                    new: "Введите новый пароль",
                    confirm: "Повторите новый пароль",
                };
            },
            formPlaceholder()
            {
                if(this.field == "login") return "Вводите латинскими буквами без пробелов например: admin, zufel, ...";
                if(this.field == "password") return {
                    old: "Введите старый пароль",
                    new: "Введите новый пароль",
                    confirm: "Повторите новый пароль",
                };
            }
        },      
        methods:{
            changeFn()
            {
                this.dialog = true;
            },
            submit()
            {
                if(this.field == "login")
                {
                    
                }
                else if(this.field == "password")
                {

                }

                this.dialog = false;
            },
            close () 
            {
                this.dialog = false;
            },
            async request(data)
            {
                 let config = 
                {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: `http://localhost:3000/api/settings/change${field}`,
                    headers: { 
                        'Content-Type': 'application/json'                    
                    },
                    data : data
                };
                try 
                {
                    let response = await axios.request(config);
                } 
                catch (error) 
                {
                    console.log(error);
                }                
            },
        },
        watch: 
        {
             
        }     
    }
</script>