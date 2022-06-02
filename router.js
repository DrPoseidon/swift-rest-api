const Router = require('express').Router;
const router = new Router;
const UserController = require('./controllers/user-controller');
const BoardController = require('./controllers/board-controller');

router.post('/createTask', BoardController.createTask);

router.put('/updateTask', BoardController.updateTask);

router.post('/createSection', BoardController.createSection);

router.get('/getBoard', BoardController.getBoard);

module.exports = router
