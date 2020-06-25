const router = require("express").Router();
const Strains = require("./strainsModel");
const restricted = require("../auth/authMiddleware");

router.get("/", restricted, (req,res) => {
    Strains.find()
    .then(strains => {
        res.json(strains);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET strains"}, err);
    });
});

module.exports = router;