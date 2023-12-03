<template>
    <Content :title="title">
        <Flat>  
            <path
                ref="zone1"
                class="watch_point"
                id="zone1"
                @click="zoneClick"
                d="M 253,378 h 278 v 55 h -170 v 26 h -108 v -81.2" />  
            <path
                ref="zone2"
                class="watch_point"
                id="zone2"
                @click="zoneClick"
                d="M 380,450 h 152 v 214 h -152 v -214"/>
            <path
                ref="zone3"
                class="watch_point"
                id="zone3"
                @click="zoneClick"
                d="M 552,382 h 154 v 282 h -154 v -282" />
            <path
                ref="zone4"
                class="watch_point"
                id="zone4"
                @click="zoneClick"
                d="M 552,112 h 145 v 250 h -145 v -250" />
            <path
                ref="zone5"
                class="watch_point"
                id="zone5"
                @click="zoneClick"
                d="M 396,112 h 135 v 90 h -113.5 v -22 h -22 v -68" />
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
                    {ref:"zone1"}
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