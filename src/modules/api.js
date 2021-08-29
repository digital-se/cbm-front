import axios from "axios";

const URL = process.env.NODE_ENV === "production" ? "https://sandbox-api.cbm.se.gov.br/api-digitalse/" : "http://localhost:8082/"

export default axios.create({
    baseURL: URL
})
