import api from "./API";

export const yarnOne = async (id: string) => {
    try {
        const res = await api.get(`yarn/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete yarn project:', e)
        throw e
    }
}

export const yarnEdit = async (id: string, postData:any) => {
    try {
        const res = await api.put(`yarn/${id}`, postData)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete yarn project:', e)
        throw e
    }
}

export const yarnDelete = async (id: string) => {
    try {
        const res = await api.delete(`yarn/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete yarn project:', e)
        throw e
    }
}