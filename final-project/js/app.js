let startMoney = 150;
let color = null;
let bet = NaN;
let winners = [];
let counter = 0;

let roulette = new Winwheel({
  numSegments: 17,
  segments: [
    { fillStyle: "green", text: "0" },
    { fillStyle: "black", text: "1" },
    { fillStyle: "red", text: "2" },
    { fillStyle: "black", text: "3" },
    { fillStyle: "red", text: "4" },
    { fillStyle: "black", text: "5" },
    { fillStyle: "red", text: "6" },
    { fillStyle: "black", text: "7" },
    { fillStyle: "red", text: "8" },
    { fillStyle: "black", text: "9" },
    { fillStyle: "red", text: "10" },
    { fillStyle: "black", text: "11" },
    { fillStyle: "red", text: "12" },
    { fillStyle: "black", text: "13" },
    { fillStyle: "red", text: "14" },
    { fillStyle: "black", text: "15" },
    { fillStyle: "red", text: "16" }
  ],
  innerRadius: 40,
  textAlignment: "center",
  textOrientation: "curved",
  textFillStyle: "white",
  fillStyle: "#e7706f",
  responsive: true,
  lineWidth: 1,
  textFontFamily: "Verdana",
  textFontSize: 10,
  pointerGuide: {
    display: true,
    strokeStyle: "yellow",
    lineWidth: 1
  },

  animation: {
    type: "spinToStop",
    duration: 5,
    spins: 10,
    callbackFinished: "givePrize()"
  }
});

$("#x2").click(function() {
  let value = $(".bet-amount").val();
  if (isNaN(value) == false) {
    value = value * 2;
    $(".bet-amount").val(value);
  }
});
$("#half").click(function() {
  let value = $(".bet-amount").val();
  if (isNaN(value) == false) {
    value = value / 2;
    $(".bet-amount").val(value);
  }
});
$("#clear").click(function() {
  $(".bet-amount").val("");
});

$("#black").click(startGameBlack);
$("#green").click(startGameGreen);
$("#red").click(startGameRed);

function startGameBlack() {
  resetWheel();
  $("#black").attr("disabled", "disabled");
  $("#red").attr("disabled", "disabled");
  $("#green").attr("disabled", "disabled");
  bet = $(".bet-amount").val();
  bet = parseInt(bet);

  if (startMoney > 0 && startMoney >= bet) {
    color = "black";
    startMoney = startMoney - bet;
    startMoney = parseInt(startMoney);
    $("#bank-account").html(`<span>${startMoney}</span>`);
    roulette.startAnimation();
  } else if (isNaN(bet)) {
    alert("invalid input");
  } else {
    alert("Not enough money!");
  }
}

function startGameGreen() {
  resetWheel();
  $("#black").attr("disabled", "disabled");
  $("#red").attr("disabled", "disabled");
  $("#green").attr("disabled", "disabled");
  bet = $(".bet-amount").val();
  bet = parseInt(bet);

  if (startMoney > 0 && startMoney >= bet) {
    color = "green";
    startMoney = startMoney - bet;
    startMoney = parseInt(startMoney);
    $("#bank-account").html(`<span>${startMoney}</span>`);
    roulette.startAnimation();
  } else if (isNaN(bet)) {
    alert("invalid input");
  } else {
    alert("Not enough money!");
  }
}
function startGameRed() {
  resetWheel();
  $("#black").attr("disabled", "disabled");
  $("#red").attr("disabled", "disabled");
  $("#green").attr("disabled", "disabled");
  bet = $(".bet-amount").val();
  bet = parseInt(bet);

  if (startMoney > 0 && startMoney >= bet) {
    color = "red";
    startMoney = startMoney - bet;
    startMoney = parseInt(startMoney);
    $("#bank-account").html(`<span>${startMoney}</span>`);
    roulette.startAnimation();
  } else if (isNaN(bet)) {
    alert("invalid input");
  } else {
    alert("Not enough money!");
  }
}

function givePrize() {
  let winningSegment = roulette.getIndicatedSegment();
  if (winningSegment.fillStyle == color && color == "green") {
    startMoney = startMoney + bet * 14;
    startMoney = parseInt(startMoney).toFixed(2);
    $("#bank-account").html(startMoney);
    $("#black").removeAttr("disabled");
    $("#red").removeAttr("disabled");
    $("#green").removeAttr("disabled");
    makeWinnerList(winningSegment);
    $(".winlose").html(`WON!`);
    $(".winlose").addClass("win");
    $(".winlose").removeClass("lose");
    $(".winners-announcment").css("display", "block");
  } else if (winningSegment.fillStyle == color) {
    if (color == "red" || color == "black") {
      startMoney = startMoney + bet * 2;
      startMoney = parseInt(startMoney).toFixed(2);
      $("#bank-account").html(startMoney);
      $("#black").removeAttr("disabled");
      $("#red").removeAttr("disabled");
      $("#green").removeAttr("disabled");

      makeWinnerList(winningSegment);
      $(".winlose").html(`WON!`);
      $(".winlose").removeClass("lose");
      $(".winlose").addClass("win");
      $(".winners-announcment").css("display", "block");
    }
  } else if (winningSegment.fillStyle != color) {
    $("#black").removeAttr("disabled");
    $("#red").removeAttr("disabled");
    $("#green").removeAttr("disabled");
    makeWinnerList(winningSegment);
    $(".winlose").html(`LOST :(`);
    $(".winlose").removeClass("win");
    $(".winlose").addClass("lose");
    $(".winners-announcment").css("display", "block");
  }
}

function resetWheel() {
  roulette.rotationAngle = 0;
  roulette.draw();
}

function makeWinnerList(winningSegment) {
  if (counter < 5) {
    winners.push(winningSegment);
    if (winners.length == 1) {
      $("#first").css("background", winners[0].fillStyle);
      $("#first-html").html(`${winners[0].text}`);
      counter++;
    } else if (winners.length == 2) {
      $("#second").css("background", winners[1].fillStyle);
      $("#second-html").html(`${winners[1].text}`);
      counter++;
    } else if (winners.length == 3) {
      $("#third").css("background", winners[2].fillStyle);
      $("#third-html").html(`${winners[2].text}`);
      counter++;
    } else if (winners.length == 4) {
      $("#fourth").css("background", winners[3].fillStyle);
      $("#fourth-html").html(`${winners[3].text}`);
      counter++;
    } else if (winners.length == 5) {
      $("#fith").css("background", winners[4].fillStyle);
      $("#fith-html").html(`${winners[4].text}`);
      counter = 6;
    }
  } else if (counter == 6) {
    winners.shift();
    winners.push(winningSegment);
    $("#first").css("background", winners[0].fillStyle);
    $("#second").css("background", winners[1].fillStyle);
    $("#third").css("background", winners[2].fillStyle);
    $("#fourth").css("background", winners[3].fillStyle);
    $("#fith").css("background", winners[4].fillStyle);

    $("#first-html").html(`${winners[0].text}`);
    $("#second-html").html(`${winners[1].text}`);
    $("#third-html").html(`${winners[2].text}`);
    $("#fourth-html").html(`${winners[3].text}`);
    $("#fith-html").html(`${winners[4].text}`);
  }
}
