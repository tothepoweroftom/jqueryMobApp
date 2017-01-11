var sb,
app_name = "button example";


nx.onload = function() {

  nx.colorize("#ffffff");
  nx.colorize("fill", "#000000");
  nx.colorize("border", "#ffffff");

  position1.nodeSize = 8;
  position1.draw();

  position1.on('*', function(data) {
    console.log("data-x: " + data.x + " data-y: " + data.y);
  })
}

$(function() {


    $(".dial").knob({
      'height': 350,
      'width' : 350,
      'change' : function (v) { console.log(v) }


    });

});

function switchFlipped(){
  console.log($('#flip').val());

}

function refreshPressed(){

  console.log("Refreshed");
}

function slider1Changed(){
  console.log($('.tweetSlider').val());

}

function slider2Changed(){
  console.log($('#slider-2').val());

}

function slider3Changed(){
  console.log($('#slider-3').val());

}

function slider4Changed(){
  console.log($('#slider-4').val());

}
