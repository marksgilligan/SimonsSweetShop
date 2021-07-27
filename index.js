var http = require('http');
var hostname = '127.0.0.1';
var port = 3000;
//import sweet quantity and bag sizes data
var sweetData = require('./inputValuesConfig.json');
var handleOrder = require('./helperFunctions/handleOrder').handleOrder;
//run the handleOrder function using the imported data
var result = handleOrder(sweetData.totalSweetQuantity, sweetData.sweetBagSizeArray);
//log the result server side
console.log(result);
//server setup
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    //write result to display
    res.write(JSON.stringify(result));
    res.end();
});
server.listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});
