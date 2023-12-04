import api from "./API";

export const fiberInfo = async () => {
    try {
        const res = await api.get('fiber/')
        return res.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}