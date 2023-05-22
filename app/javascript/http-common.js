import axios from "axios";
import token from './helpers/csrf.js'

export default axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type": "application/json",
        "X-CSRF-Token": token
    }
});