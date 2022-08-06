export const BASE_API_URL = process.env.REACT_APP_API_ADDRESS || 'http://localhost:3001'

export default class ApiBase {
    constructor(path, headers) {
        this._API_BASE = BASE_API_URL + path;
        this._HEADERS = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers || {}
        };
    }

    async _get(path) {
        const options = {
            method: 'GET',
            headers: this._HEADERS
        }
        return await this._response(this._API_BASE + path, options)
    }

    async _post(path, body) {
        const options = {
            method: 'POST',
            headers: this._HEADERS
        }
        if (body) {
            options.body = body
        }
        return await this._response(this._API_BASE + path, options)
    }

    async _put(path, body) {
        const options = {
            method: 'PUT',
            headers: this._HEADERS
        }
        if (body) {
            options.body = body
        }
        return await this._response(this._API_BASE + path, options)
    }

    async _delete(path, body) {
        const options = {
            method: 'DELETE',
            headers: this._HEADERS
        }
        if (body) {
            options.body = body
        }
        return await this._response(this._API_BASE + path, options)
    }

    async _response(url, options) {
        try {
            const res = await fetch(url, options)
            return this._handleSuccess(res)
        } catch (e) {
            return this._handleFailure(e)
        }
    }

    async _handleSuccess(response) {
        const res = {
            success: true,
            status: response.status
        };
        res.body = await response.json();
        return res;
    }

    async _handleFailure(error) {
        const res = {success: false}
        res.error = error.toString();
        return res;
    }

}