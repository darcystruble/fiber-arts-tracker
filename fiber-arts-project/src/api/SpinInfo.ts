import api from "./API";

export const spinInfo = async () => {
    try {
        const res = await api.get('spinning/')
        return res.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}