"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
      console.log(req.query.i);
      res.json(req.query.i)
    // knex
    //   .select("*")
    //   .from("category")
    //   .orderBy("id")
    //   .then((results) => {
    //     res.json(results);
    // });
  });

  return router;
}