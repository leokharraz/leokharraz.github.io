let images = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg', 'images/food5.jpg', 'images/food6.jpg', 'images/food7.jpg'];
let imageIndex = 0;

$('.btn-next').click(nextImage);
$('.btn-prev').click(prevImage);

function nextImage(){
    if(imageIndex < images.length - 1){
    imageIndex++;
    console.log(images[imageIndex]);
    $('#image-to-vote-on').attr('src', images[imageIndex]);
    } else {
        alert('that won´t work buddy');
    }
    
}

function prevImage(){
    if(imageIndex => 0){
    imageIndex = imageIndex - 1;
    $('#image-to-vote-on').attr('src', images[imageIndex]);
    }
    
}