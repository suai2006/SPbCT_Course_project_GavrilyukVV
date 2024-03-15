<template>
    <Content :title="title">
        <Flat>  
            <path v-for="item in Object.values(items)" :key="item.id" :ref="item.id" class="watch_point" :id="item.id" @click="item.handler" :d="item.draw" />
        </Flat>
        <modal :dialog="dialog">
            <template #header>
                Тестовый заголовок
            </template>
            <div class="description">
                Какойто текст который в последствии будет изменен.
            </div>
            <template #actions>
                <div class="ui black deny button" @click="confirm">Закрыть</div>
                <div class="ui positive right labeled icon button" @click="confirm">
                    Yep, that's me
                    <i class="checkmark icon"></i>
                </div>
            </template>
        </modal>
    </Content>
</template>
<script>
    import Flat from "@/components/objectmap/Flat.vue";
    import modal from '@/components/semantic/Modal.vue';    
    export default 
    {
        name: 'about',
        components: {Flat, modal},
        setup(){},
        data()
        {
            let obj = {
                title : "Карта объекта",
                dialog: false,
                alert_interval_ids: [],
                items:
                {
                    zone1:{id:"zone1", handler : this.zoneClick, draw:"M 23.629 399.782 L 22.991 496.854 L 118.785 494.299 L 118.785 504.518 L 232.461 506.433 L 231.823 366.573 L 137.305 365.935 L 137.944 399.782 L 23.629 399.782 Z"},
                    zone2:{id:"zone2", handler : this.zoneClick, draw:"M 23.629 30.654 L 22.991 281.636 L 91.963 281.636 L 91.963 275.249 L 199.252 273.972 L 199.252 256.729 L 222.882 256.73 L 222.243 31.293 L 23.629 30.654 Z"},
                    zone3:{id:"zone3", handler : this.zoneClick, draw:"M 228.629 31.293 L 228.629 263.115 L 406.807 263.754 L 406.807 30.654 L 228.629 31.293 Z"},
                    zone4:{id:"zone4", handler : this.zoneClick, draw:"M 434.268 21.713 L 434.268 83.022 L 478.334 83.022 L 478.334 91.963 L 474.502 91.963 L 474.502 109.206 L 414.47 109.206 L 413.832 263.115 L 655.234 263.115 L 655.234 109.844 L 524.315 109.845 L 524.315 93.24 L 521.761 93.24 L 521.76 83.022 L 586.901 83.66 L 586.262 21.075 L 434.268 21.713 Z"},
                    zone5:{id:"zone5", handler : this.zoneClick, draw:"M 479.611 269.502 L 480.25 339.751 L 410.639 339.751 L 411.278 441.293 L 655.234 441.932 L 653.957 270.14 L 479.611 269.502 Z"}
                }
            };
            return obj;
        },
        created(){},
        beforeCreate(){},
        beforeDestroy()
        {
            for(let interval of this.alert_interval_ids)
            {
                clearInterval(interval);
            }            
        },
        mounted()
        {
            document.title = this.title;       
            this.blink('zone4');             
        },
        computed:{},      
        methods: 
        {
            zoneClick(event)
            {
                this.dialog = true;
            },
            confirm () 
            {
                this.dialog = false;
            },
            blink(zone)
            {
                if(this.$refs[zone] && this.$refs[zone].length)
                {
                    let interval = setInterval(() => 
                    {
                        this.$refs[zone][0].classList.toggle("alert");                        
                    }, 500);
                    this.alert_interval_ids.push(interval);
                } 
            }
        }     
    }
</script>
<style scoped>
    #svg24
    {
        margin-top: 20px;
    }
    .watch_point
    {
        fill:rgb(33 133 208 / 8%);
        fill-opacity:1;
        stroke-width:0.75;
        stroke: transparent;
        cursor:pointer;
        transition: 0.5s;
    }
    .watch_point:hover
    {
        fill: rgb(33 133 208 / 30%)!important;
    }
    .alert
    {
        fill: rgb(208 33 33 / 30%)!important;
    }
    .alert:hover
    {
        fill: rgb(208 33 33 / 30%)!important;
    }
</style>