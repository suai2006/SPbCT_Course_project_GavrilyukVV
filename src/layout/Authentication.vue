<template>
    <div class="loginPage">
        <div class="wrapper">
            <form id="authForm" class="login">
                <p class="title">Авторизация</p>
                <input type="text" name="login" placeholder="Логин" v-focus autocomplete="off" @focus="$event.srcElement.removeAttribute('readonly')" readonly/>
                <i class="fa fa-user"></i>
                
                <input type="password" name="password" ref="password" placeholder="Пароль" autocomplete="off" @focus="$event.srcElement.removeAttribute('readonly')" readonly/>
                <i class="fa fa-key"></i>
                <a href="#">Забыли пароль?</a>
                <button type="button" @click="$emit('sigin')">
                    <!-- <i class="spinner"></i> -->
                    <span class="state">Аторизоваться</span>
                </button> 
            </form>
        </div>  
    </div>     
</template>
<style scoped src="@/assets/css/Authentication.css"></style>
  