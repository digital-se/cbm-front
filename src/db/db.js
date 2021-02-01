const axios = require('axios');

class Db {
    constructor() {

    }

    async getSearch() {
        try {
            const response = await axios.get('https://mock-bomb.raiomarco.repl.co/busca');
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchFicha() {
        try {
            const response = await axios.get('https://mock-bomb.raiomarco.repl.co/busca/fichas');
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getSearchDiario() {
        try {
            const response = await axios.get('https://mock-bomb.raiomarco.repl.co/busca/diarios');
            let data = response.data
            return data
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    async getFicha(num) {
        try {
            const response = await axios.get('https://mock-bomb.raiomarco.repl.co/ficha/'+num);
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
    //         const response = await axios.get('https://mock-bomb.raiomarco.repl.co/ficha/fotos');
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