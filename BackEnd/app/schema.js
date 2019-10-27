const graphql = require('graphql')
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = graphql

const Post = require('../controllers/post');

const posts = [
    {
        title: 'First post',
        description: 'Content of the first post',
        author: 'Flavio'
    },
    {
        title: 'Second post',
        description: 'Content of the second post',
        author: 'Roger'
    }
]

const postType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
    }
})

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        post: {
            type: postType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (source, { id }) => {
                return posts[id]
            }
        },
        posts: {
            type: new GraphQLList(postType),
            resolve: async () => {
                return await Post.getAllPosts();
            }
        }
    }
})

const schema = new GraphQLSchema({
    query: queryType
})

module.exports = schema