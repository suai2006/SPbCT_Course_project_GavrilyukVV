<template>
    <router-link :to="link" exact class="item" exact-active-class="active" active-class="active">{{ title }}<i :class="icon"></i></router-link>
</template>
<script>
    export default 
    {
        props:["link","icon","title"],
        name: 'NavLink',        
    }
</script>