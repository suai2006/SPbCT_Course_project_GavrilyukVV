import axios from "axios";
//import {SweetAlert} from "./SweetAlert";
export class RPCRequest {
    static async request(url, method='get', data={}, options={})
    {
        let res = null
        try {
            let r = await axios.request({
                url,
                method,
                data,
                ...options,
            })
            if(r?.data?.result?.message){
                res = r.data.result.message
            } else {
                this.error(url, r?.data?.error?.message ?? 'Неизвестная ошибка', r?.data?.error?.code)
            }
        } catch (e) {
            this.error(url, e.message, e.code)
        }
        return res
    }

    static error(url, message, code='')
    {        
        if(message.indexOf("401") >= 0){
            window.document.body.style.cssText ="opacity:.6; pointer-events:none;";
            window.location.reload();
            return;
        }
        console.error(`[${url}][${code}] ${message}`)
        //SweetAlert.error('Ошибка', message)
    }

    static resource(resource)
    {
        return {
            create(data, params={})
            {
                return RPCRequest.request(`/${resource}`, 'post', data, params)
            },
            read(id, params)
            {
                return RPCRequest.request(`/${resource}/${id}`, 'get', {}, params)
            },
            async update(idOrData, data={}, params={})
            {
                if(typeof (idOrData ?? []) === 'object'){
                    data = idOrData
                    idOrData = null
                }
                let url = `/${resource}/${idOrData}`
                let res = await RPCRequest.request(url, 'put', data, params)
                if(res.fail){
                    for(let failed of res.fail){
                        console.error(
                            `[${url}] Дествие ${failed.action} завершилось с ошибкой ${failed.error}. ` +
                            'Отправленные данные: '+JSON.stringify(failed.item)
                        )
                    }
                }
                return res
            },
            async delete(idOrData, params={}, confirm=true)
            {
                let data = {}
                if(typeof (idOrData ?? []) === 'object'){
                    data = idOrData
                    idOrData = null
                }
                let res = confirm?await SweetAlert.confirm('Вы уверены?'):true
                return res?RPCRequest.request(`/${resource}/${idOrData}`, 'delete', data, params):null
            },
        }
    }
}
