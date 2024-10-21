import express from "express"
import { addFood, listFood, removeFood } from "../controllers/FoodController.js"
import multer from 'multer'

const foodRouter = express.Router();

//Image storage engine


const storage = multer.diskStorage({
    destination:'uploads/',
    filename: (req, file, cb) => {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
    
})

const upload = multer({storage:storage})
foodRouter.post('/add',upload.single('image') ,addFood) //router to route the add the foodItem from the admin panel
foodRouter.get('/list',listFood)
foodRouter.post('/remove',removeFood)




export default foodRouter;