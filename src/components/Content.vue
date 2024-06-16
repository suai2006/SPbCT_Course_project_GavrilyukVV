<template>  
  <div class="ui content container full height" id="content">
    <h2 class="ui dividing header"><i class="home icon"></i>{{title}}</h2>
    <slot/>    
    <slot name="bottom"></slot>
  </div>
</template>
<script>
export default {
    props:["title"]
}
</script>