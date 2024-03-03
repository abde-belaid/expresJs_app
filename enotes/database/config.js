import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connecter = async () => {
    try {
        console.log(process.env.DB_HOST);
        await mongoose.connect(process.env.DB_HOST).then(() => {
            console.log("la connnexion est effectuer avec succes")
        })
    }
    catch (e) {
        console.log("erreur de la connexion " + e.message);
    }
}
connecter()
export default connecter;