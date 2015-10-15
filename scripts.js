$(document).ready(function(){

	//Creates a sliding effect to emphasize div 'facts'
	$("#facts").slideUp(600);
	$("#facts").slideDown(600);

	//Reduces opacity when mouse enters divs 'mission' 'vision' and 'work' - then returns opacity to normal upon exit
  	$("#mission").mouseenter(function() {
        $("#mission").fadeTo("fast", 0.75);
    })
    $("#mission").mouseleave(function() {
	  	$("#mission").fadeTo("fast", 1);
	  })
	$("#vision").mouseenter(function() {
    	$("#vision").fadeTo("fast", 0.75);
    })
    $("#vision").mouseleave(function() {
	  	$("#vision").fadeTo("fast", 1);
	  })

    $("#work").mouseenter(function() {
        $("#work").fadeTo("fast", 0.75);
    })
    $("#work").mouseleave(function() {
	  	$("#work").fadeTo("fast", 1);
	  })
	function myFunction() {
    var mail = prompt("Please enter your email address.");
    
    if (mail != null) {
        document.getElementById("email").innerHTML =
        "Thank you for joining the mailing list.";
    	}
	}
	})