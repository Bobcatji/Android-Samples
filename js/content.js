$(document).ready(function(){
	hideAllContent();
	$("#content-home").show();

	$("#home-btn").click(function(){
		hideAllContent();
		$("#content-home").show();
		setTitle("Android Samples");
	});
	$("#simple-listview-btn").click(function(){
		hideAllContent();
		$("#content-simple-listview").show();
		setTitle("Simple ListView")
	});
	$("#tabs-btn").click(function(){
		hideAllContent();
		$("#content-tabs").show();
		setTitle("Tabs Navigation");
	});
	$("#chat-btn").click(function(){
		hideAllContent();
		$("#content-chat").show();
		setTitle("Conversation UI");
	});
	$("#floating-btn").click(function(){
		hideAllContent();
		$("#content-floating").show();
		setTitle("Floating action button");
	})
});
function hideAllContent(){
	$("#content-home").hide();
	$("#content-tabs").hide();
	$("#content-chat").hide();
	$("#content-simple-listview").hide();
	$("#content-floating").hide();
}
function setTitle(s){
	//$("#title").val(s);
	document.getElementById("title").innerHTML = s;
}