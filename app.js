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
