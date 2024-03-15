<template>
    <div class="inline field">
        <div ref="checkboxWrap" class="ui toggle checkbox">
            <input ref="checkbox" type="checkbox" tabindex="0" :checked="isActive" class="hidden">
            <label></label>
        </div>
    </div>
</template>
<script>
export default 
{
    name: 'settings',
    components: {},
    props:["checked"],
    data()
    {
        return {
            isActive:false
        }
    },
    mounted()
    {
        this.isActive = this.checked;
        this.$refs.checkboxWrap.onclick = () => this.isActive = !this.isActive;
    },
    methods:{},
    watch: 
    {
        isActive()
        {
            this.$refs.checkboxWrap.classList.toggle("checked");
            this.$refs.checkbox.checked = this.$refs.checkbox.checked ? false : true;
        }
    }
}
</script>