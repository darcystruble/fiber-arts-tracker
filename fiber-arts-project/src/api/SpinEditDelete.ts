import api from "./API";

export const spinOne = async (id: string) => {
    try {
        const res = await api.get(`spinning/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete spin project:', e)
        throw e
    }
}

export const spinEdit = async (id: string, postData:any) => {
    try {
        const res = await api.put(`spinning/${id}`, postData)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete spin project:', e)
        throw e
    }
}

export const spinDelete = async (id: string) => {
    try {
        const res = await api.delete(`spinning/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete spin project:', e)
        throw e
    }
}