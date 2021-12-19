import axios from '@axios'
import { toast } from '../plugins/toast'

// import toast
export default async function (route, req) {
    try {
        let response = {}
        let cookie

        console.log(JSON.parse(localStorage.cookie))



        // if (localStorage.cookie) {
        //     cookie = JSON.parse(localStorage.cookie)   
        // }

        // var oReq = new XMLHttpRequest(); 
        // oReq.addEventListener("load", transferComplete, false);

        // oReq.open("post", `https://api.stuzer.link/v1/${route}`, req);

        // oReq.setRequestHeader('Authorization', "Bearer " + localStorage.access_token)
        // oReq.send();

        // function transferComplete(evt) {
        //     console.log(oReq.getAllResponseHeaders());
        //   }

        response = await axios.post(route, req, { headers: { 'X-Trans-Cookie': localStorage.cookie } })

        if (response.headers['x-trans-cookie']) {
            localStorage.cookie = response.headers['x-trans-cookie']
        }

        if (response?.data?.component?.includes('toast') && typeof (response.data?.data?.message) == 'string') {
            toast(JSON.parse(JSON.stringify(response.data)))
        }

        return response.data
    } catch (error) {
        console.log(JSON.stringify(error))
        toast({ compoennt: 'toast', data: { message: error.message, type: 'danger' } })
    } finally {
        console.log('Get data for ' + route)
    }
}