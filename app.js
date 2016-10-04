$(document).ready(function(){
        $.ajax({
          method:"GET",
          url: "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC",
        }).then(function(response){
          var result= response.data;
          for (var i=0; i<result.length; i++) {

              $(".gifList").append('<img src= "'  + result[i].images.downsized.url +  '" /> ');
              console.log(response.data[i].images.downsized.url);

              //

              $(.gifList).removeClass;
              $(.gifList).reappendClass;

          };
          $(.submit_button).click(function(){
            //API request
            submit.handleClick(
              function(){
                return submit;
                $(url).input('<img src= """http://api.giphy.com/v1/gifs/search?q=" + submit_button.submit + "&api_key=dc6zaTOxFJmzC"" /> ');
              }

            );
          })
});


// console.log(response.gifList.img);
//
// // event listener for submit button
//
//
// //input value of the submit
//
// //______
// console.log("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC");

  });
