<template>  
  <div class="right floated column" id="content">
    <div class="ui container grid">
      <div class="row">
        <div class="fifteen wide computer sixteen wide phone centered column">
          <h2 class="ui dividing header"><i class="home icon"></i>{{title}}</h2>
          <div class="ui container">
            <slot/>           
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props:["title"]
}
</script>