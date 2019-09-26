// should take a URL as a command-line argument as well as a local file path
// and download the resource to the specified path.
// it should print out a message like "Downloaded and saved 1235 bytes to ./index.html."

// Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

const request = require('request');
const fs = require('fs');
let input = process.argv.slice(2);
let website = input[0];
let fileLocation = input[1];


// OBTAIN info
request(website, (error, response, body) => {
  if (error) {
    console.log("There was an Error!");
    throw error;
  }
  fs.writeFile(fileLocation, body, function(err) {
    if (err) {
      console.log(`There was an error!`);
      throw error;
    }
    return console.log(`Downloaded and saved ${response.headers['content-length']} bytes to ${fileLocation}`);
  });
});
