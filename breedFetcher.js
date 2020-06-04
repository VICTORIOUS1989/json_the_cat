const request = require('request');
const breedName = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(url + breedName, (error, response, body)=> {
  if (error) {
    return console.log(error);
  }
 const data = JSON.parse(body);
 const obj = data[0];
 if (obj) {
  console.log(obj.description);
} else {
  console.log(`Failed to find breed ${breedName}`);
}
});
