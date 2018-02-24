const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.get('/', (req, res , next) => {
    res.send('graphQl')
        .catch(next);
});

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server is running port 4000');
});