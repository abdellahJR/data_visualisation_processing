let altitude = 0;
let voxelSize = 10;
let zoom = 100;
let arrensidemenet = [
  ar1 = [-voxelSize*3, 1, -voxelSize*3],
  ar2 = [-voxelSize*8, 1, -voxelSize*2],
  ar3 = [-voxelSize*6, 1, -voxelSize*9],
  ar4 = [voxelSize, 1, -voxelSize*9],
  ar5 = [voxelSize*10, 1, -voxelSize*7],
  ar6 = [voxelSize*6, 1, -voxelSize],
  ar7 = [voxelSize, 1, voxelSize*6],
  ar8 = [-voxelSize*12, 1, voxelSize*6],
  ar9 = [-voxelSize*26, 1, -voxelSize*6],
  ar10 = [-voxelSize*14, 1, -voxelSize*10],
  ar11 = [-voxelSize*2, 1, -voxelSize*16],
  ar12 = [voxelSize*13, 1, -voxelSize*22],
  ar13 = [voxelSize*22, 1, -voxelSize*10],
  ar14 = [voxelSize*21, 1, voxelSize*2],
  ar15 = [voxelSize*12, 1, voxelSize*12],
  ar16 = [-voxelSize, 1, voxelSize*19],
  ar17 = [-voxelSize*21, 1, voxelSize*9],
  ar18 = [-voxelSize*26, 1, -voxelSize*6],
  ar19 = [-voxelSize*22, 1, -voxelSize*18],
  ar20 = [-voxelSize*5, 1, -voxelSize*24],
];
  
let img;
function preload() {
  img = loadImage('carte_paris2.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  debugMode();
  //slider = createSlider(10, 400, 200);
}
function draw() {
  background('white');
  orbitControl(2, 2, 0.1);
  noStroke();
  ambientLight(100, 100, 100);
  directionalLight(255, 255, 255, 0.5, 1, -1);
  texture(img);
  box(700, 0, 700);
  //slider.position(10, height + h);
  //slider.style('height', '180px');

  for (var x = 0; x < 600; x += voxelSize) {
    for (var z = 0; z < 600; z += voxelSize) {
      var value = Math.max(
          // The noise function can take different numbers of arguments
          // it will produce pseudo random values for different inputs
          // similar inputs will produce similar values
          noise(
            (1 / zoom * x),
            (1 / zoom * z)) +
          altitude,
          0
      );
      fill(getColor(value));
      push();
      //let maxHeight = Math.floor(value * 1);
      //translate(x - 300, 0, z - 300);
      //box(voxelSize/10);
      // Draw a vertical stack of voxels
      //for (let h = 0; h <= maxHeight; h++) {
        // Note: by default "Up" is negative in the y axis
       for(var i = 0; i < 20; i++){
          //translate(arrensidemenet[i][0], arrensidemenet[i][1], arrensidemenet[i][2]);
          //box(voxelSize);
          //translate(0, 0, 0);
          stroke('purple'); // Change the color
          strokeWeight(10); // Make the points 10 pixels 
          point(arrensidemenet[i][0], arrensidemenet[i][1], arrensidemenet[i][2]);
       }
      //}
      pop();
    }
  }
}
function getColor(value) {
  for (let ix = 0; ix < gradientStops.length; ix++) {
    if (value <= gradientStops[ix]) {
      return gradientColors[ix];
    }
  }
  // default
  return 'white';
}

let gradientColors = ['red','blue','pink'];
let gradientStops = [0.04, 0.1, 0.8];
