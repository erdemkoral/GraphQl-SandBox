const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt } = graphql;

const UserType = new GraphQLObjectType({
    name: 'User1',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});