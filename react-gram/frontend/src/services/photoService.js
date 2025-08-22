import { api, requestConfig } from '../utils/config'

// Publicar uma foto do usuário
const publishPhoto = async (data, token) => {
    const config = requestConfig("POST", data, token, true)
    try {
        const res = await fetch(api + "/photos", config)
            .then((res) => res.json())
            .catch((err) => err)
        return res
    } catch (error) {
        console.log(error)
    }
}

const photoService = {
    publishPhoto
}

export default photoService