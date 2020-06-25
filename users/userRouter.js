const router = require("express").Router();
const Users = require("./usersModel"); 
const db = require("../database/dbConfig");

router.get("/", (req, res) => {
    Users.find()
    .then(users => {
        res.json(users);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET users"}, err);
    });
});

router.get("/:id", (req, res) => {
    const { id } = req.params
    db('medCabUsers')
      .where({ id })
      .first()
      .then((user) => {
      res.json(user)
      })
      .catch((err) => {
      res.status(500).json({ message: "Failed GET user by ID" }, err)
      });
});

module.exports = router;