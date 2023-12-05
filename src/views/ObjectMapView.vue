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
                    {id:"zone1", handler : this.zoneClick, draw:"M 253,378 h 278 v 55 h -170 v 26 h -108 v -81.2"},
                    {id:"zone2", handler : this.zoneClick, draw:"M 380,450 h 152 v 214 h -152 v -214"},
                    {id:"zone3", handler : this.zoneClick, draw:"M 552,382 h 154 v 282 h -154 v -282"},
                    {id:"zone4", handler : this.zoneClick, draw:"M 552,112 h 145 v 250 h -145 v -250"},
                    {id:"zone5", handler : this.zoneClick, draw:"M 396,112 h 135 v 90 h -113.5 v -22 h -22 v -68"},
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