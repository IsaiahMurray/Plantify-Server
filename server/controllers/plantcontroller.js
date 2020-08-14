const express = require("express");
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Plant = require("../db").import("../models/plant");

// ----------------------------------------

// router.get('/practice', validateSession, function(req, res){
//     res.send('this is the practice route')
// })

// - Plant Create ---------------------------------------------
router.post("/create", validateSession, (req, res) => {
  const plantEntry = {
    // id: req.body.plant.id,
    commonName: req.body.plant.commonName,
    family: req.body.plant.family,
    familyCommonName: req.body.plant.familyCommonName,
    scientificName: req.body.plant.scientificName,
    genus: req.body.plant.genus,
    image: req.body.plant.image,
    description: req.body.plant.description,
    notes: req.body.plant.notes,
    owner: req.user.id,
  }
  Plant.create(plantEntry)
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({ error: err }));
});

// - Plant Save -------------------------------------------------
router.post("/save", validateSession, (req, res) => {
    const plantEntry = {
        id: req.body.plant.id,
        commonName: req.body.plant.commonName,
        familyName: req.body.plant.familyName,
        scientificName: req.body.plant.scientificName,
        genus: req.body.plant.genus,
        image: req.body.plant.image,
    }
    Plant.create(plantEntry)
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({ error: err }));
})

// - Get All Plants ---------------------------------------------

router.get('/', (req, res)=>{
    Plant.findAll()
    .then(plants=>res.status(200).json(plants))
    .catch(err => res.status(500).json({error:err}))
});

// - Get Plants by User -------------------------------------------

router.get('/mine', validateSession, (req, res)=>{
    let userId = req.user.id
    Plant.findAll({
        where: {owner: userId}
    })
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({ error: err }));
});

// - Get Plants By Name --------------------------------------------

router.get('/commonName',function(req, res){
    let title= req.params.commonName;

    Journal.findAll({
        where:{commonName:commonName}
    })
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({ error: err }))
})

// - Update Entry ---------------------------------------------

router.put('/update/:commonName', validateSession, function(req, res){
    const updatePlantEntry={
        commonName: req.body.plant.commonName,
        familyName: req.body.plant.date,
        scientificName: req.body.plant.entry,
        description: req.body.plant.description,
        notes: req.body.plant.notes,
    };
    const query = {where: {id:req.params.commonName, owner:req.user.id}};

    Plant.update(updatePlantEntry, query)
    .then((plants) => res.status(200).json(plants))
    .catch((err) => res.status(500).json({ error: err }))
})

// - Deleting a Plant -------------------------------------------

router.delete('/delete/:commonName', validateSession, function(req,res){
    const query = {where: {commonName: req.params.commonName, owner: req.user.id}};

    Plant.destroy(query)
    .then(() => res.status(200).json({message:'Plant Removed'}))
    .catch((err) => res.status(500).json({ error: err }))
})



module.exports = router;
