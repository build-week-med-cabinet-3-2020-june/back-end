const router = require("express").Router();
const Users = require("./usersModel"); 
const db = require("../database/dbConfig");


//list all users
router.get("/", (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to GET users"}, err);
    });
});

//find a user by id
router.get("/:id/", (req, res) => {
    const { id } = req.params
    db('medCabUsers')
      .where({ id })
      .first()
      .then((user) => {
      res.status(200).json(user)
      })
      .catch((err) => {
      res.status(500).json({ message: "Failed GET user by ID" }, err)
      });
});





module.exports = router;