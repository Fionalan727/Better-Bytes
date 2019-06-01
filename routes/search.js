"use strict";

const express = require('express');
const router  = express.Router();


const request = require('request');
const cheerio = require('cheerio');

var query = "onion";
request(`https://www.metro.ca/en/search?filter=${query}&freeText=true`, (error, response, html) => {
  if(!error && response.statusCode === 200){
    const $ = cheerio.load(html)

    $('.pi--main-price').each((i, el) => {
      const price = $(el).text();
      // var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
      var foundprice = price.match(price)[0].trim().slice(1);
      console.log(foundprice)

      $('.pi--main-price span.pi--price').each((i, fl) => {
        const quantity = $(fl).text();
        var unit_quantity = 0;
        if(quantity.includes ("/")){
          unit_quantity = quantity.substring(0, 1);
        } else {
          unit_quantity = 1;
        }
        console.log(unit_quantity)


          $('.pt--name div').each((i, gl) => {
            const name = $(gl).text();
            console.log(name);


          const searchResults = [{
                                  name: name,
                                  price: foundPrice,
                                  quantity: unit_quantity },
                                ];

        res.send(searchResults);
          });
      });
    });
}});

  module.exports = router;

