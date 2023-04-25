const { Router } = require('express');
const usersRouter = Router();
const { handleUserssAll, handleUsersById } = require('../handlers/UsersHandler')


usersRouter.get('/', handleUserssAll)
usersRouter.get('/:UsersId', handleUsersById)


module.exports = usersRouter