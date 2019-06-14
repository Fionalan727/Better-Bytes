"use strict";

const express = require('express');
const router  = express.Router();


const request = require('request');
const cheerio = require('cheerio');

module.exports = (knex) => {

router.get("/:query", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
 console.log("Your query params are : ", req.params.query)
let query = req.params.query;
var query2 = req.params.query;

// if (query == "onion"){
//   query = "yellow onion"
// } else { (query == "tomato") 
//   query = "roma tomato"
//   query2 = "italian tomato"
// }

let searchResults = [], cart = [];

request(`https://www.metro.ca/en/search?filter=${query2}&freeText=true`, (error, response, html) => {
  console.log ("Metro Prices");
    if(!error && response.statusCode === 200){
      const $ = cheerio.load(html)
      let items = [], prices = [], quantities = [];
      let testArray = [];
      
      $('.pt--name div').each((i, gl) => {
        const name = $(gl).text();
        console.log(name);
        // searchResults.name = name;
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

      var length = items.length;
      for (var i = 0; i<length; i++){
        testArray.push({id: "Metro   :",name: items[i], price: prices[i], quantity: quantities[i]})
      }
      const list = (testArray.sort((a, b) => (a.price > b.price) ? 1 : -1));
      searchResults.push(list[0])
      getLoblawsData();
      // res.json(searchResults);
    }});


const getWalmartData = () => request(`https://www.realcanadiansuperstore.ca/search/1559539688626/page/~item/${query}/~sort/recommended/~selected/true`, (error, response, html) => {
      console.log ("Walmart Prices");
      if(!error && response.statusCode === 200){
        const $ = cheerio.load(html)
        let items = [], prices = [], quantities = [];
        let testArray = [];
        
        $('.js-product-entry-name').each((i, gl) => {
          const name = $(gl).text();
          console.log(name);
          // searchResults.name = name;
          items.push(name);
        });
  
        $('.reg-price-text').each((i, el) => {
          const price = $(el).text();
          var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
          var foundprice = price.match(regexprice)[0].trim().slice(1);
          console.log(foundprice)
          prices.push(foundprice);
        });
  
        $('.reg-price-text').each((i, fl) => {
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
  
        var length = items.length;
        for (var i = 0; i<length; i++){
          testArray.push({id: "Walmart :",name: items[i], price: prices[i], quantity: quantities[i]})
        }
        const list3 = (testArray.sort((a, b) => (a.price > b.price) ? 1 : -1));
        searchResults.push(list3[0])
        // res.json(searchResults);

        getLoblawsData();
      }});


const getLoblawsData = () => request(`https://www.nofrills.ca/search/1559526258197/page/~item/${query}/~sort/recommended/~selected/true`, (error, response, html) =>{
  console.log ("Loblaws Prices");
  if(!error && response.statusCode === 200){
    const $ = cheerio.load(html);
    let items = [], prices = [], quantities = [];
    let testArray = [];

        $('.js-product-entry-name').each((i, gl) => {
          const name = $(gl).text();
          console.log(name);
          // searchResults.name = name;
          items.push(name);
        });

        $('.reg-price-text').each((i, el) => {
          const price = $(el).text();
          var regexprice = /\$\s?(\d+[\.\s,\dk]+)|(\d+[\.\s,\dk]+)\$/mig;
          var foundprice = price.match(regexprice)[0].trim().slice(1);
          prices.push(foundprice);
        })

            $('.reg-price-text').each((i, fl) => {
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

            var length = 4;
            for (var i = 0; i<length; i++){
            testArray.push({id: "Walmart :",name: items[i], price: prices[i], quantity: quantities[i]})
            }
            const list2 = (testArray.sort((a, b) => (a.price > b.price) ? 1 : -1));
            searchResults.push(list2[0])
            console.log("the results ", searchResults)
            searchResults.sort((a, b) => (a.price > b.price) ? 1 : -1);
            res.json(searchResults);
  };

  console.log("These are your new search results : ",searchResults)
});

})
return router;
}