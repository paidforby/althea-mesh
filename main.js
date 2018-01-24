var img
var h = 50;

function preload() {
      soundFormats('mp3', 'ogg');
      money = loadSound('assets/money.mp3');
}

function setup(){
    money.setVolume(0.5);
    money.play();
    createCanvas(1200, 600);
    colorMode(HSB, 100);
    img = loadImage('assets/incentivized_mesh_color.png');
}

function draw(){
    tint(h, 50, 100, 75);
    background(img);
    h+=5;
    if(h >= 100){
       h = 0; 
    }
    console.log(h);
}

