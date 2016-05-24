/**
 * Created by uidg8557 on 5/20/16.
 */

var canvas = document.getElementById("PresentationCanvas");
var canvasCtx = canvas.getContext("2d");
var updateScene = function () {
    console.log("Canvas");
};
// =====================================
// animation shit
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

(function loop(){
    clearCanvas();
    updateScene();
    requestAnimFrame(loop);
})();

// =====================================

// =====================================
function drawRectangle(x,y,a,b,style) {
    canvasCtx.fillStyle = style;
    canvasCtx.fillRect(x,y,a,b);
}

function drawSphere(x,y,r,style) {
    canvasCtx.beginPath();
    canvasCtx.arc(x, y, r, 0, 2 * Math.PI, false);
    canvasCtx.fillStyle = style;
    canvasCtx.fill();
    canvasCtx.stroke();
}

function clearCanvas() {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
}
