const express = require('express')
const path = require('path');
const http = require('http');
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema.js')

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))


const httpServer = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', (req, res, next) => {

    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'content-type, authorization, content-length, x-requested-with, accept, origin');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    res.header('Allow', 'POST, GET, OPTIONS')
    res.header('Access-Control-Allow-Origin', '*');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
})

app.post(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: false,
    }),
);

app.get(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }),
);

httpServer.listen(config.get("http_port"), function () {
    console.log(`Express HTTP server listening on port ${config.get("http_port")}`);
});