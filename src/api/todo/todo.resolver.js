const getAllTodos = async (_, args, {
    model
}) => {
    return model.Todo.query()
}

const createTodo = async (_, args, {
    model
}) => {
    console.log({
        ...args.data
    })
    return model.Todo.query().insertAndFetch({
        ...args.data
    })
}

const updateTodo = async (_, args, {
    model
}) => {
    console.log(args.data.id)
    return await model.Todo.query().patchAndFetchById(args.data.id, args.data)
}

module.exports = {
    Query: {
        getAllTodos
    },
    Mutation: {
        createTodo,
        updateTodo
    }
}