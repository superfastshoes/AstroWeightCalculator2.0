$(document).ready(function(){
	
	$("#buttonPress").click(function(){
	
	var userWeight = parseFloat($("#weightEntered").val());
	var planetSelected = $("#planetOption option:selected").text();
	var planetValue = $("#planetOption option:selected").val();
	var weightLBS = (userWeight * planetValue).toFixed("1");
	var weightOunces = (weightLBS * 16)
	$("#outputMessage").text("On " + planetSelected + " , you should weigh " 
		+ weightLBS + "lbs" + " or " + weightOunces + " ounces");
	});

});