const BoardModel = require('./board-model');

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
      let board = await BoardModel.find();
      const { _id } = board[0];
      let section = await BoardModel.findById(_id);
      section.list.push(body);
      await section.save();

      return { status: 200 };
    } catch (e) {
      console.log('!!!createTask!!!', e);
      return { status: 500 };
    }
  }

  async updateTask(body) {
    try {
      const { oldSectionId, newSectionId, _id, title, description, startDate, endDate } = body;
      console.log(oldSectionId, newSectionId, _id, title, description, startDate, endDate)
      let oldSection = await BoardModel.findById(oldSectionId);
      if (newSectionId) {
        let newSection = await BoardModel.findById(newSectionId);
        oldSection.list = oldSection.list.filter(el => el._id !== _id);
        newSection.list.push(body);
        await newSection.save();
      } else {
        const index = oldSection.list.map(el => el._id === _id).indexOf(true);
        if (index !== - 1) {
          oldSection.list[index] = { _id, title, description, startDate, endDate };
        } else {
          return { status: 404 };
        }
      }

      await oldSection.save();

      return { status: 200 };
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }

  async deleteTask(body) {
    try {
      const { sectionId, _id } = body;
      let section = await BoardModel.findById(sectionId);
      section.list = section.list.filter(el => el._id !== _id);
      await section.save();

      return { status: 200 };
    } catch (e) {
      console.log(e);
      return { status: 500 };
    }
  }

  async createSection(body) {
    try {
      const { _id, name } = body;
      await BoardModel.create({ _id, name, list: [] });
      return { status: 200 };
    } catch (e) {
      console.log('!!!createSection!!!', e);
      return { status: 500 }
    }
  }
}

module.exports = new BoardService();
