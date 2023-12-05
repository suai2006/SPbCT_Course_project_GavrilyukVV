<template>
    <Content :title="title">
        <Flat>  
            <path v-for="item in items" :key="item.id" :ref="item.id" class="watch_point" :id="item.id" @click="item.handler" :d="item.draw" />
        </Flat>
        <modal :dialog="dialog">
            <template #header>
                Тестовый заголовок
            </template>
            <div class="description">
                A description can appear on the right
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
        data()
        {
            let obj = {
                title : "Карта объекта",
                dialog: false,
                items:
                [
                    {id:"zone1", handler : this.zoneClick, draw:"M 236 286 L 232 371 L 346 373 L 347 344 L 516 347 L 516 289 Z"},
                    {id:"zone2", handler : this.zoneClick, draw:"M 362 361 L 516 361 L 513 578 L 351 576 L 362 361 Z"},
                    {id:"zone3", handler : this.zoneClick, draw:"M 534 289 L 690 290 L 699 579 L 527 579 L 534 289 Z"},
                    {id:"zone4", handler : this.zoneClick, draw:"M 531 20.907 L 683 22 L 693 274 L 535 273 L 531 20 Z"},
                    {id:"zone5", handler : this.zoneClick, draw:"M 377 21.858 L 516 19 L 517 128 L 483 128 L 485 218 L 517 218 L 517 270 L 450 269 L 454 116 L 396 115 L 397 89 L 374 89 L 377 21 Z"}
                ]
            };
            return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
        },
        computed: 
        {},      
        methods: {
            zoneClick(event)
            {
                this.dialog = true;
            },
            confirm () 
            {
                this.dialog = false;
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
        fill:#e1e1e9;
        fill-opacity:1;
        stroke-width:0.75;
        stroke: black;
        cursor:pointer;
        transition: 0.5s;
    }
    .watch_point:hover
    {
        fill: #cbc9c9!important;
    }
</style>