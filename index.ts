const http = require('http')
const hostname = '127.0.0.1';
const port = 3000;
//import sweet quantity and bag sizes data
const sweetData = require('./inputValuesConfig.json')
const { handleOrder } = require('./helperFunctions/handleOrder');

//run the handleOrder function using the imported data
const result = handleOrder(sweetData.totalSweetQuantity, sweetData.sweetBagSizeArray)

//log the result server side
console.log(result);

//server setup
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  //write result to url
  res.write(JSON.stringify(result))
  res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });