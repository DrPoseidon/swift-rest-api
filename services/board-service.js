const BoardModel = require('../models/board-model');

class BoardService {
  async getBoard() {
    try {
      let board = await BoardModel.find();
      return { status: 200, board };
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }

  async createTask(body) {
    try {
      const { _id, title, description, startDate, endDate } = body;

      let board = await BoardModel.findByIdAndUpdate(_id);
      board.list.push({ title, description, startDate, endDate });
      await board.save();

      return { status: 200 };
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }

  async createSection(body) {
    try {
      await BoardModel.create({ name: body.name, list: [] });
    } catch (e) {
      console.log(e);
      return { status: 500 }
    }

    return { status: 200 }
  }

  // async getPhotos() {
  //   const photos = await InstaPhotosModel.find();
  //
  //   if (photos) {
  //     return { status: 200, data: photos.length ? photos[0] : {}  };
  //   } else {
  //     return { status: 404 };
  //   }
  // }
  //
  // async setPhotos(data) {
  //   try {
  //     let photos = await InstaPhotosModel.find();
  //     if (photos.length) {
  //       photos[0] = data;
  //       await photos.save();
  //     } else {
  //       await InstaPhotosModel.create(data);
  //     }
  //
  //     return { status: 200 };
  //   } catch (e) {
  //     return { status: 500 };
  //   }
  // }
}

module.exports = new BoardService();
