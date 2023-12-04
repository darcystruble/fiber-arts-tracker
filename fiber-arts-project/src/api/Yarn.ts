import api from "./API";

export const yarnInfo = async () => {
    try {
        const res = await api.get('yarn/')
        return res.data
    } catch (e) {
        console.error('Error fetching users:', e)
        throw e
    }
}