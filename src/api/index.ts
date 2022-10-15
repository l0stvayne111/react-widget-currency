import axios from "axios";

export const $api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})


class Api {
    getRates() {
        // @ts-ignore
        return $api.get().then(res => res.data)
    }
}

export const api = new Api();