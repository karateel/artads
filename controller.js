import Service from "./service.js";

class Controller {
  async create(req, res){
    try {
      const post = await Service.create(req.body)
      res.json(post)
    } catch (e){
      res.status(500).json(e)
    }
  }

  async getAll(req, res){
    try {
      const posts = await Service.getAll();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async getOne(req, res){
    try {
      const post = await Service.getOne(req.params.id)
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }
  async update(req, res){
    try {
      const updatedPost = await Service.update(req.body)
      return res.json(updatedPost)
    } catch (e) {
      res.status(500).json(e.message)
    }
  }
  async delete(req, res){
    try {
      const post = await Service.delete(req.params._id);
      return res.json(post)
    } catch (e) {
      res.status(500).json(e)
    }
  }

}

export default new Controller();