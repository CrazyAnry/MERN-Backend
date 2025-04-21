import PostsModel from "../modules/PostsModel.js"

export const createPost = async (req, res) => {
    const data = new PostsModel({
        title: req.body.title,
        body: req.body.body,
        views: req.body.views,
    })
    const newPost = await data.save()
    res.json({
        success: true
    })
}
export const getAllPosts = async (req, res) => {
    const data = PostsModel.find()
    const posts = await data
    res.json(posts)
}
export const getOnePost = async (req, res) => {
    const data = PostsModel.findById(req.params.id)
    const posts = await data
    res.json(posts)
}
export const remove = async (req, res) => {
    const data = PostsModel.findByIdAndDelete(req.params.id)
    const posts = await data
    res.json(posts)
}