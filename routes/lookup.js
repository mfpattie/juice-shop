const db = require("../models");
module.exports = (req, res) => {
  const q = "SELECT * FROM Products WHERE name = '" + req.query.name + "'";
  db.sequelize.query(q).then((r) => res.json(r));
};

//here for an edit
//here for an edit again
