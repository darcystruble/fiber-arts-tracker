import api from "./API";

export const spinAdd = async (postData: any) => {
    try {
        const res = await api.post('spinning/', postData)
        return res.data
    } catch (e) {
        console.error('Error creating spinning project:', e)
        throw e
    }
}