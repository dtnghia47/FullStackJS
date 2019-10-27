// const express = require('express')
// const path = require('path');
// const http = require('http');
// const config = require('config');
// const graphqlHTTP = require('express-graphql')
// const schema = require('./schema.js')

// const app = express()
// app.use('/graphql', graphqlHTTP({
//     schema: schema,
//     graphiql: true
// }))


// const httpServer = http.createServer(app);
// httpServer.listen(config.get("http_port"), function () {
//     console.log(`Express HTTP server listening on port ${config.get("http_port")}`);
// });




// I want show data when debugger
const restify = require('restify');
const graphqlHTTP = require('express-graphql');

const config = require('config');
const schema = require('./schema.js')

const app = restify.createServer();

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

app.listen(config.get("http_port"), () => {
    console.log(`App listening on port ${config.get("http_port")}`)
})