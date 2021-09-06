import Post from "./post.js";

class Service {
  async create(post) {
    const postCreated = await Post.create(post)
    return postCreated
  }

  async getAll() {
    const posts = await Post.find();
    return posts
  }

  async getOne(id) {
    if (!id) {
      throw new Error('No Id')
    }
    const soloPost = await Post.findById(id);
    return soloPost;
  }

  async update(post) {
    if (!post._id) {
      throw new Error('NO ID HERE')
    }
    const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
    return updatedPost
  }

  async delete(id) {
    if (!id) {
      throw new Error('NO ID HERE')
    }
    const post = await Post.findByIdAndDelete(id);
    return post
  }
}

export default new Service()