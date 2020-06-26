const router = require("express").Router();
const Saved = require("./savedModel"); 
const db = require("../database/dbConfig");
const restricted = require("../auth/authMiddleware");
const authMiddleware = require("../auth/authMiddleware");


//list all Saved
router.get("/", restricted, authMiddleware, (req, res) => {
    Saved.find()
    .then(saved => {
        res.json(saved);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET saved list"}, err);
    });
});

//find a user's saved list
router.get("/:username", restricted, authMiddleware, (req, res) => {
    const { username } = req.params
    db("savedList")
      .where({ username })
      .then((saved) => {
      res.json(saved)
      })
      .catch((err) => {
      res.status(500).json({ message: "Failed GET saved list for this user" }, err)
      });
});

//post Strain to user's saved list
router.post("/addSaved", restricted, authMiddleware, (req, res) => {
    const strain = req.body;
    Saved.addStrain(strain)
        .then((saved) => {
        res.status(201).json(saved);
        })
        .catch((error) => {
        console.log(error);
        res.status(400).json({ errorMessage: "Failed to POST strain" });
        });
  });



module.exports = router;