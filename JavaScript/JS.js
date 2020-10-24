$(document).ready(function(){
   $( function() {
    $( ".slider" ).slider();
  } );
  $(".drum-pad").click(function() {
    let textStr = this.children[0].getAttribute('data-text')
    let display = document.getElementById("display");
    display.innerText = textStr;
    this.children[0].play();
  }); 
  $(document).keypress(function(e){    
    let idkey = "#sound_" + e.key.toLowerCase();
    console.log(idkey);
    $(idkey).click();
  });
})


