import axios from '@axios'
import { toast } from '../plugins/toast'

// import toast
export default async function (route, req) {
    try {
        let response = {}

        //console.log(route);
        //if (req) {
        const cookie = JSON.parse(localStorage.cookie)
        response = await axios.post(route, { ...req, cookie: cookie})
        // } else {
        //     response = await axios.post(route) 
        // }   
        console.log(response.data.cookie)

        if (response.data?.cookie) { 
            console.log('clone cookie') 
            localStorage.cookie = JSON.stringify(response.data.cookie)
        }

        if (response?.data?.component?.includes('toast') && typeof(response.data?.data?.message) == 'string') { 
            toast(JSON.parse(JSON.stringify(response.data)))
        }

        return JSON.parse(JSON.stringify(response.data))
    } catch (error) {
        console.log(JSON.stringify(error))
        toast({ compoennt: 'toast', data: { message: error.message, type: 'danger' } })
    } finally {
        console.log('Get data for ' + route)
    }
}