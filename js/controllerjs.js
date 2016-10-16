define("controllerjs", ['modeljs', 'viewjs', 'jquery'], function (modeljs, viewjs, $) {
	return {
		Controller: function (model, view) {
			var self = this;
			view.elements.addBtn.on('click', addItem);
			view.elements.listContainer.on('click', '.item-delete', removeItem);
			view.elements.listContainer.on('click', editable);
			view.elements.editBtn.on('click', edit);

			function addItem() {
				var newItem = view.elements.input.val();
				model.addItem(newItem);
				view.renderList(model.data);
				view.elements.input.val('');
			};

			function removeItem() {
				var item = $(this).attr('data-value');
				model.removeItem(item);
				view.renderList(model.data);
			};

			function editable() {
				view.elements.listContainer.prop('contentEditable', true);
			};

			function edit() {
				var newList = view.elements.listContainer.children();
				for (var i = 0; i < newList.length; i++) {
					var str = newList[i].innerText;
					if (str.lastIndexOf(" x") < 0) {
						str = str + '00';
						newList[i].innerText = str;
					};
				}
				model.editData(newList);
				view.renderList(model.data);
			};
		}
	}
});