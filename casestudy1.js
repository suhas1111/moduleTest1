var express=require('express');
var app=express();


console.log("the program is running");

var customerController=function(req,resp){



var customer=[
{firstName='suhas',lastName='meshram',age=22},
{firstName='ashish',lastName='basha',age=24},
{firstName='ganesh',lastName='jadeja',age=25},
{firstName='jignesh',lastName='dhoni',age=26},
{firstName='suresh',lastName='kohli',age=27},

];
resp.send(customers);
};
app.get('/customers',customerController);

var server=app.listen(8088,function()
{
	var host=app.server.address().address;
	var port=app.server.address().port;
	
});

console.log("the program is runnning in localhost",host,port);

