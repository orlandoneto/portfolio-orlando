const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
const routes = require('../routes')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = routes.getRequestHandler(app)
const config = require('./config')

const bodyParser = require('body-parser')

const bookRouter = require('./routes/book')
const portfolioRouter = require('./routes/portfolio')


const secretData = [
    {
        title: 'SecretData 1',
        description: 'Plans how to build spaceship'
    },
    {
        title: 'SecretData 2',
        description: 'My secret passwords'
    }
]

mongoose.connect(config.DB_URI, { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err))

app.prepare()
    .then(() => {
        const server = express()
        server.use(bodyParser.json())

        server.use('/api/v1/books', bookRouter)
        server.use('/api/v1/portfolios', portfolioRouter)      


        //REMOVE
        server.get('/api/v1/secret', (req, res) => {
            return res.json(secretData)
        })

        server.get('/api/v1/onlysiteowner', (req, res) => {
            console.log('LOGIN', req.user);

            return res.json(secretData)
        })
        server.get('*', (req, res) => {
            return handle(req, res)
        })
        // REMOVE

        server.use(function (err, req, res, next) {
            if (err.name === 'UnauthorizedError')
                res.status(401).send({ title: 'Unauthorized', detail: 'Unauthorized Access!' });
        })

        server.use(handle).listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1)
    })