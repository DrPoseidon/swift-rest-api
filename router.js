const Router = require('express').Router;
const router = new Router;
const BoardController = require('./board-controller');

router.post('/createTask', BoardController.createTask);

router.put('/updateTask', BoardController.updateTask);

router.delete('/deleteTask', BoardController.deleteTask);

router.post('/createSection', BoardController.createSection);

router.get('/getBoard', BoardController.getBoard);

module.exports = router
