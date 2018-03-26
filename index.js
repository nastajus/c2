var express = require('express')
var app = express()
const bodyParser = require('body-parser');

var EJS  = require('ejs');
var path = require('path');

var fs = require('fs');
var csvjson = require('csvjson');


var scratchapd = require('./js/scratchpad');
var api = require('./js/api');
var utils = require ('./js/utils')


var data = fs.readFileSync('./data/data_example.csv', { encoding : 'utf8'});
var options = {
	delimiter : ',', // optional
	quote     : '"' // optional
};
var expenseItemsFile = csvjson.toObject(data, options);
//console.log(result);
//console.log(result[0]["date"]);

/*
[].forEach((val, index)=>{
...
});
*/

expenseItemsFile.forEach((val, index) => {
	if (!utils.objectArrayHas( api.employees, "name", val["employee name"]  )) {
		api.employees.push(new api.Employee(api.employees.length, val["employee name"], val["employee address"]));
		//console.log(index + " added + " + val["employee name"] );
	}
});

expenseItemsFile.forEach((val) => {

	var employee = utils.findObjectByKey(api.employees, "name", val["employee name"]);

	if (employee) {
		api.expenseItems.push(new api.Expense(api.expenseItems.length, employee, val["date"], val["category"], val["expense description"], val["pre-tax amount"], val["tax name"], val["tax amount"]));
		//console.log();
	}
	else {
		//throw error()
		console.log("employee doesn't exist, cannot add employee");
	}
})
//console.log(api.expenseItems);

//date,category,employee name,employee address,expense description,pre-tax amount,tax name,tax amount

// respond with "hello world" when a GET request is made to the homepage


// getEmployees: { method: "GET", path: "/employees", desc: "get a list of all employees (sorted in order added by default)" },
// postEmployee: { method: "POST", path: "/employees", desc: "post a single employee [add new employee]" },
// putEmployee: { method: "PUT", path: "/employees", desc: "put a single employee (idempotent) [update existing employee]" },
// getEmployeeById: { method: "GET", path: "/employees/:id", desc: "get a single employee by an id number" },
// deleteEmployeeById: {method: "DELETE", path: "/employees/:id", desc: "" },

// configure the app to use bodyParser()
var urlencodedParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedParser);
app.use(bodyParser.json());

app.engine('html', EJS.renderFile);


// Set the default templating engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ejs
app.get('/', function (req, res) {
	res.render('index.ejs', { employees: api.employees, expenses: api.expenseItems });
});



// GET method route
/*
app.get('/', function (req, res) {
	//res.send('GET request to the homepage')
	res.sendFile('index.html', {root: __dirname })

	//2
	//res.set('Content-Type', 'text/html');
	//res.send(new Buffer('<h2>Test String</h2>'));

})
*/

app.post('/employees', function (req, res) {
	let employee = new api.Employee(api.employees.length, req.body.name, req.body.address);
	console.log(employee);
	api.employees.push(employee);
	//res.sendFile('index.html', {root: __dirname })

	//res.status(302).send('302 "Found", HTTP POST completed. ');
	//res.status(302).json({ error: 'message' })

	//'303' : 'Operation has completed, continue elsewhere'
	//A 302 redirect indicates that the redirect is temporary -- clients should check back at the original URL in future requests.
	//A 303 redirect is meant to redirect a POST request to a GET resource (otherwise, the client assumes that the request method for the new location is the same as for the original resource).
	res.redirect(303, '/')


})


app.post('/expenses', function(req, res) {
	let employeeIdNumber = req.body.employeeName; 
	let employee = api.employees[employeeIdNumber];
	let expense = new api.Expense(api.expenseItems.length, employee, req.body.date, req.body.category,
		req.body.expenseDescription, req.body.preTaxAmount, req.body.taxName, req.body.taxAmount );

	api.expenseItems.push(expense);
	res.redirect(303, '/')

})


// POST method route
app.post('/', function (req, res) {
	res.send('POST request to the homepage')
})


app.post('/example/a', function (req, res) {
	res.send('Hello from A!')
})

app.post('/example/b', function (req, res, next) {
	console.log('the response will be sent by the next function ...')
	next()
}, function (req, res) {
	res.send('Hello from B!')
})


app.delete('/', function(req, res) {
	console.log(req.body);
	res.redirect(303, '/')
});


app.listen(3001, function () {
	console.log('listening on port 3001');
})