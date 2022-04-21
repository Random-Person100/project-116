nosex=0;
nosey=0;

function preload(){
clown_img=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png')
}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotposes)
}
function modelLoaded(){
    console.log("posenetInitialize")
}
function draw(){
image(video,0,0,300,300)
image(clown_img,nosex-15,nosey-15,30,30)
}
function take_snapshot(){
    save('mySelfie.png')
}
function gotposes(results){
if(results.length>0){
    console.log(results)
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
}
}
