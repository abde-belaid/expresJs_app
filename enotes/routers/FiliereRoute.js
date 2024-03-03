import express from "express"
import { deleteF, index, save, show, update,deleteAll } from "../controllers/FiliereController.js"
const FiliereRouter=express.Router()
FiliereRouter.get('/',index)
FiliereRouter.get('/:code',show)
FiliereRouter.delete('/delete',deleteF)
FiliereRouter.get('/deleteAll/:listecode',deleteAll)
FiliereRouter.post('/',save)
FiliereRouter.put('/',update)
export default FiliereRouter