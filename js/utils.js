module.exports = {
	objectArrayHas : function (array, arrayTargetProperty, target) {
		for(var i=0; i<array.length; i++) {
			if (array[i][arrayTargetProperty] === target) {
				return true;
			}
		}
		return false;
	},

	findObjectByKey: function (array, key, value) {
		for (var i = 0; i < array.length; i++) {
			if (array[i][key] === value) {
				return array[i];
			}
		}
		return null;
	}


}