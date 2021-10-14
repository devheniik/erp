import axios from '@axios'
// import toast
export default async function (route) {
    try { 
        const data = await axios.post(route)
        return data.data.data
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('Get links for ' + route)
    }
}