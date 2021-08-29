import axios from "axios"
import apim from "../modules/api"

class Api {
    constructor() {
        // this.url = 'https://sandbox-api.cbm.se.gov.br/api-digitalse'
        // this.url = 'http://localhost:8082'
    }

    async getSearch(values, token) {

        console.log(token)
        try {
            const response = await apim.get(`documentos/`,
                {
                    headers: { "Authorization": `Bearer ${token}` },
                    params: values
                });

            let data = response.data
            return data

        } catch (error) {
            console.error(error);
            let noResults = [];
            return noResults;
        }
    }

    async getSearchFicha() {
        try {
            const response = await apim.get(`busca/fichas`);
            let data = response.data
            return data
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchDiario() {
        try {
            const response = await apim.get(`busca/diarios`);
            let data = response.data
            return data
        } catch (error) {
            console.error(error);
        }
    }

    async getFicha(num) {
        try {
            const response = await apim.get(`ficha/` + num);
            let data = response.data
            console.log(data)
            return data
        } catch (error) {
            console.error(error);
        }
    }

    async getOcr(files) {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        try {
            fd.append("file", files[0], "teste.jpg");
            const response = await axios.post(`http://localhost:8082/testes/getFromUrl`, fd, config);
            let data = response.data
            return data
        } catch (error) {
            console.error(error);
        }
    }
}

let api = new Api()

export default api
