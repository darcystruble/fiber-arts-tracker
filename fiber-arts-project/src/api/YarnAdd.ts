import api from "./API";

export const yarnAdd = async (postData: any) => {
    try {
        const res = await api.post('yarn/', postData)
        return res.data
    } catch (e) {
        console.error('Error creating yarn:', e)
        throw e
    }
}