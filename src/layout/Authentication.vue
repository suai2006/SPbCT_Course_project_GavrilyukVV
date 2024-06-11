<template>
    <div class="loginPage">
        <ErrorMessage :onError="onError" :error="error"/>
        <div class="wrapper">
            <form id="authForm" class="login">
                <p class="title">Авторизация</p>
                <input type="text" name="username" v-model="username" placeholder="Логин" v-focus autocomplete="off" @focus="onFocus" readonly/>
                <i class="fa fa-user"></i>                
                <input type="text" class="password" name="password" v-model="password" ref="password" placeholder="Пароль" autocomplete="off" @focus="onFocus" readonly/>
                <i class="fa fa-key"></i>
                <!--a href="#">Забыли пароль?</a-->
                <button :class="btnClass" :disabled="isdisabled" type="button" @click="sign()">
                    <i class="sign in alternate icon"></i>
                    <span class="state">Аторизоваться</span>
                </button>
            </form>
        </div>  
    </div>     
</template>
<style scoped src="@/assets/css/Authentication.css"></style>
<script>
import ErrorMessage from '@/components/semantic/ErrorMessage.vue';   
const axios = require('axios');
export default 
{
    components: {ErrorMessage},
    data()
    {
        return {
            btnClass:"ui primary button",
            username:"",
            password:"",
            onError:false,
            error:{
                header:"",
                message:"",
            },
            title : "Авторизация"
        }
    },
    computed:
    {
        isdisabled()
        {
            return (this.username == "" || this.password == "") ? true : false; 
        }
    },
    mounted()
    {
        document.title = this.title;
    },
    methods:
    {
        onFocus(event)
        {
            event.target.removeAttribute('readonly');
        },
        async sign ()
        {
            try 
            {
                this.btnClass = "ui primary loading disabled button";
                let data = JSON.stringify({
                    "login": this.username,
                    "password": this.password
                });
                
                let config = 
                {
                    method: 'post',
                    maxBodyLength: Infinity,
                    url: 'http://localhost:3000/api/auth/login',
                    headers: { 
                        'Content-Type': 'application/json'                    
                    },
                    data : data
                };
                let response = await axios.request(config);
                console.log(response.data);
                this.$emit('sigin', response.data);
            } 
            catch (error) 
            {
                this.btnClass = "ui primary button";
                this.error.message = error.message;
                this.error.header = error.response.data.error;
                this.onError = true;
                setTimeout(() => {
                    this.onError = false;
                }, 1500);
            }   
        }
    }
}
</script>
