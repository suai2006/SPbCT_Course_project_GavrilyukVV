<template>
    <div v-if="showError" class="ui negative message error" :class="msgClasses" :style="msgStyle">
        <i class="close icon" @click="onError=false"></i>
        <div class="header">
            {{error.header}}
        </div>
        <p>{{error.message}}</p>
    </div>
</template>
<script>
    export default 
    {
        props:["onError","error"],
        name: 'errorMessage',
        components: {},
        data()
        {
            let obj = {
                showError : false,
                msgClasses:"ui negative message error transition hidden",
            };
            return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
        },
        computed: {},      
        methods:{},
        watch: 
        {
             onError(newVal, oldVal)
             {
                
                if(newVal == true) 
                {
                    this.showError = true;
                    this.msgClasses = "ui negative message error transition visible active animating fade in";
                    this.msgStyle = "display: block !important;animation-duration: 500ms;";
                    setTimeout(() =>
                    {
                        this.msgClasses = "ui negative message error transition visible active";
                        this.msgStyle = "display: block !important;";
                    }, 500);                     
                }
                else  
                {
                    this.msgClasses = "ui negative message error transition visible active animating fade out";
                    this.msgStyle = "display: block !important;animation-duration: 500ms;";
                    setTimeout(() =>
                    {
                        this.msgClasses = "ui negative message error";
                        this.msgStyle = "";
                        this.showError = false;
                    }, 500);                     
                }
             }
        }     
    }
</script>
<style scoped>
    .ui.negative.message.error
    {
        position: fixed;
        width: 680px;
        left: 50%;
        right: 50%;
        transform: translate(-50%, 0);
        top: 50px;
        display: none;
        background-color: #990e0e;
        color: #ffffff;
    }
    .ui.error.message.error .header {
        color: #ffffff;
    }
</style>