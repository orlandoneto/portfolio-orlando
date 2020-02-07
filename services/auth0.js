import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import { getCookieFromReq } from '../helpers/utils'

class Auth0 {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'dev-bw00d1l6.auth0.com',
            clientID: 'Tj1gs3MW1yKiMpTOfP5mTk5RvNRoazya',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        })
    }

    handleAutentication = () => {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult)
                    resolve()
                } else if (err) {
                    console.log(err)
                    reject(err)
                }
            })
        })
    }

    setSession = (authResult) => {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())

        Cookies.set('user', authResult.idTokenPayload)
        Cookies.set('jwt', authResult.idToken)
        Cookies.set('expiresAt', expiresAt)
    }

    logout = () => {
        Cookies.remove('user')
        Cookies.remove('jwt')
        Cookies.remove('expiresAt')

        this.auth0.logout({
            returnTo: '', //Home
            clientID: 'Tj1gs3MW1yKiMpTOfP5mTk5RvNRoazya'
        })
    }

    login = () => {
        this.auth0.authorize()
    }

    verifyToken = (token) => {
        if (token) {
            const decodedToken = jwt.decode(token)
            const expiresAt = decodedToken.exp = 1000
            return (decodedToken && new Date().getTime() < expiresAt) ? undefined : decodedToken
        }
        return undefined
    }

    clientAuth = () => {
        const token = Cookies.getJSON('jwt')
        const verifiedToken = this.verifyToken(token)
        return verifiedToken
    }

    serverAuth = (req) => {
        if (req.headers.cookie) {
            const token = getCookieFromReq(req, 'jwt')
            const verifiedToken = this.verifyToken(token)

            return verifiedToken
        }
        return undefined
    }
}

const auth0Client = new Auth0()

export default auth0Client