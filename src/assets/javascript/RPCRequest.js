import axios from "axios";
export default class RPCRequest 
{
    static async request( method='get', url, data={}, headersIn = {}, options={})
    {
        let res = null
        try 
        {
            let headers = { 
                'Content-Type': 'application/json', 
                'X-Requested-With': 'XMLHttpRequest',
                ...headersIn                    
            };
            
            let config = 
            {
                method: method,
                maxBodyLength: Infinity,
                url: url,
                headers,
                withCredentials: true,
                ...options            
            };

            if(data) config.data = data;
            let response = await axios.request(config);
            res = response.data;
        } 
        catch (error) 
        {
            //RPCRequest.error(url, error.message);
            res = {error};
        }
        return res
    }

    static error(url, message, code='')
    {        
        if(message.indexOf("401") >= 0)
        {
            window.document.body.style.cssText ="opacity:.6; pointer-events:none;";
            RPCRequest.deleteAllCookies();
            window.location.reload();
            return;
        }
    }

    static deleteAllCookies() {
        const cookies = document.cookie.split("; ");
      
        cookies.forEach((cookie) => {
          const name = cookie.split("=").shift();
          this.deleteCookie(name);
        });
      
        // Some sites backup cookies in `localStorage`
        window.localStorage.clear();
      }

    static deleteCookie(name) {
        document.cookie = 
          `${name}=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; Path=/`;
      
          // Remove it from local storage too
          window.localStorage.removeItem(name);
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
                //let res = confirm?await SweetAlert.confirm('Вы уверены?'):true
                return res?RPCRequest.request(`/${resource}/${idOrData}`, 'delete', data, params):null
            },
        }
    }
}
