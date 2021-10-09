import axios from '@axios'
//import _ from '@lodash'
// import toast

export default async function (response) { 
  if (response){
    response.data = []
    response.headers = []
  }

  try {
    const data = await axios.get('personas', response) 
    return data.data
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Get persons end!') 
  }
}