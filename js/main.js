requirejs.config({
	paths: {
		'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
	}
	, shim: {
		'jquery': {
			exports: 'jQuery'
		, }
	}
});
require(
  ["modeljs", "viewjs", "controllerjs", "jquery", "tmpl"]
	, function (modeljs, viewjs, controllerjs, $) {
		var firstToDoList = ['test1', 'test2', 'test3'];
		var model = new modeljs.Model(firstToDoList);
		var view = new viewjs.View(model);
		var controller = new controllerjs.Controller(model, view);
	});