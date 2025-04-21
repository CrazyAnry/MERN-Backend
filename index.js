import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { create, login } from './controllers/userController.js'
import { createPost, getAllPosts, getOnePost, remove } from './controllers/postsController.js'
const app = express()
app.use(cors())
app.use(express.json())
const PORT = 5000
app.post('/reg', create)
app.post('/log', login)
app.post('/posts', createPost)
app.get('/posts', getAllPosts)
app.get('/posts/:id', getOnePost)
app.delete('/posts/:id', remove)
const startApp = () => {
    mongoose.connect('mongodb+srv://admin:yellowanry@cluster.aazuie9.mongodb.net/registration?retryWrites=true&w=majority&appName=Cluster')
    app.listen(PORT, () => console.log("Сервер запущен"))
}
startApp()