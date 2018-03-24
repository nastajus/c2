module.exports = {

	//function greeting(name) {
	greeting : function(name) {
		alert('Hello ' + name);
	}
,
	//function processUserInput(callback) {
	processUserInput : function (callback) {
		var name = prompt('Please enter your name.');
		callback(name);
	}
,


// function greeting(name) {
	// 	alert('Hello ' + name);
	// }
	//
	// function processUserInput(callback) {
	// 	var name = prompt('Please enter your name.');
	// 	callback(name);
	// }
	//
	// processUserInput(greeting);

}
