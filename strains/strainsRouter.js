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

router.get("/:id", (req, res) => {
    const { id } = req.params
    Strains.findById()
      .where({ id })
      .first()
      .then((strain) => {
      res.json(strain)
      })
      .catch((err) => {
      res.status(500).json({ message: "Failed GET strain by ID" }, err)
      });
});



module.exports = router;