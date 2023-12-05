import api from "./API";

export const fiberOne = async (id: string) => {
    try {
        const res = await api.get(`fiber/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete fiber project:', e)
        throw e
    }
}

export const fiberEdit = async (id: string, postData:any) => {
    try {
        const res = await api.put(`fiber/${id}`, postData)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete fiber project:', e)
        throw e
    }
}

export const fiberDelete = async (id: string) => {
    try {
        const res = await api.delete(`fiber/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete fiber project:', e)
        throw e
    }
}