/**
 * Created by atthorn on 7/18/2014.
 */
$(document).ready(function() {
  //draw();
  //onresize = draw;


  var flightSeqenceCanvas = $("#flightSequenceCanvas")[0];
  var canvasWidth = flightSeqenceCanvas.width = flightSeqenceCanvas.clientWidth;
  var canvasHeight = flightSeqenceCanvas.height = flightSeqenceCanvas.clientHeight;
  var radius = (canvasWidth > canvasHeight) ? canvasHeight / 2 : canvasWidth / 2; // set the radius of the circle to be the lesser of the width or height;

  // create a wrapper around native canvas element (with id="flightSequenceCanvas")
  var canvas = new fabric.Canvas("flightSequenceCanvas");

  var circle = new fabric.Circle({
    radius: radius, fill: 'green', left: canvasWidth / 2, top: canvasHeight / 2, originX: 'center', originY: 'center'
  });

  canvas.add(circle);
});

var draw = function() {
  // draw a circle in the center of the canvas
  var canvas = $("#flightSequenceCanvas")[0];
  var w = canvas.width = canvas.clientWidth;
  var h = canvas.height = canvas.clientHeight;
  var size = (w > h) ? h : w; // set the radius of the circle to be the lesser of the width or height;
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, size/2, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();
}
