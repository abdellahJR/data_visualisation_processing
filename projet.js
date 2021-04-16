let altitude = 0;
let voxelSize = 10;
let zoom = 100;
//let arrensidemenet = [
//  ar1 = [-voxelSize*3, 1, -voxelSize*3],
//  ar2 = [-voxelSize*8, 1, -voxelSize*2],
//  ar3 = [-voxelSize*6, 1, -voxelSize*9],
//  ar4 = [voxelSize, 1, -voxelSize*9],
//  ar5 = [voxelSize*10, 1, -voxelSize*7],
//  ar6 = [x,y],
//  ar7 = [x,y],
//  ar8 = [x,y],
//  ar9 = [-voxelSize*26, 1, -voxelSize*6],
//  ar10 = [-voxelSize*14, 1, -voxelSize*10],
//  ar11 = [x,y],
//  ar12 = [x,y],
//  ar13 = [x,y],
//  ar14 = [x,y],
//  ar15 = [x,y],
//  ar16 = [x,y],
//  ar17 = [x,y],
//  ar18 = [x,y],
//  ar19 = [-voxelSize*22, 1, -voxelSize*18],
//  ar20 = [x,y],
//];
  
let img;
function preload() {
  img = loadImage('carte_paris.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  debugMode();
}
function draw() {
  background('white');
  orbitControl(2, 2, 0.1);
  ambientLight(100, 100, 100);
  directionalLight(255, 255, 255, 0.5, 1, -1);
  texture(img);
  box(700, 0, 700);
  
  

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
      let maxHeight = Math.floor(value * 3);
      //translate(x - 300, 0, z - 300);
      //box(voxelSize/10);
      // Draw a vertical stack of voxels
      //for (let h = 0; h <= maxHeight; h++) {
        // Note: by default "Up" is negative in the y axis
        translate(voxelSize*10, 1, -voxelSize*7);
        box(voxelSize);
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
