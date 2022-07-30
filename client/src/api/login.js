import ApiBase from "./api";

export default class Login extends ApiBase {
    constructor() {
        super('http://localhost:3001/auth')
    }

    setLoggedIn(user) {
        return this._post('/login', JSON.stringify({user}))
    }

}