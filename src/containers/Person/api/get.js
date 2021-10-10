import axios from '@axios'
import transformer from '@/functions/t_pagination'
//import _ from '@lodash'
// import toast

export default async function (response) {
  if (response) {
    response = transformer(response)
    response.data = []
    response.headers = []
  }

  const data = await axios.post('persons', response)
  return data.data


  // try {

  // } catch (error) {
  //   console.log(error)
  // } finally {
  //   console.log('Get persons end!') 
  // }
}