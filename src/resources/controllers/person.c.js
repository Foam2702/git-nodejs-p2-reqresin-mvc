const personM = require("../models/person.m");
// const hbsH=require('../')
exports.getAll = async (req, res, next) => {
  try {
    const data = await personM.getAll();
    res.render("person");
  } catch (err) {
    next(err);
  }
};
