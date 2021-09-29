import axios from 'axios'
import  FormData from 'form-data'

export default async function (email, password) {
    let data = new FormData()
    data.append('username', email)
    data.append('password', password)
    data.append('client_id', '9')
    data.append('client_secret', 'NOSfTfrcUIKdGLrtL3uKWSQHWWM2Ry8zlgHFbAPp')
    data.append('grant_type', 'password') 
    console.log(import.meta.env);
    let config = {
        method: 'post',
        url: `${import.meta.env.VITE_PORT}oauth/token`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        xhrFields: {withCredentials: true},
        data: data
    }

    await axios(config)
        .then(async function (response) { 

            //reload
            localStorage.access_token = await response.data.access_token  
            setTimeout(() => {
                window.location.href = '/'
            }, 400)
            
        })
        .catch(function (error) {
            console.log(error)
        })
}