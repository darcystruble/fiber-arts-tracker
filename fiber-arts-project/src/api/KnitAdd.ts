import api from "./API";

export const knitAdd = async (postData: any) => {
    try {
        const res = await api.post('knitting/', postData)
        return res.data
    } catch (e) {
        console.error('Error creating knitting project:', e)
        throw e
    }
}