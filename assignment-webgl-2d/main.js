function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Vertices Positions
    var vertices = [
        // Number 6
        -0.7010,0.0940,
        -0.7010,0.2980,
        -0.7000,0.3990,
        -0.6350,0.4990,
        -0.4970,0.4990,
        -0.3700,0.4980,
        -0.2960,0.3980, 
        -0.2990,0.3000, 
        -0.4020,0.3000, 
        -0.4020,0.3440, 
        -0.4010,0.4020, 
        -0.5960,0.4020, 
        -0.6000,0.1890, 
        -0.4010,0.1900, 
        -0.3000,0.1240, 
        -0.3000,0.0013, 
        -0.3000,-0.071, 
        -0.4010,-0.1520, 
        -0.6040,-0.1520, 
        -0.7000,-0.071,
        -0.7010,0.0940,

        -0.591,0.08,
        -0.591,-0.06,
        -0.4,-0.06,
        -0.4,0.08,
        -0.591,0.08,
        -0.591,-0.06,
        -0.4,-0.06,
        -0.4,0.08,
        
        // Number 1
        -0.099,0.720, 
        -0.200,0.667, 
        -0.202,0.568, 
        -0.100,0.568, 
        -0.101,0.061, 
        -0.101,-0.040, 
        -0.001,-0.040, 
        -0.002,0.719,
        -0.099,0.720,

        //LETTER N
        -0.490,-0.204, 
        -0.389,-0.797, 
        -0.6,-0.797, 
        -0.490,-0.204, 
        0.012,-0.797, 
        -0.203,-0.797, 
        -0.098,-0.201, 
        0.012,-0.797, 
        -0.185,-0.797,

        //LETTER A
       0.1,-0.8,
       0.330,-0.8,
       0.45,-0.1,
       0.6, -0.8,
       0.8,-0.8,
       0.45,-0.1,
       0.42,-0.4,
       0.4,-0.6,
       0.52,-0.5,

       //Heart <3
       0.678,0.607,
        0.597,0.550, 
        0.507,0.597, 
        0.440,0.531, 
        0.440,0.437, 
        0.596,0.316, 
        0.744,0.438, 
        0.744,0.539
    ];

    //Create a linked-list for storing vertices data in GPU
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // VERTEX SHADER
    var vertexShaderCode = `
        attribute vec2 aPosition;
        void main () {
            gl_PointSize = 15.0;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
    `;
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderCode);
    gl.compileShader(vertexShader);

    // FRAGMENT SHADER
    //FRAGMENT SHADER --> manage color data
    var fragmentShaderCode = `
        precision mediump float;
        void main() {
            gl_FragColor = vec4(0.58824, 0.49412, 0.46275, 1.0);
        }
    `;

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderCode);
    gl.compileShader(fragmentShader);

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Backround Color
    gl.clearColor(0.71765, 0.76863, 0.81176, 0.85);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //Teach computer how to collect the positional values for ARRAY_BUFFEr
    //for each vertex being proccesed
    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    //Renders
    gl.drawArrays(gl.LINE_LOOP, 0, 21); // NUMBER 6
    gl.drawArrays(gl.LINE_STRIP, 21, 6); 
    gl.drawArrays(gl.LINE_LOOP, 29, 8);// NUMBER 1
    gl.drawArrays(gl.TRIANGLES, 38,9);// LETTER N
    gl.drawArrays(gl.TRIANGLES, 47,9);//LETTER A
    gl.drawArrays(gl.LINE_LOOP, 56, 8); 
}