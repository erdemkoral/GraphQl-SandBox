const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

app.get('/', (req, res , next) => {
    res.send('graphQl')
        .catch(next);
});

app.use('/graphql', expressGraphQL({
    graphiql: true
}));

app.listen(4000, () => {
    console.log('server is running port 4000');
});