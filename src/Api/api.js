const axios = require('axios');

class Api {
    constructor() {
        this.url = 'https://sandbox-api.cbm.se.gov.br/api-digitalse'
    }

    async getSearch() {
        
        try {
            const response = await axios.get(`${this.url}/documentos`);
            let data = response.data
            return data
        } catch (error) {
            let sim = [];
            console.error(error);
            return sim;
        }
    }

    async getSearchFicha() {
        try {
            const response = await axios.get(`${this.url}/busca/fichas`);
            let data = response.data
            return data
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchDiario() {
        try {
            const response = await axios.get(`${this.url}/busca/diarios`);
            let data = response.data
            return data
        } catch (error) {
            console.error(error);
        }
    }

    async getFicha(num) {
        try {
            const response = await axios.get(`${this.url}/ficha/` + num);
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