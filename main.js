function preload(){
  
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.position(500,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
   image(video,110,20,300,250);
}

function take_snapshot() {
  save('myFilterImage.png');
}
