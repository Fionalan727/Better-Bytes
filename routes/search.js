"use strict";

const express = require('express');
const router  = express.Router();


const request = require('request');
const cheerio = require('cheerio');

module.exports = (knex) => {

router.get("/:query", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
 console.log(req.params.query)
const query = req.params.query;


let searchResults = [], cart = [];

request(`https://www.metro.ca/en/search?filter=${query}&freeText=true`, (error, response, html) => {
    if(!error && response.statusCode === 200){
      const $ = cheerio.load(html)
      let items = [], prices = [], quantities = [];
      
      $('.pt--name div').each((i, gl) => {
        const name = $(gl).text();
        console.log(name);
        searchResults.name = name;
        items.push(name);
      });

      $('.pi--main-price').each((i, el) => {
        const price = $(el).text();
        var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
        var foundprice = price.match(regexprice)[0].trim().slice(1);
        console.log(foundprice)
        prices.push(foundprice);
      });

      $('.pi--main-price span.pi--price').each((i, fl) => {
        const quantity = $(fl).text();
        var unit_quantity = 0;
        if(quantity.includes ("/")){
          unit_quantity = quantity.substring(0, 1);
        } else {
          unit_quantity = 1;
        }
        console.log(unit_quantity)
        quantities.push(unit_quantity);
      });

console.log(items,prices,quantities)
// write for loop here
      // cart.push({searchResults: searchResults});
      var length = items.length;
      for (var i = 0; i<length; i++){
      searchResults.push({id: "metro",name: items[i], price: prices[i], quantity: quantities[i]})
      }

      res.json(searchResults);
}});
})
return router;
}