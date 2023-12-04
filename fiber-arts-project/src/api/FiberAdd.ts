import api from "./API";

export const fiberAdd = async (postData: any) => {
    try {
        const res = await api.post('fiber/', postData)
        return res.data
    } catch (e) {
        console.error('Error creating fiber:', e)
        throw e
    }
}