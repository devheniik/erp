import axios from '@axios'
// import toast
export default async function (id) {
    try { 
        const data = await axios.get(`person-links/${id}`)
        return data.data
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('Get links for ' + id)
    }
}