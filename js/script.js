/**
 * Created by atthorn on 7/18/2014.
 */
$(document).ready(function() {
  draw();
  onresize = draw;
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
