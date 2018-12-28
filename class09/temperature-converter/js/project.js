

$('#calculate').click(calculate); 




function calculate(){
  let degree = $('#degree').val();
  let type = $('#selector').val();
  if(type === 'Fa'){
      degree = (degree - 32)*(5/9);
      degree = degree.toFixed(1);
      $('#solution').html(degree);
      if(degree <= 0){
          $("body").css('background', '../img/snow.jpg');
      }
  } else if(type === 'C'){
      degree = degree*(9/5) +32;
      degree = degree.toFixed(1);
      $('#solution').html(degree);
  }
}



  
