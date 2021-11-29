
import axios from '@axios'
import { toast } from '../plugins/toast'

// import toast
export default async function (route, req) {
    try {
        let response = {}

        //console.log(route);
        //if (req) {
        response = await axios.post(route, req)
        // } else {
        //     response = await axios.post(route) 
        // }   
        if (response.data?.component == 'toast' && typeof(response.data?.data?.message) == 'string') {
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