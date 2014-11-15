
$(".thumb").click(function(){
	var ID = $(this).data("id");
	console.log(ID);
	var module = $(".module"+ID);
	console.log(module);
	module.lightLayer();
});