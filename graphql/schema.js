const {buildSchema} = require('graphql')


module.exports = buildSchema(`
    type Todo {
      id: ID!
      title: String!
      done: Boolean!
      updatedAt: String
      createdAt: String
    }

    type Query {
         getTodos: [Todo!]!
    }
    
    input TodoInput {
        title: String!
    }
    
    type Mutation {
        createdTodo(todo: TodoInput!): Todo!
        updateTodo(id:ID!): Todo! 
        deleteTodo(id:ID!): Boolean!
    }
`)
