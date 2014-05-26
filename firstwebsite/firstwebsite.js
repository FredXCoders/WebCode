function changeText(){
	var newText =  document.getElementById("firstInput").value;
	document.getElementById("paragraph").innerHTML = newText;	
}

jQuery("document").ready(function(){
  jQuery.get("./info.json", function(response){
    if(response.name){
      jQuery("#name").html(response.name);
    }
  }, "json");
});