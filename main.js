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
    img = loadImage('assets/incentivized_mesh_color_no_alpha.png');
}

function draw(){
    clear()
    tint(h, 100, 100, 90);
    background(img);
    h+=1;
    if(h >= 100){
       h = 0; 
    }
    console.log(h);
}

