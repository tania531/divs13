$(document).ready(function(){

   var divs =  $("div");
   var randColor = 'rgb(0,0,0)';
   console.log("divs: ", divs);
    divs.each(function(d){
      $("containers").append(divs[d]);
      $(divs[d]).css('background-color', randomColor());

    });

    function randomColor(){
       randColor = 'rgb('
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ','
                + (Math.floor(Math.random() * 256)) + ')';
      return randColor;
    }

    var invertedColor = 'rgb(0,0,0)';

    $("div").click(function(){
      $(this).css('background-color', invertColor());
    });

    function invertColor(){
      invertedColor = 'rgb('
        + (255 - (Math.floor(Math.random() * 256))) + ','
        + (255 - (Math.floor(Math.random() * 256))) + ','
        + (255 - (Math.floor(Math.random() * 256))) + ')';

      return invertedColor;
    }

});
