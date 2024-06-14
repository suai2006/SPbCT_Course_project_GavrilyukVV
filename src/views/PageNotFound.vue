<template>
    <Content :title="title">
        Страница не найдена  
    </Content>
</template>
<script>
    export default 
    {
        name: 'error404',
        data(){ return {title : "Ошибка 404"}} ,
        mounted(){document.title = this.title;},
    }
</script>