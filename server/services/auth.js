const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

//MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://eincode.eu.auth0.com/.well-known/jwks.json'
    }),
    audience: 'Tj1gs3MW1yKiMpTOfP5mTk5RvNRoazya',
    issuer: 'https://dev-bw00d1l6.auth0.com/',
    algorithms: ['RS256']
})