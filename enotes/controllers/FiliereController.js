import Filiere from "../models/FiliereModel.js"

const index = async (req, res) => {
    const filieres = await Filiere.find()
    // console.log(filieres);
    // res.status(200).send(filieres)
    res.render('index', { filieres: filieres })
}



const show = async (req, res) => {
    const codeFiliere = req.params.code
    const filiere = await Filiere.find({ codeFiliere: codeFiliere })
    // console.log(filieres);
    res.status(200).send(filiere)
}


const deleteF = async (req, res) => {
    const codeFiliere = req.body.codeFiliere
    try {

        await Filiere.findOneAndDelete({ codeFiliere: codeFiliere }).then(() => {

            // res.status(200).json({ "message": "la suppression est effectuer avec succes" })
            res.redirect('/enotes')
        })
    }
    catch (e) {

        res.json({ "message": "Erreur lors de la suppression " + e.message })

    }
}

const save = async (req, res) => {

    const { codeFiliere, intituleFiliere,imageFiliere } = req.body
    const filiere = new Filiere({ intituleFiliere: intituleFiliere, codeFiliere: codeFiliere,image:imageFiliere })
    try {

        await filiere.save().then(() => {
            // res.json({ "message": "La filierer est inserer avec succes" })
            res.redirect('/enotes')
        })
    }
    catch (e) {
        res.json({ "message": "Erreur lors de l'insertion " + e.message })
    }
}

const update = async (req, res) => {
    try {

        await Filiere.findOneAndUpdate({ codeFiliere: req.body.XcodeFiliere }, { codeFiliere: req.body.newcode, intituleFiliere: req.body.newintitule }, { new: true }).then(() => {
            // res.status(200).json({ 'message': 'les informarion de la filiere sont modifier avec succes' })
            res.redirect('/enotes')
        })

    }
    catch (e) {
        res.status(500).json({ 'message': 'erreur lors de modification : ' + e.message })
    }

}
const deleteAll = async (req, res) => {
    // Vérifier si req.params.listecode existe et n'est pas vide
    var listeCode = req.params.listecode ? req.params.listecode.split("-") : [];

    // Utiliser Promise.all pour exécuter les suppressions de manière asynchrone
    await Promise.all(listeCode.map(async (element) => {
        await Filiere.deleteOne({ codeFiliere: element });
    }));

    // Rediriger une fois que toutes les suppressions sont terminées
    res.redirect('/enotes');
};



export { index, show, deleteF, save, update, deleteAll }