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
            const response = await axios.get(`${this.url}/ficha/` + num);
            let data = response.data
            console.log(data)
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getOcr(files) {
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let fd = new FormData();
        try {
            // files.map((file) => {
            //     fd.append('File[]', file);
            // });
            fd.append("file", files[0], "teste.jpg");
            // const response = await axios.post(`${this.url}/ocr`, fd, config);
            const response = await axios.post(`http://localhost:8082/testes/getFromUrl`, fd, config);
            let data = response.data
            // console.log(data)
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