// 1. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, let count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .html()
// - .css()
let score = 0;

$("#a10").click(addTen);
$("#a20").click(addTwenty);
$("#a30").click(addThirty);
$("#red").click(backgroundRed);
$("#out").click(reset);
$("#blue").click(backgroundBlue);
$("#n10").click(removeTen);
$("#n20").click(removeTwenty);
$("#n30").click(removeThirty);

function addTen() {
  score = score + 10;
  $("#out").html(score);
}

function addTwenty() {
  score = score + 20;
  $("#out").html(score);
}

function addThirty() {
  score = score + 30;
  $("#out").html(score);
}

function backgroundRed() {
  $("#out").css("background", "red");
}

function backgroundBlue() {
  $("#out").css("background", "blue");
}

function removeTen() {
  score = score - 10;
  $("#out").html(score);
}

function removeTwenty() {
  score = score - 20;
  $("#out").html(score);
}

function removeThirty() {
  score = score - 30;
  $("#out").html(score);
}

function reset() {
  $("#out").css("background", "white");
  score = 0;
  $("#out").html(score);
}
