var ipAddress = "127.0.0.1";
var portNumber = "52000";
var httpModule = require("http");

httpModule.createServer(
 function serviceRequest (request, response) {
  var queryString = new String(request.url);
  var keyValuePairs = queryString.split("&");
  var action = keyValuePairs[0].replace("/","").split("=")[1];
  var firstNumber = new String(keyValuePairs[1].split("&")).split("=")[1] || "0";
  var secondNumber = new String(keyValuePairs[2].split("&")).split("=")[1] || "0";
  var result = getResult(action.toLowerCase(), Number(firstNumber) , Number(secondNumber));
  var htmlContent = "<html><b>" + action + "(" + firstNumber + "," + secondNumber + ") = <b>" + result + "</b></html>";
  response.end(htmlContent);
 }
).listen(portNumber, ipAddress);

function getResult(operation, number1, number2)
{
 var result = 0;
 switch (operation) {
  case 'add':
    result = number1 + number2;
    break;
  case 'subtract':
	result = number1 - number2;
	break;
  case 'multiply':
	result = number1 * number2;
	break;
  case 'divide':
	result = number1 / number2;
    break;
}
 return result;
}