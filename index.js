var request = require('request');
request('http://dontpad.com/testeTCSindustrial/matheus', function (error, response, body, write) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body);
  console.log('write:', "Matheus"); 
});