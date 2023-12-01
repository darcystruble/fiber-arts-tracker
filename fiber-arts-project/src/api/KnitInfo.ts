import api from "./API";

export const knitInfo = async () => {
    try {
        const res = await api.get('knitting/')
        return res.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}