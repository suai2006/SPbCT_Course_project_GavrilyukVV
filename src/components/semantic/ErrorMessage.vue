<template>
    <transition name="fade">
      <sui-message v-if="showError" class="ui error message"
        :header=error.header
        :content=error.message
        dismissable
        @dismiss="handleDismiss"/>
    </transition>
</template>
<script>
    export default 
    {
        props:["onError","error"],
        name: 'errorMessage',
        data()
        {
            let obj = {
                showError : false,
            };
            return obj;
        },
        methods:{
            handleDismiss() {
                this.showError = false;
            },
        },
        watch: 
        {
             onError(newVal, oldVal)
             {
                if(newVal) 
                {
                    this.showError = true;
                    setTimeout(() =>
                    {
                        this.showError = false;
                    }, 3000);
                }
             }
        }     
    }
</script>
<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .5s;
        opacity: 1;
    }
    .fade-enter,
    .fade-leave-to {
         opacity: 0;
         transition: opacity .5s;
    }
    .ui.message
    {
        margin: 0;
        position: fixed;
        width: 680px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        top: 50px;
    }
</style>