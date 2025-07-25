import {api, requestConfig} from '../utils/config'

//register user
const register = async(data) => {
    const config = requestConfig("POST", data)

    try {
        const res = await fetch(api + "/users/register", config).then((res) => res.json()).catch((err) => err)

        if(res){
            localStorage.setItem("User", JSON.stringify(res))
        }
        return res
    } catch (error) {
        console.log(error)
    }
}

const authService = {
    register
}

export default authService

