let myMap;
let canvas;
var imgHome;
var imgHayes;
var imgHarriman;
var imgLibrary;
var imgDiefendorf;
var imgCommons;
var imgBaird;
var imgWendys;

const mappa = new Mappa('Leaflet');
const options = {
  lat: 42.924401,
  lng: -78.858307,
  zoom: 8,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

function preload() {

  hayesLocation = loadTable('Hayes_hall.csv', 'csv', 'header');
  abbottLocation = loadTable('Abbott_hall.csv', 'csv', 'header');
  diefendorfLocation = loadTable('Diefendorf_hall.csv', 'csv', 'header');
  harrimanLocation = loadTable('Harriman_hall.csv', 'csv', 'header');
  commonsLocation = loadTable('The_commons.csv', 'csv', 'header');
  homeLocation = loadTable('Home.csv', 'csv', 'header');
  wendysLocation = loadTable('Wendys.csv', 'csv', 'header');
  bairdLocation = loadTable('Baird_point.csv', 'csv', 'header');


}

function setup() {
  canvas = createCanvas(1200, 1200);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  myMap.onChange(drawHome.bind(null, homeLocation));
  myMap.onChange(drawHayes.bind(null,  hayesLocation));
  myMap.onChange(drawAbbott.bind(null, abbottLocation));
  myMap.onChange(drawDiefendorf.bind(null, diefendorfLocation));
  myMap.onChange(drawHarriman.bind(null, harrimanLocation));
  myMap.onChange(drawCommons.bind(null, commonsLocation));
  myMap.onChange(drawBaird.bind(null, bairdLocation));
  myMap.onChange(drawWendys.bind(null, wendysLocation));


  imgHome = loadImage('Home.jpg');
  imgHayes = loadImage('Hayes.jpg');
  imgHarriman = loadImage('Harriman.jpg');
  imgAbbott = loadImage('Abbott.jpg');
  imgDiefendorf = loadImage('Diefendorf.jpg');
  imgBaird = loadImage('Baird.jpg');
  imgCommons = loadImage('Commons.jpg');
  imgWendys = loadImage('Wendys.jpg');

}


function draw() {
}



function drawHome(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      stroke('red');
      strokeWeight(3);
      fill('white');
      push();
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 270);
      image(imgHome,pos.x-135,pos.y, m, m);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);


    }
  }
}



function drawHayes(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      push();
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgHayes,pos.x-100,pos.y, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}

function drawAbbott(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      push();
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgAbbott,pos.x-190,pos.y-135, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}

function drawDiefendorf(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      push();
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgDiefendorf,pos.x-100,pos.y, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}

function drawHarriman(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgHarriman,pos.x,pos.y-100, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}

function drawCommons(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgCommons,pos.x-100,pos.y, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}



function drawWendys(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      const zoom = myMap.zoom();
      stroke('red');
      strokeWeight(3);
      fill('black');
      push();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgWendys,pos.x-100,pos.y, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();


    }
  }
}

function drawBaird(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'reclat'));
    const longitude = Number(path.getString(i, 'reclon'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);

      stroke('red');
      strokeWeight(3);
      fill('black');
      const zoom = myMap.zoom();
      let m = map(zoom, 8, 18, 2, 200);
      let n = map(zoom, 8, 18, 5, 270);
      image(imgBaird,pos.x,pos.y-100, m, n, m, n);
      ellipse(pos.x, pos.y, 20, 20);
      pop();
      console.log(zoom);

    }
  }
}
