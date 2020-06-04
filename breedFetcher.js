const request = require('request');

const fetchBreedDescription = function(breedName , callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

  request(url + breedName , (error, response, body)=> {
    if (error) {
      callback(error, null);
    }
   const data = JSON.parse(body);
   const obj = data[0];
   if (obj) {
    //console.log(obj.description);
    callback(null, obj.description);
  } else {
    callback(`Failed to find breed ${breedName}`, null);
  }
  });
};

module.exports = {fetchBreedDescription};
