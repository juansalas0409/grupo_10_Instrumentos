const fs = require("fs");
const path = require("path");

const User = require('../models/User')

const usersFilPath = path.join(__dirname, "../data/usersDB.json");
const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

function adminMiddleware(req, res, next) {
    let user = req.session.userLogged.categoria

    console.log(user)

  if (user == "admin") {
      next();
    }else{
        res.status(401).json('Debes ser admin')
    }
}

module.exports = adminMiddleware;
