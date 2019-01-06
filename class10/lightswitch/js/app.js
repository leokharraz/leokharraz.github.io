$(document).ready(function() {
  let lights = "on";
  $("#lightswitch").click(function() {
    if (lights === "on") {
      $('#lightswitch').removeClass('switch-on');
      $("#lightswitch").addClass('switch-off');

      
    $("body").addClass('lights-off');
    $("body").removeClass('lights-on');

      lights = "off";
    } else {
      $("#lightswitch").removeClass('switch-off')
      $("#lightswitch").addClass('switch-on');
      $("body").addClass('lights-on');
      $("body").removeClass("lights-off");
      lights = "on";
	}
	$(this).html(lights);
  });
});

// When the lights are on:

// give the #lightswitch element a background-color of black and a text color of white
// give the body a background color of white

// When the lights are off:

// give the #lightswitch element a background-color of white and a text color of black
// give the body a background color of black;
