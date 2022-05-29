const BoardService = require('../services/board-service');
const UserService = require('../services/user-service');

class InstaPhotosController {
  async addTask(req, res) {
    try {
      const { body } = req;
      const { status } = await BoardService.createTask(body);

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

  // async getPhotos(req, res) {
  //   try {
  //     const { status, data = [] } = await InstaPhotosService.getPhotos();
  //     return res.status(status).json(data);
  //   } catch(e) {
  //     console.log(e);
  //     res.status(500).json({message: 'Error'});
  //   }
  // }
  //
  // async setPhotos(req, res) {
  //   try {
  //     const data = req.body;
  //     const { status } = await InstaPhotosService.setPhotos(data);
  //     return res.sendStatus(status);
  //   } catch(e) {
  //     console.log(e);
  //     res.status(500).json({message: 'Error'});
  //   }
  // }
}

module.exports = new InstaPhotosController;
