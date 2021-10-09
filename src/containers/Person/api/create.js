import axios from '@axios'
// import toast

export default async function(params) {
    try {
        const data = await axios.post('personas')
        console.log(data)
    } catch (error) {
        
    } finally {

    }
}
