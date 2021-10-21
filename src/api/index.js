import axios from '@axios'
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
        return response.data 
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('Get data for ' + route)
    }
}