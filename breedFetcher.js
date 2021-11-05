const request = require("request");
const args = process.argv.slice(2);
request(`https://api.thecatapi.com/v1/breeds/search?q=${args}` , (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Sorry, no breed found");
    }
    console.log(data[0].description);
  }
});
