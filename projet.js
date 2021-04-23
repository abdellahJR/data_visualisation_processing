
let data;
let myCamera;
let myConePositions = []; 
let show_serieTV;
let show_serieWeb;
let show_film;
let show_Long_metrage; 
let countArro = [];
let a;
let arrondissement = [
  ar1 = [
    [0, -10, -30],
    [10, -10, -30],
    [-10, -10, -30],
    [-10, -10, -40],
    [0, -10, -40],
    [10, -10, -20],
  ],
  ar2 = [
    [0, -10, -70],
    [-10, -10, -70],
    [10, -10, -70],
    [0, -10, -80],
    [-10, -10, -80],
    [10, -10, -80],
  ],
  ar3 = [
    [65, -10, -50],
    [75, -10, -50],
    [55, -10, -50],
    [65, -10, -60],
    [75, -10, -60],
    [55, -10, -60],
  ],
  ar4 = [
    [60, -10, 0],
    [70, -10, 0],
    [50, -10, 0],
    [60, -10, 10],
    [70, -10, 10],
    [50, -10, 10],
  ],
  ar5 = [
    [45, -10, 95],
    [55, -10, 95],
    [65, -10, 95],
    [45, -10, 85],
    [55, -10, 85],
    [65, -10, 85],
  ],
  ar6 = [
    [-15, -10, 60],
    [-25, -10, 60],
    [-35, -10, 60],
    [-15, -10, 70],
    [-25, -10, 70],
    [-35, -10, 70],
  ],
  ar7 = [
    [-80, -10, 0],
    [-90, -10, 0],
    [-100, -10, 0],
    [-80, -10, 10],
    [-90, -10, 10],
    [-100, -10, 10],
  ],
  ar8 = [
    [-85, -10, -110],
    [-95, -10, -110],
    [-105, -10, -110],
    [-85, -10, -120],
    [-95, -10, -120],
    [-105, -10, -120],
  ],
  ar9 = [
    [0, -10, -140],
    [-10, -10, -140],
    [10, -10, -140],
    [0, -10, -150],
    [-10, -10, -150],
    [10, -10, -150],
  ],
  ar10 = [
    [65, -10, -140],
    [75, -10, -140],
    [85, -10, -140],
    [65, -10, -130],
    [75, -10, -130],
    [85, -10, -130],
  ],
  ar11 = [
    [125, -10, -25],
    [135, -10, -25],
    [145, -10, -25],
    [125, -10, -15],
    [135, -10, -15],
    [145, -10, -15],
  ],
  ar12 = [
    [165, -10, 110],
    [175, -10, 110],
    [185, -10, 110],
    [165, -10, 120],
    [175, -10, 120],
    [185, -10, 120],
  ],
  ar13 = [
    [70, -10, 200],
    [80, -10, 200],
    [90, -10, 200],
    [70, -10, 210],
    [80, -10, 210],
    [90, -10, 210],
  ],
  ar14 = [
    [-30, -10, 200],
    [-40, -10, 200],
    [-50, -10, 200],
    [-30, -10, 190],
    [-40, -10, 190],
    [-50, -10, 190],
  ],
  ar15 = [
    [-140, -10, 110],
    [-150, -10, 110],
    [-160, -10, 110],
    [-140, -10, 120],
    [-150, -10, 120],
    [-160, -10, 120],
  ],
  ar16 = [
    [-200, -10, -10],
    [-210, -10, -10],
    [-220, -10, -10],
    [-200, -10, -20],
    [-210, -10, -20],
    [-220, -10, -20],
  ],
  ar17 = [
    [-100, -10, -210],
    [-110, -10, -210],
    [-120, -10, -210],
    [-100, -10, -220],
    [-110, -10, -220],
    [-120, -10, -220],
  ],
  ar18 = [
    [20, -10, -250],
    [30, -10, -250],
    [40, -10, -250],
    [20, -10, -260],
    [30, -10, -260],
    [40, -10, -260],
  ],
  ar19 = [
    [140, -10, -215],
    [150, -10, -215],
    [160, -10, -215],
    [140, -10, -225],
    [150, -10, -225],
    [160, -10, -225],
  ],
  ar20 = [
    [195, -10, -50],
    [205, -10, -50],
    [215, -10, -50],
    [195, -10, -60],
    [205, -10, -60],
    [215, -10, -60],
  ],
];
let img;

function preload() {
  img = loadImage('carte_paris.png');
  icon = loadImage('icon.png');
  data = loadJSON('data.json');
}




function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); //WEBGL enables 3d render by introducing the third dimension Z
  stroke("#43658b"); //color of grid
  debugMode(500, 10); // Add a grid and an axes guide.  RGB indicate XYZ, respectively (so Red is X axis. Direction of the stick outward indicates +ve on that axis.)

  //Set up a non-default camera position and facing.  You *can* delete these and accept the defaults
  myCamera = createCamera();
  myCamera.setPosition(200, -800, 800);
  myCamera.lookAt(0, 0, 0);

  makeArrayOfTenObjects();
  getCountsTournageInArron();
  // checkbox serie TV
  show_serieTV = createCheckbox('Les série TV', false);
  show_serieTV.position(20, 100);
  show_serieTV.changed(change_serieTV);
  // checkbox serie WEB
  show_serieWeb = createCheckbox('Les série WEB', false);
  show_serieWeb.position(20, 120);
  show_serieWeb.changed(change_serieWeb);
  // checkbox télefilm
  show_film = createCheckbox('Les télefilm', false);
  show_film.position(20, 140);
  show_film.changed(change_film);
  // checkbox long métrage
  show_Long_metrage = createCheckbox('Les long métrage', false);
  show_Long_metrage.position(20, 160);
  show_Long_metrage.changed(change_Long_metrage);
}

function change_serieTV() {
  if (this.checked()) {
    show_serieTV = true;
  }
  else {
    show_serieTV = false;
  }
}
function change_serieWeb() {
  if (this.checked()) {
    show_serieWeb = true;
  }
  else {
    show_serieWeb = false;
  }
}
function change_film() {
  if (this.checked()) {
    show_film = true;
  }
  else {
    show_film = false;
  }
}
function change_Long_metrage() {
  if (this.checked()) {
    show_Long_metrage = true;
  }
  else {
    show_Long_metrage = false;
  }
}

function getCountsTournageInArron() {
  for (let i = 1; i < arrondissement.length + 1; i++) {
    var a = 0;
    for (let d = 0; d < data.data.length; d++) {
      if (i < 10) {
        if (data.data[d].ardt_lieu == '7500' + i.toString()) {
          a++;
        }
      } else {
        if (data.data[d].ardt_lieu == '750' + i.toString()) {
          a++;
        }
      }
    }
    countArro.push(a);
  }
}

function draw() {
  background(200);
  orbitControl(5, 5, 0.01);
  directionalLight(color(150, 100, 0), createVector(-0.8, -0.5, -0.2));
  ambientLight(180, 150, 150);
  noStroke();
  texture(img);
  box(1400, 10, 1400);

  for (let i = 0; i < data.data.length; i++) {
    if (data.data[i].type_tournage == "Série TV" && show_serieTV == true) {
      ambientMaterial(color("#c0392b"));
      for (let ConePos of myConePositions) {
        makeCone(ConePos);
      }
    } else if (data.data[i].type_tournage == "Série Web" && show_serieWeb == true) {
      ambientMaterial(color("#efcb59"));
      for (let ConePos of myConePositions) {
        makeCone(ConePos);
      }
    } else if (data.data[i].type_tournage == "Téléfilm" && show_film == true) {
      ambientMaterial(color("#e68277"));
      for (let ConePos of myConePositions) {
        makeCone(ConePos);
      }
    } else if (data.data[i].type_tournage == "Long métrage" && show_Long_metrage == true) {
      ambientMaterial(color("#732219"));
      for (let ConePos of myConePositions) {
        makeCone(ConePos);
      }
    }
  }
}



function makeCone(posObject) {
  push();
  translate(posObject.x, posObject.y, posObject.z);
  for (let x = 0; x < countArro.length; x++) {
    cone(random(x, countArro[x])*2, random(x, -10 * countArro[x])*2);
  }
  pop();
}

function makeArrayOfTenObjects() {
  for (let i = 0; i < arrondissement.length; i++) {
    for (let x = 0; x < arrondissement[i].length; x++) {
      let posObject = { x: random(arrondissement[i][x][0] - 10, arrondissement[i][x][0] + 10) * 2, y: arrondissement[i][x][1], z: random(arrondissement[i][x][2] - 10, arrondissement[i][x][2] + 10) * 2 };
      myConePositions.push(posObject);
    }
  }
}
