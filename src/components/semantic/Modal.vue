<template>
    <div v-if="showDialog" :class="overlayClasses" :style="overlayStyle">
        <div :class="modalClasses" :style="modalStyle">
            <div class="header">
                <slot name="header">Modal Title</slot>                
            </div>
            <div class="content">
                <slot>
                    <div class="image">An image can appear on left or an icon</div>
                    <div class="description">A description can appear on the right</div>
                </slot>            
            </div>            
            <div class="actions">
                <slot name="actions">
                    <div class="ui black deny button" @click="dialog=false">Закрыть</div>
                </slot>                
            </div>
        </div>        
    </div>
</template>
<script>
export default 
{
    props:["dialog","size"],
    data()
    {
        let obj = 
        {
            showDialog: false,
            overlayClasses:"ui dimmer modals page transition hidden",
            modalClasses:`ui ${this.size || "small"} modal transition hidden`,
            overlayStyle:"",
            modalStyle:"",
            sizeCls: this.size || "small"
        };
        return obj;
    },
    mounted()
    {},
    methods:
    {},
    watch:
    {
        dialog(newVal, oldVal)
        {
            if(newVal == false)
            {
                this.overlayClasses="ui dimmer modals page transition visible active animating fade out";
                this.modalClasses=`ui ${this.sizeCls} modal transition visible active animating scale out`;
                this.overlayStyle = "display: flex !important;animation-duration: 500ms;";
                this.modalStyle = "display: block !important;animation-duration: 500ms;";
                setTimeout(() =>
                {
                    this.showDialog = false;
                }, 500); 
            }
            else
            {
                this.showDialog = true;
                this.overlayClasses = "ui dimmer modals page transition visible active animating fade in";
                this.modalClasses = `ui ${this.sizeCls} modal transition visible active animating scale in`;
                this.overlayStyle = "display: flex !important;animation-duration: 500ms;";
                this.modalStyle = "display: block !important;animation-duration: 500ms;";
                setTimeout(() =>
                {
                    this.overlayClasses = "ui dimmer modals page transition visible active";
                    this.overlayStyle = "display: flex !important;";
                    this.modalStyle = "display: block !important;";
                    this.modalClasses = `ui ${this.sizeCls} modal transition visible active`;
                }, 500);              
            }
        }
    }
}
</script>