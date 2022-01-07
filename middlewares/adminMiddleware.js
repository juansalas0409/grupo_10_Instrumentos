const fs = require("fs");
const path = require("path");

// const User = require('../models/User')
// const usersFilPath = path.join(__dirname, "../data/usersDB.json");
// const users = JSON.parse(fs.readFileSync(usersFilPath, "utf-8"));

const db = require("../database/models");

function adminMiddleware(req, res, next) {
    
if (req.session.userLogged){
   let user = req.session.userLogged.category_id;  
    

  if (user == 1) {
      next();
    }else{
        res.status(401).json('Debes ser admin')
    }
}else{
    res.status(401).json('Debes ser admin')
}
}

module.exports = adminMiddleware;
