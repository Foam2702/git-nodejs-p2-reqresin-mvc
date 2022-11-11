const personM = require("../models/person.m");

// const hbsH=require('../')
exports.getAll = async (req, res, next) => {
  try {
    const data = await personM.getAll();
    res.render("person", {
      ps: data.data,
    });
  } catch (err) {
    next(err);
  }
};
