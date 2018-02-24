const graphql = require('graphql');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLInt,
    GraphQLSchema } = graphql;

const users = [
    { id :'1', firstName: 'John', age: 35 },
    { id:'2', firstName: 'Jane', age:42 }
];

const UserType = new GraphQLObjectType({
    name: 'User1',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args){
                return users.find( user => user.id === args.id )
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query : RootQuery
});