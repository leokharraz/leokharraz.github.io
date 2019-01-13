$('#myForm').submit(function(event){
    event.preventDefault();
    letname = $('#name-input').val();
    $('#target').append(letname);    
})