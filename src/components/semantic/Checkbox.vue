<template>
    <div class="inline field">
        <div ref="checkboxWrap" :class="classList" @click="change">
            <input ref="checkbox" type="checkbox" tabindex="0" :checked="checked" class="hidden">
            <label></label>
        </div>
    </div>
</template>
<script>
export default 
{
    name: 'settings',
    components: {},
    props:["checked", "name", "checkboxEvent"],
    data()
    {
        return {
            classList: "ui toggle checkbox"
        }
    },
    mounted(){},
    methods:{
        change()
        {
            this.value = !this.value;
        }
    },
    watch: {},
    computed:
    {
        value: 
        {
            get: function()
            {
                if(this.checked) this.classList = "ui toggle checkbox checked";
                return this.checked;
            },
            set: function(newValue)
            {
                if(newValue)  this.classList = "ui toggle checkbox checked";
                else  this.classList = "ui toggle checkbox";
                this.$emit("checkboxEvent", {id: this.name, value: newValue});        
            }   
        },
    }
}
</script>