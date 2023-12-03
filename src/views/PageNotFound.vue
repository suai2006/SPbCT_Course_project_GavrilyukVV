<template>
    <Content :title="title">
        Страница не найдена  
    </Content>
</template>
<script>
    export default 
    {
        name: 'error404',
        components: {},
        data()
        {
        let obj = {
            title : "Ошибка 404"
        };
        return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
        },
        computed: {},      
        methods: {}     
    }
</script>