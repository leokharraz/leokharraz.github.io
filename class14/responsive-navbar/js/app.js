$(document).ready(function () {
	// console.log($(window).width());
	
	$(window).resize(function(){
		if($(window).width() > 874){
			$('#small-nav').hide();
		}
	})
	
	
	$('#burger').click(function(){
		$('#small-nav').slideToggle();
	
	
	})
})

