import registrModel from '../modules/RegistationModel.js'
export const create = async (req, res) => {
    try{
        const doc = new registrModel({
            login: req.body.login,
            fullName: req.body.fullName,
            password: req.body.password
        })
        if(req.body.fullName.length <= 3){
            return res.json({
                message: "Неверное имя пользователя"
            })
        }
        else if(req.body.password.length <= 4){
            return res.json({
                message: "Неверный формат пароля"
            })
        }
        const newUser = await doc.save()
        res.json(newUser)
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "Такой логин уже существует"
        })
    }
}

export const login = async (req, res) => {
    try{
        const doc = await registrModel.findOne({login: req.body.login})
        if(!doc){
            return res.json({
                message: "Пользователь не найден"
            })
        }
        if(doc.password != req.body.password){
            return res.json({
                message: "Неверный пароль"
            })
        }
        res.json(doc)
    }catch(e){
        console.log(e)
        res.status(500).json({
            message: "Не удалось найти пользователя"
        })
    }
}