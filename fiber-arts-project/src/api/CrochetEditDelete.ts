import api from "./API";

export const crochetOne = async (id: string) => {
    try {
        const res = await api.get(`crochet/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete crochet project:', e)
        throw e
    }
}

export const crochetEdit = async (id: string, postData:any) => {
    try {
        const res = await api.put(`crochet/${id}`, postData)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete crochet project:', e)
        throw e
    }
}

export const crochetDelete = async (id: string) => {
    try {
        const res = await api.delete(`crochet/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete crochet project:', e)
        throw e
    }
}