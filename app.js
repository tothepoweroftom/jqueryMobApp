
//****************** SPACEBREW ********************
var sb,
app_name = "Trend Radar Remote";


// Set up SB Variable
sb = new Spacebrew.Client("trendradar.mobgendev.com", app_name, "Remote controls for data visualization", {reconnect: true} );

// add publishers and subscribers
sb.addPublish("circularSlider", "range", "0" );
sb.addPublish("XData", "range", "0" );
sb.addPublish("YData", "range", "0" );
sb.addPublish("refreshButton", "boolean", "false" );
sb.addPublish("keyword", "string");
sb.addPublish("toggle", "boolean", "false");
sb.addPublish("slider-1", "range", "0" );
sb.addPublish("slider-2", "range", "0" );
sb.addPublish("slider-3", "range", "0" );
sb.addPublish("slider-4", "range", "0" );

sb.connect();

// ************************** circularSlider **********************
function setup(){

  console.log(windowWidth);
  $(".dial").knob({
    'height': int(windowWidth-40),
    'width' : int(windowWidth-40),
    'min' : 0,
    'max' : 360,
    'angleOffset' : -90,
    // 'step' : 1,
    'change' : function (v) {

      // console.log(int(v))
      sb.send( "circularSlider", "range", String(int(v)));


    }


  });

  var controls = select('#controls');
  controls.position((windowWidth)/2 - (windowWidth-40)/2, 100 );


}
//******************** NEXUS UI ********************
nx.onload = function() {

  nx.colorize("#ffffff");
  nx.colorize("fill", "#000000");
  nx.colorize("border", "#ffffff");

  position1.nodeSize = 8;
  position1.draw();

  position1.on('*', function(data) {
    console.log("data-x: " + int(data.x*100) + " data-y: " + int(data.y*100));
    sb.send("XData", "range", String(int(data.x*100)));
    sb.send("YData", "range", String(int(data.y*100)));

  })
}




// ******************** PRESENCE SWITCH ********************
function switchFlipped(){
  console.log($('#flip').val());
  var value = $('#flip').val();
  if (value == "on"){
    sb.send("toggle", "boolean", "true");
  } else {

    sb.send("toggle", "boolean", "false");

  }

}

// **************** TEXT INPUT *****************
function textInput() {

console.log($('#text-1').val());
sb.send("keyword", "string", String($('#text-1').val()));
}

// ******************** REFRESH SWITCH ********************
function refreshPressed(){

  console.log("Refreshed");
  sb.send("refreshButton", "boolean", "true");

}

// ******************** Slider 1 ********************
function slider1Changed(){
  console.log($('.tweetSlider').val());
  sb.send("slider-1", "range", String($('.tweetSlider').val()));

}

// ******************** Slider 2 ********************

function slider2Changed(){
  console.log($('#slider-2').val());
  sb.send("slider-2", "range", String($('#slider-2').val()));

}

// ******************** Slider 3 ********************

function slider3Changed(){
  console.log($('#slider-3').val());
  sb.send("slider-3", "range", String($('#slider-3').val()));


}

// ******************** Slider 4 - ZOOM ********************

function slider4Changed(){
  console.log($('#slider-4').val());
  sb.send("slider-4", "range", String($('#slider-4').val()));


}
