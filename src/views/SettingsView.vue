<template>
    <Content :title="title">
        <table class="ui celled striped table">
            <thead>
                <tr>
                    <th colspan="3">Пользовательские настройки</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Изменить логин</td>
                    <td class="right aligned collapsing">
                        <button class="ui blue compact icon button">
                            <i class="edit icon"></i> Изменить
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>Изменить пароль</td>
                    <td class="right aligned">
                        <button class="ui blue compact icon button">
                            <i class="edit icon"></i> Изменить
                        </button>
                    </td>
                </tr>                
            </tbody>
        </table>
        <table class="ui celled striped table">
            <thead>
                <tr>
                    <th colspan="3">Системные настройки</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Включить систему мониторинга за датчиками</td>
                    <td class="right aligned collapsing">
                        <Checkbox :checked="checked1"/>
                    </td>
                </tr>
                <tr>
                    <td>Отправлять уведомления от системы в телеграмм</td>
                    <td class="right aligned">
                        <Checkbox :checked="checked2"/>
                    </td>
                </tr>
                <tr>
                    <td>Отправлять уведомления от системы на электронную почту</td>
                    <td class="right aligned">
                        <Checkbox :checked="checked3"/>
                    </td>
                </tr>
                <tr class="disabled">
                    <td>Отправлять уведомления о срабатываний системы в 112</td>
                    <td class="right aligned">
                        <Checkbox :checked="checked4"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </Content>
</template>
<script>
    import Checkbox from '@/components/semantic/Checkbox.vue'; 
    export default 
    {
        name: 'settings',
        components: {Checkbox},
        data()
        {
            let obj = 
            {
                title : "Настройки",
                checked1:true,
                checked2:false,
                checked3:true,
                checked4:false,
            };
            return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
        },
        computed: {},      
        methods: {},
        watch:{}
    }
</script>
<style scoped>

</style>