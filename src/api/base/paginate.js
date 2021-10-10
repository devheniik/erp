import axios from '@axios'
// import toast
export default async function (route, id) {
    try { 
        const data = await axios.get(`${route}/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('Get links for ' + route + ' ' + id)
    }
}