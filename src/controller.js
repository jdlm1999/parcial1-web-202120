const { response, request } = require('express');
const axios = require('axios');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  try {
    const { input } = req.query;
    const { data } = await axios('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players');
    const results = data.values.map((elm) => ({ first_name: elm.first_name, last_name: elm.last_name, h_in: elm.h_in }));
    let arrayPlayers = results.map((elm) => {
      for (let index = 0; index < results.length; index++) {
        const element = results[index];
        if((parseInt(elm.h_in) + parseInt(element.h_in)) === input){
          console.log('Entra')
          return elm;
        }else{
          console.log('No Entra');
        }
      }
    });
    console.log(arrayPlayers);
    playersJsonString = JSON.stringify(arrayPlayers);
    resp.json(results);
  } catch (error) {

  }
};

module.exports = { getPairsOfPlayers };
