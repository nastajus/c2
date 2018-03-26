module.exports = {
	containsObject : function (obj, list) {
		var x;
		for (x in list) {
			if (list.hasOwnProperty(x) && list[x] === obj) {
				return true;
			}
		}

		return false;
	},
	objectsAreSame : function (x, y) {
		var objectsAreSame = true;
		for(var propertyName in x) {
			if(x[propertyName] !== y[propertyName]) {
				objectsAreSame = false;
				break;
			}
		}
		return objectsAreSame;
	},
	compareObjects : function (a, b) {
		return JSON.stringify(a) === JSON.stringify(b);
	},
	objectArrayHas : function (array, arrayTargetProperty, target) {
		for(var i=0; i<array.length; i++) {
		//for (var item in array) {
			console.log(array[i][arrayTargetProperty]);
			//if (JSON.stringify(array[i][targetProperty]) === JSON.stringify(target)){
			if (array[i][arrayTargetProperty] === target) {
				return true;
			}
		}
		return false;
	}

}