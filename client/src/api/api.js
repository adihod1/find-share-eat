export default class ApiBase {
    constructor(address, headers) {
        this._API_BASE = address;
        this._HEADERS = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...headers || {}
        };
    }

    _get(path) {
        const options = {
            method: 'GET',
            headers: this._HEADERS
        }
        return this._response(this._API_BASE + path, options)
    }

    _post(path, body) {
        const options = {
            method: 'POST',
            headers: this._HEADERS
        }
        if (body) {
            options.body = body
        }
        return this._response(this._API_BASE + path, options)
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