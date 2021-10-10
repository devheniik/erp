import axios from '@axios'
// import toast
export default async function (id) {
    try { 
        const data = await axios.get(`persons/${id}`)
        return data.data.data
    } catch (error) {
        console.log(error)
    } finally { 
        console.log('Get person ' + id);
    }
}