define("modeljs", ['jquery'], function ($) {
	return {
		Model: function (data) {
			var self = this;
			self.data = data;
			self.addItem = function (item) {
				if (item.length === 0) {
					return;
				}
				self.data.push(item);
				return self.data;
			};
			self.removeItem = function (item) {
				var index = self.data.indexOf(item);
				if (index === -1) {
					return;
				}
				self.data.splice(index, 1);
				return self.data;
			};
			self.editData = function (newList) {
				var newData = [];
				newList.text(function (index, value) {
					newData.push(value.slice(0, value.length - 2))
				});
				self.data = newData;
			};
		}
	}
});