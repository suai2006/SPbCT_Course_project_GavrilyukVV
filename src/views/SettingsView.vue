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
                        <div class="inline field">
                            <div ref="checkboxWrap1" class="ui toggle checkbox">
                                <input ref="checkbox1" type="checkbox" tabindex="0" class="hidden">
                                <label></label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Отправлять уведомления от системы в телеграмм</td>
                    <td class="right aligned">
                        <div class="inline field">
                            <div ref="checkboxWrap2" class="ui toggle checkbox">
                                <input ref="checkbox2" type="checkbox" tabindex="0" class="hidden">
                                <label></label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Отправлять уведомления от системы на электронную почту</td>
                    <td class="right aligned">
                        <div class="inline field">
                            <div ref="checkboxWrap3" class="ui toggle checkbox">
                                <input ref="checkbox3" type="checkbox" tabindex="0" class="hidden">
                                <label></label>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr class="disabled">
                    <td>Отправлять уведомления о срабатываний системы в 112</td>
                    <td class="right aligned">
                        <div class="inline field">
                            <div ref="checkboxWrap4" class="ui toggle checkbox">
                                <input ref="checkbox4" type="checkbox" tabindex="0" class="hidden">
                                <label></label>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </Content>
</template>
<script>
    export default 
    {
        name: 'settings',
        components: {},
        data()
        {
            let obj = 
            {
                title : "Настройки",
                checked1:false,
                checked2:false,
                checked3:false,
                checked4:false,
            };
            return obj;
        },
        beforeMount(){},
        mounted()
        {
            document.title = this.title;
            this.$refs.checkboxWrap1.onclick = () => this.checked1 = !this.checked1
            this.$refs.checkboxWrap2.onclick = () => this.checked2 = !this.checked2
            this.$refs.checkboxWrap3.onclick = () => this.checked3 = !this.checked3
            this.$refs.checkboxWrap4.onclick = () => this.checked4 = !this.checked4
        },
        computed: {},      
        methods: {},
        watch:
        {
            checked1()
            {
                this.$refs.checkboxWrap1.classList.toggle("checked");
                this.$refs.checkbox1.checked = this.$refs.checkbox1.checked ? false : true;
            },
            checked2()
            {
                this.$refs.checkboxWrap2.classList.toggle("checked");
                this.$refs.checkbox2.checked = this.$refs.checkbox2.checked ? false : true;
            },
            checked3()
            {
                this.$refs.checkboxWrap3.classList.toggle("checked");
                this.$refs.checkbox3.checked = this.$refs.checkbox3.checked ? false : true;
            },
            checked4()
            {
                this.$refs.checkboxWrap4.classList.toggle("checked");
                this.$refs.checkbox4.checked = this.$refs.checkbox4.checked ? false : true;
            },
        }
    }
</script>
<style scoped>

</style>