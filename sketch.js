
//Connectivity
var sb,
app_name = "Data_Vis_Controller";



//Sliders!
var slider;
var slider2;

//DIV Elements
var sliderDiv;
var sliderDiv2;
var linearSliderDiv;

var sliderRad;
var sliderRad2;
// var sliderRad2  = 300;
// var sliderRad3 = 370;

var margin = 30;
var orbitWidth = 12;

//Central button
var refreshButton;

//Text input
var inp;

//Linear slider
var linSlider;
var linearSlider;

//Canvas
var cnvs;





function setup() {
  //  cnvs = createCanvas(displayWidth, displayHeight);
  // background(0);
  // cnvs.parent("myContainer");

  sliderRad = displayWidth/8-80;
  sliderRad2 = displayWidth/8-10;

  nx.onload = function() {

    nx.colorize("#ffffff");
    nx.colorize("fill", "#000000");
     position1.nodeSize = 10;
    position1.draw();
    position1.on('*', function(data) {

      if(data!=null){
        sendXYData(data);
      }
        // sendXYData(data);
        // console.log(data);
    });

  }

  slider =  $(".dial").knob({
      // 'width': windowWidth/4,
      'cursor': true,
      'thickness': 0.15,
      'fgColor': "#ffffff",
      'bgColor': "#444444",
      'min' : 0,
      'max' : 360,
      'angleOffset' : -90,
      'step' : 1,
      'displayInput': false,

      //HOOKS

      'release' : circleSliderStop,
      'change' : onValueChange,


    });


  //CREATE Sliders
  // //SLIDER DIV 1
  sliderDiv = createDiv("");
  sliderDiv.id("dial");
  sliderDiv.class(".dial");
  sliderDiv.position(windowWidth / 2, windowHeight / 2 );


  // create clear button
  refreshButton = createButton('Clear');
  refreshButton.position(windowWidth-windowWidth/3,-20);
  refreshButton.parent('#bottomContainer');
  refreshButton.touchEnded(resetGraph);
  refreshButton.class('btn');

  //Text Input
  inp = createInput();
  inp.position(windowWidth/2 -150, 10);
  inp.class('black');
  inp.id('myFilter');
  inp.value('Technology');
  inp.style('width', '300px');
  inp.style('z-index', '8');
  inp.style('text-align', 'center');
  inp.changed(addFilter);


  var elem = document.querySelector('.js-switch');
  var init = new Switchery(elem,{ color: '#333', jackColor: '#fff' });

  // $.getJSON('//freegeoip.net/json/?callback=?', function(data) {
  //   console.log(JSON.stringify(data, null, 2));
  // });



  //Setup our Connectivity
   sb = new Spacebrew.Client("192.168.5.176", app_name, "Remote controls for data visualization", {reconnect: true} );

    // add publishers and subscribers
    sb.addPublish("circularSlider", "range", "0" );
    sb.addPublish("XData", "range", "0" );
    sb.addPublish("YData", "range", "0" );
    sb.addPublish("refreshButton", "boolean", "false" );
    sb.addPublish("circularSliderActive", "boolean", "false" );
    sb.addPublish("XYActive", "boolean", "false" );
    sb.addPublish("filter", "string");
    sb.addPublish("toggle", "boolean", "false");



    // connect
    sb.connect();


}

function draw() {
  // Nothing
//  background(0);
  //sb.send("buttonPress", "boolean", "true");


}

function mouseDragged() {
  // Draw some white circles
  // fill(255);
  // noStroke();
  // ellipse(mouseX,mouseY,20,20);
  // Send the mouse coordinates
// sb
}

function mousePressed() {


}



//Slider Callbacks


function onValueChange(v){

//console.log(int(v));
//  var array = e.value.split(',');
  // var preValue = v.preValue;
  // var value = e.value;
  //
   sb.send( "circularSlider", "range", String(int(v)));
  // sb.send("slider1Active", "boolean", "true");





}

function circleSliderStop(v){
  //console.log(v);

  // sb.send("slider1Active", "boolean", "false");

}

function sendXYData(data){


//  var array = e.value.split(',');
// var preValue = e.preValue;
// var value = e.value;
// console.log(data);
// sb.send( "slider2", "range", String(value));
//  sb.send("slider2Active", "boolean", "true");
// console.log(data.x);

sb.send("XData", "range", String(int(data.x*1000)));
sb.send("YData", "range", String(int(data.y*1000)));



//  console.log("max = " + max + " min = " + min);


}

// function slider2Stop(e){
//   sb.send("slider2Active", "boolean", "false");
//
//
// }

function resetGraph(){
console.log("Touched");
sb.send("refreshButton", "boolean", "true");

}

function addFilter(){
console.log(this.elt.value);
var str = this.elt.value;
sb.send("filter", "string", str);

}

function updateZoom(e){


}
