const axios = require('axios');

class Db {
    constructor() {
        this.url = 'https://mock-bomb.raiomarco.repl.co'
    }

    async getSearch() {
        try {
            const response = await axios.get(`${this.url}/busca`);
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchFicha() {
        try {
            const response = await axios.get(`${this.url}/busca/fichas`);
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchDiario() {
        try {
            const response = await axios.get(`${this.url}/busca/diarios`);
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getFicha(num) {
        try {
            const response = await axios.get(`${this.url}/ficha/`+num);
            let data = response.data
            console.log(data)
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getOcr(files) {
        try {
            const response = await axios.post(`${this.url}/ocr`);
            let data = response.data
            console.log(data)
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    // async getFichaFotos() {
    //     try {
    //         const response = await axios.get(`${this.url}/ficha/fotos`);
    //         let data = response.data
    //         return data
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
}

let db = new Db()

export default db