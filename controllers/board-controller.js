const BoardService = require('../services/board-service');

class BoardController {
  async createTask(req, res) {
    try {
      const { body } = req;
      const { status } = await BoardService.createTask(body);
      res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async updateTask(req, res) {
    try {
      const { body } = req;
      const { status } = await BoardService.updateTask(body);
      res.sendStatus(status);
    } catch(e) {
      console.log(e);
      res.sendStatus(500);
    }
  }

  async createSection(req, res) {
    try {
      const { body } = req;
      const { status } =  await BoardService.createSection(body);
      res.sendStatus(status)
    } catch(e) {
      console.log(e);
      res.sendStatus(500)
    }
  }

  async getBoard(req, res) {
    try {
      const response =  await BoardService.getBoard();
      res.send(response)
    } catch(e) {
      console.log(e);
      res.sendStatus(500)
    }
  }
}

module.exports = new BoardController;
