
// var numberPoints = [];     //arry of number of points in each polyline
// var numP;                  //number of points in one polyline
// var polyNum = 0;           //number of polylines
// var drawPoints = [];       //points drawn by user
// var pointIndex = 0;        //keep track of index in point array
// var color = [];            //color of each point
// var currentColor = "K";    //setting default color, K to represent black
// var newline = false;       //determines if a new polyline

// var gl;
// var program;

// function drawPolylines(){

//     var canvas = document.getElementById("webglDraw");
//     //grabs x,y values of where mouse clicked and converts values to fit on a scale of -1 to 1
//     // on both the x and y plane with the origin being the center of the canvas
//     var x = (event.pageX - canvas.offsetLeft) / 250.0 - 1;
//     var y = -((event.pageY - canvas.offsetTop) /250.0 - 1);

//     drawPoints.push(vec4(x, y, 0.0, 1.0));  //push x,y value as a point
//     if(newline || polyNum === 0){ //if nothing is drawn or is a new polyline
//         polyNum++;   //increase number of polyline
//         numP = 0;    //reset number of points to zero for polyline
//         newline = false;
//     }
//     numP++;  //increment number of points with each click
//     numberPoints[polyNum-1] = numP;

//     renderDrawing();
// }

// function renderDrawing() {
//     // Retrieve <canvas> element
//     var canvas = document.getElementById('webglDraw');

//     // Get the rendering context for WebGL
//     gl = WebGLUtils.setupWebGL(canvas, undefined);
//     if (!gl) {
//         console.log('Failed to get the rendering context for WebGL');
//         return;
//     }

//     // Initialize shaders
//     program = initShaders(gl, "vshader", "fshader");
//     gl.useProgram(program);

//     //Set up the viewport
//     gl.viewport(0, 0, canvas.width, canvas.height);
//     //set point size to 10
//     var pointSizeLoc = gl.getUniformLocation(program, "vPointSize");
//     gl.uniform1f(pointSizeLoc, 10.0);

//     //clears canvas
//     gl.clearColor(1.0, 1.0, 1.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);

//     //loop through to draw each polyline
//     for (var p = 0; p < numberPoints.length; p++){
//         renderLine(numberPoints[p]);
//     }

//     pointIndex = 0;   //reset back to zero after finishing drawing

//     //handles all key press events
//     window.onkeypress = keyPressEvent;
// }

// function renderLine(numPoints) {

//     var polyPoints = [];  //used to store points of one polyline

//     //retrieves all points of one polyline
//     for(var p = 0; p < numPoints; p++){
//         polyPoints.push(drawPoints[pointIndex + p]);
//     }

//     //create buffer for points
//     var vBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, flatten(polyPoints), gl.STATIC_DRAW);

//     var vPosition = gl.getAttribLocation(program, "vPosition");
//     gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
//     gl.enableVertexAttribArray(vPosition);

//     setColors(currentColor, numPoints);  //set each point to the same color

//     //create buffer for colors
//     var cBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
//     gl.bufferData(gl.ARRAY_BUFFER, flatten(color), gl.STATIC_DRAW);

//     var vColor = gl.getAttribLocation(program, "vColor");
//     gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
//     gl.enableVertexAttribArray(vColor);

//     var projMatrix = ortho(-1, 1, -1, 1, -1, 1);
//     var projMatrixLoc = gl.getUniformLocation(program, "projMatrix");
//     gl.uniformMatrix4fv(projMatrixLoc, false, flatten(projMatrix));

//     gl.drawArrays(gl.LINE_STRIP, 0, polyPoints.length); //draws the polyline

//     pointIndex += numPoints;
// }
// //setting color of each point
// function setColors(currentColor, numPoints){
//     var col = [];
//     for(var i = 0; i < numPoints; i++) {
//         if(currentColor === "R")
//             col.push(vec4(1.0, 0.0, 0.0, 1.0));
//         else if(currentColor === "G")
//             col.push(vec4(0.0, 1.0, 0.0, 1.0));
//         else if(currentColor === "B")
//             col.push(vec4(0.0, 0.0, 1.0, 1.0));
//         else
//             col.push(vec4(0.0, 0.0, 0.0, 1.0));
//     }
//     color = col;
// }

// //resets canvas to be blank
// function resetCanvas(){
//     polyNum = 0;
//     drawPoints = [];
//     numberPoints = [];
//     currentColor = "K";
//     gl.clearColor(1.0, 1.0, 1.0, 1.0);
//     gl.clear(gl.COLOR_BUFFER_BIT);
// }

// //handle key events such as changing color by pressing 'c' or changing
// // mode by pressing 'f' or starting a new line by pressing 'b'
// function keyPressEvent(event){
//     var key = event.key;
//     switch(key){
//         case 'c':   //changes color of drawing and alternates between Black, Red, Green, and Blue
//             if(currentColor === "K" )
//                 currentColor = "R";
//             else if(currentColor === "R")
//                 currentColor = "G";
//             else if(currentColor === "G")
//                 currentColor = "B";
//             else
//                 currentColor = "K";
//             renderDrawing();
//             break;
//         case 'b':  //sets up for a new polyline
//             newline = true;
//             break;
//     }
// }


var numberPoints = [];     //arry of number of points in each polyline
var numP;                  //number of points in one polyline
var polyNum = 0;           //number of polylines
var drawPoints = [];       //points drawn by user
var pointIndex = 0;        //keep track of index in point array
var color = [];            //color of each point
var currentColor = vec4(0.0, 0.0, 0.0, 1.0);    //setting default color, K to represent black
var newline = false;       //determines if a new polyline

var gl;
var program;

function drawPolylines(){

    var canvas = document.getElementById("webglDraw");
    //grabs x,y values of where mouse clicked and converts values to fit on a scale of -1 to 1
    // on both the x and y plane with the origin being the center of the canvas
    var x = (event.pageX - canvas.offsetLeft) / 250.0 - 1;
    var y = -((event.pageY - canvas.offsetTop) /250.0 - 1);

    drawPoints.push(vec4(x, y, 0.0, 1.0));  //push x,y value as a point
    if(newline || polyNum === 0){ //if nothing is drawn or is a new polyline
        polyNum++;   //increase number of polyline
        numP = 0;    //reset number of points to zero for polyline
        newline = false;
    }
    numP++;  //increment number of points with each click
    numberPoints[polyNum-1] = numP;

    renderDrawing();
}

function renderDrawing() {
    // Retrieve <canvas> element
    var canvas = document.getElementById('webglDraw');

    // Get the rendering context for WebGL
    gl = WebGLUtils.setupWebGL(canvas, undefined);
    if (!gl) {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }

    // Initialize shaders
    program = initShaders(gl, "vshader", "fshader");
    gl.useProgram(program);

    //Set up the viewport
    gl.viewport(0, 0, canvas.width, canvas.height);
    //set point size to 10
    var pointSizeLoc = gl.getUniformLocation(program, "vPointSize");
    gl.uniform1f(pointSizeLoc, 10.0);

    //clears canvas
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //loop through to draw each polyline
    for (var p = 0; p < numberPoints.length; p++){
        renderLine(numberPoints[p]);
    }

    pointIndex = 0;   //reset back to zero after finishing drawing

    //handles all key press events
    window.onkeypress = keyPressEvent;
}

function renderLine(numPoints) {

    var polyPoints = [];  //used to store points of one polyline

    //retrieves all points of one polyline
    for(var p = 0; p < numPoints; p++){
        polyPoints.push(drawPoints[pointIndex + p]);
    }

    //create buffer for points
    var vBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(polyPoints), gl.STATIC_DRAW);

    var vPosition = gl.getAttribLocation(program, "vPosition");
    gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition);

    setColors(currentColor, numPoints);  //set each point to the same color

    //create buffer for colors
    var cBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, flatten(color), gl.STATIC_DRAW);

    var vColor = gl.getAttribLocation(program, "vColor");
    gl.vertexAttribPointer(vColor, 4, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vColor);

    var projMatrix = ortho(-1, 1, -1, 1, -1, 1);
    var projMatrixLoc = gl.getUniformLocation(program, "projMatrix");
    gl.uniformMatrix4fv(projMatrixLoc, false, flatten(projMatrix));

    gl.drawArrays(gl.LINE_STRIP, 0, polyPoints.length); //draws the polyline

    pointIndex += numPoints;
}
//setting color of each point
function setColors(curColor, numPoints){
    var col = [];
    for(var i = 0; i < numPoints; i++) {
        col.push(curColor);
    }
    color = col;
}

//resets canvas to be blank
function resetCanvas(){
    polyNum = 0;
    drawPoints = [];
    numberPoints = [];
    currentColor = vec4(0.0, 0.0, 0.0, 1.0);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

//handle key events such as changing color by pressing 'c' or changing
// mode by pressing 'f' or starting a new line by pressing 'b'
function keyPressEvent(event){
    var key = event.key;
    switch(key){
        case 'r':   //adds red to color
            if(currentColor[0] !== 1)
                currentColor[0] += 0.1
            renderDrawing();
            break;
        case 'R':   //subtract red from color
            if(currentColor[0] !== 0)
                currentColor[0] -= 0.1;
            renderDrawing();
            break;
        case 'g':   //adds green to color
            if(currentColor[1] !== 1)            
                currentColor[1] += 0.1;
            renderDrawing();
            break;
        case 'G':   //subtracts green from color
            if(currentColor[1] !== 0) 
                currentColor[1] -= 0.1;
            renderDrawing();
            break;
        case 'b':   //adds blue to color
            if(currentColor[2] !== 1)            
                currentColor[2] += 0.1;
            renderDrawing();
            break;
        case 'B':   //subtracts blue from color
            if(currentColor[2] !== 0) 
                currentColor[2] -= 0.1;
            renderDrawing();
            break;
        case 'n':  //sets up for a new polyline
            newline = true;
            break;
    }
}