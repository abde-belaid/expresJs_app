import mongoose from "mongoose";
const Schema = mongoose.Schema;
const filiereSchema = new Schema({
    codeFiliere: { type: String, required: true, unique: true },
    intituleFiliere: { type: String, required: true },
    image:String

})

const Filiere = mongoose.model('Filiere', filiereSchema);
export default Filiere;