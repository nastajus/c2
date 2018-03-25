module.exports = {
	methods: Object.freeze({
		"GET": {name: "GET"},
		"POST": {name: "POST"},
		"PUT": {name: "PUT"},
		"DELETE": {name: "DELETE"}
	}),
	/*
	fragments: Object.freeze({
		"employees": {name: "employees"},
		"expenses": {name: "expenses"}
	}),
	*/
	getEmployees: { method: "GET", path: "/employees", desc: "get a list of all employees (sorted in order added by default)" },
	postEmployee: { method: "POST", path: "/employees", desc: "post a single employee [add new employee]" },
	putEmployee: { method: "PUT", path: "/employees", desc: "put a single employee (idempotent) [update existing employee]" },
	getEmployeeById: { method: "GET", path: "/employees/:id", desc: "get a single employee by an id number" },
	deleteEmployeeById: {method: "DELETE", path: "/employees/:id", desc: "" },

	getExpenseOfEmployeeId: { method: "GET", path: "/employees/:id/expenses", desc: "get a list of all expenses for single employee id number" },
	postExpenseToEmployeeId: { method: "POST", path: "/employees/:id/expenses", desc: "post an expense to single employee id number" },
	putExpenseOfEmployeeId: { method: "PUT", path: "/employees/:id/expenses", desc: "put a single expense to an existing employee (idempotent) [update existing expense]" },
	getExpenseByEmployeeId: { method: "GET", path: "/employees/:id/expenses/:id", desc: "get a single expense with a single employee id" },
	deleteExpenseByEmployeeId: { method: "DELETE", path: "/employees/:id/expenses/:id", desc: "" },

	getExpenseById: { method: "GET", path: "/expenses/:id", desc: "" },
	deleteExpenseById: { method: "DELETE", path: "/expenses/:id", desc: "" },
	//post?
	//put?

	Employee : function () {
		this.id;
		this.name;
		this.address;
	},

	Employee2 : function (name, address) {
		this.id;
		this.name = name;
		this.address = address;
	}

}