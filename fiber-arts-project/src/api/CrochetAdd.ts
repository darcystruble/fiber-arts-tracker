import api from "./API";

export const crochetAdd = async (postData: any) => {
    try {
        const res = await api.post('crochet/', postData)
        return res.data
    } catch (e) {
        console.error('Error creating crochet project:', e)
        throw e
    }
}