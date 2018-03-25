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
	getEmployees: { method: methods.GET, path: "/employees", desc: "get a list of all employees (sorted in order added by default)" },
	postEmployee: { method: methods.POST, path: "/employees", desc: "post a single employee [add new employee]" },
	putEmployee: { method: methods.PUT, path: "/employees", desc: "put a single employee (idempotent) [update existing employee]" },
	getEmployeeById: { method: methods.GET, path: "/employees/:id", desc: "get a single employee by an id number" },
	deleteEmployeeById: {method: methods.DELETE, path: "/employees/:id", desc: "" },

	getExpenseOfEmployeeId: { method: methods.GET, path: "/employees/:id/expenses", desc: "get a list of all expenses for single employee id number" },
	postExpenseToEmployeeId: { method: methods.POST, path: "/employees/:id/expenses", desc: "post an expense to single employee id number" },
	putExpenseOfEmployeeId: { method: methods.PUT, path: "/employees/:id/expenses", desc: "put a single expense to an existing employee (idempotent) [update existing expense]" },
	getExpenseByEmployeeId: { method: methods.GET, path: "/employees/:id/expenses/:id", desc: "get a single expense with a single employee id" },
	deleteExpenseByEmployeeId: { method: methods.DELETE, path: "/employees/:id/expenses/:id", desc: "" },

	getExpenseById: { method: methods.GET, path: "/expenses/:id", desc: "" },
	deleteExpenseById: { method: methods.DELETE, path: "/expenses/:id", desc: "" },
	//post?
	//put?

}