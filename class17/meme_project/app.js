// Create a submit handler for the meme form
// Do all of the following inside of this submit handler function...


$('.meme-form').submit(function(){
  event.preventDefault();
  let search = $('.meme-input').val();
  console.log(search);
  key = 'OUmXlzgqxxUbVQy3BDKNp5mNmWrr6Bzl';
  let xhr = $.get(
    `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=5`
  );
  
  xhr.done(function(data){
    console.log(data.data);
    data.data.forEach(function(element, index){
      $('.meme-list').append(`<li><video src=${element.images.looping.mp4} type='video/mp4' autoplay></video> </li>`);
      console.log(element);
      
})
  })
})
  /* Stop the page from refreshing when the form is submitted  (event.preventDefault())

  // Get the value of meme-input and save as a variable


  // Use the JavaScript example at https://developers.giphy.com/docs/ to get the
  // results from the http://api.giphy.com/v1/gifs/search endpoint (exactly as in example) but changing in your API key (you will need to register for API key)

  // Use your knowledge of objects and arrays to get the list of give memes

  // Swap out Ryan Goesling for your input term using string concatenation

  // Use a forEach loop to append a list element containing a video to meme-list for each meme video
  // hint: <li><video src='+ looping gif image path here + ' type="video/mp4" autoplay></video></li> */