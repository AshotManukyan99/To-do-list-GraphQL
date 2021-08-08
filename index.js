const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000
const sequelize = require('./utils/database')
const {graphqlHTTP} = require('express-graphql')
const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())

app.use(graphqlHTTP({
    schema: schema,
    rootValue: resolver,
    graphiql: true
}))

app.use((req, res) => {
    res.sendFile('/index.html')
})

async function start() {
    try {
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server running in port - ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
