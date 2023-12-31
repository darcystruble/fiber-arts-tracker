import api from "./API";

export const knitOne = async (id: string) => {
    try {
        const res = await api.get(`knitting/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete knitting project:', e)
        throw e
    }
}

export const knitEdit = async (id: string, editedData: any) => {
    try {
        const res = await api.put(`knitting/${id}`, editedData)
        return res.data
    } catch (e) {
        console.error('Error edit knitting project:', e)
        throw e
    }
}


export const knitDelete = async (id: string) => {
    try {
        const res = await api.delete(`knitting/${id}`)
        return res.data
    } catch (e) {
        console.error('Error view/edit/delete knitting project:', e)
        throw e
    }
}