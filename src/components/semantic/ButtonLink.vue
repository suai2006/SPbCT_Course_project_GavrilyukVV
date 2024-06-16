<template>
    <router-link :to="link" tag="button" exact class="ui large blue icon button item" exact-active-class="active" active-class="active"><i :class="icon"></i></router-link>
</template>
<script>
    export default 
    {
        props:["link","icon"],
        name: 'ButtonLink',        
    }
</script>