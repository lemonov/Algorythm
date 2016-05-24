/**
 * Created by uidg8557 on 5/20/16.
 */


var array = [];
var scaler = 4;
var samples = canvas.width / scaler;

var sampleCounter = samples;
var iterator = 0 ;
function bubbleSort() {
    if (iterator < sampleCounter) {
        if (array[iterator] > array[iterator+1]) {
            var temp = array[iterator];
            array[iterator] = array[iterator+1];
            array[iterator+1] = temp;
        }
    }
    iterator++;
    if (iterator == sampleCounter) {
        sampleCounter--;
        iterator = 0;
    }
    updateView();
}

function startSort() {
    sampleCounter = samples;
    iterator = 0 ;
    updateScene = bubbleSort;
}

function updateView() {
    for (var i = 0; i < samples; i++) {
        drawRectangle(i * scaler,
            array[i] * scaler,
            scaler,
            canvas.height,
            '#FF0000');
    }
}


function initRandom() {
    array = [];
    for (var i = 0; i < samples; i++) {
        array.push(getRandomInt(0,samples));
    }
}