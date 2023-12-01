import api from "./API";

export const crochetInfo = async () => {
    try {
        const res = await api.get('crochet/')
        return res.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}