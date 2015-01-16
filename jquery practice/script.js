var button = document.querySelector("button");
var uno = 0;
button.addEventListener("click", function( ev ){
	uno++;
	if (uno > 4) {
		alert("You clicked this how many times?")
		return true
	}
	else {
		alert("Hi!");
		return false
	}
}, false);