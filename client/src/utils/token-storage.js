import jwt_decode from "jwt-decode";

const cookie_name = '_app_fse_token'
const cookie_valid_time = 1000 * 60 * 60 * 24 // 1 day

export class AuthToken {
    static parseToken(token) {
        return jwt_decode(token)
    }

    static addToken(token, expires) {
        if (!expires) {
            expires = new Date(Date.now() + cookie_valid_time)
        }

        const cookie = [
            `${cookie_name}=${btoa(token)}`,
            `path=/`,
            expires ? `expires=${new Date(expires).toUTCString()}` : null
        ]
            .filter(Boolean)
            .join(';')

        document.cookie = cookie
    }

    static checkForToken() {
        const cookies = parseCookie()
        if (!cookies[cookie_name]) {
            return null
        }
        return this.parseToken(atob(cookies[cookie_name]))
    }

    static removeToken() {
        document.cookie = `${cookie_name}=; Max-Age=0; path=/`;
    }
}

function parseCookie(str = document.cookie) {
    return str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0]?.trim())] = decodeURIComponent(v[1]?.trim());
            return acc;
        }, {});
}