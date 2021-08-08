const Todo = require("../models/todo")


module.exports = {
    async getTodos() {
        try {
            return await Todo.findAll()
        } catch (e) {
            throw new Error('Fetch todos is not available')
        }
    },
    async createdTodo({todo}) {
        try {
            return Todo.create({
                title: todo.title,
                done: false,
                date: new Date()
            })
        } catch (e) {
            throw new Error('Title is required')
        }
    },
    async updateTodo({id}) {
        try {
            const todo = await Todo.findByPk(id)
            todo.done = true
            await todo.save()
            return todo
        } catch (e) {
            throw new Error('ID is required')
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({where: {id}})
            await todos[0].destroy()
            return  true
        } catch (e) {
            throw new Error('ID is required')
        }
    }
}
