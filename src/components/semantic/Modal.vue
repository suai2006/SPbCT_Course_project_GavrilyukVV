<template>
    <sui-modal v-model="showDialog" size="small">
        <sui-modal-header><slot name="header">Просмотр информации</slot></sui-modal-header>
        <sui-modal-content>
            <sui-modal-description>
                <slot>
                    <p>Пока так</p>
                    <p>Но тут обязательно будет, то что должно быть</p>
                </slot>
            </sui-modal-description>
        </sui-modal-content>
        <sui-modal-actions>
            <slot name="actions">
                <sui-button secondary @click="showDialog=false">Закрыть</sui-button>
                <sui-button positive @click="showDialog=false">Сохранить</sui-button>
            </slot>        
        </sui-modal-actions>
    </sui-modal>
</template>
<script>
export default 
{
    props:["dialog","data"],
    data(){
        return {};
    },
    computed:{
        showDialog: {
            get: function(){
                return this.dialog;
            },
            set: function(newValue){
                console.log(newValue)
                this.$emit("close");
            }   
        },
    }
}
</script>