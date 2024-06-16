<template>
    <transition name="fade">
      <sui-message v-if="onError" :class="classList" dismissable @dismiss="handleDismiss">
        <i class="icon exclamation triangle"></i>
        <sui-message-content>
            <sui-message-header>{{ error.header }}</sui-message-header>
            <p>{{ error.message }}</p>
        </sui-message-content>        
        </sui-message>        
    </transition>
</template>
<script>
    export default 
    {
        props:["onError","error", "timer"],
        name: 'errorMessage',
        data()
        {
            let obj = {
                classList: "ui large icon message error",                
            };
            return obj;
        },
        
        methods:{
            handleDismiss() {
                this.$emit('update:onError', false);
            },
        },
        watch: 
        {
             onError(newVal, oldVal)
             {
                if(newVal)
                {
                    setTimeout(() => {
                        this.$emit('update:onError', false);
                    }, this.timer || 1500);
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
    .ui.error.message
    {
        margin: 0;
        position: fixed;
        width: 680px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        top: 50px;
        background: #CC0000;
        color: #fff;
    }
    .ui.error.message .header
    {
        color: #fff;
    }
</style>