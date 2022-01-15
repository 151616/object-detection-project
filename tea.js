img = "";
Status = "";
object = [];
function setup(){
canvas = createCanvas(640, 420);
canvas.center();
object_detector = ml5.objectDetector("cocossd", modelloaded);
}
function preload(){
    img  = loadImage('tea.JPG');
}
function draw(){
    image(img,0,0,640,420);
    if(Status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            fill("#FF0000");
            stroke("#FF0000");
            percent = floor(object[i].confidence *100);
            text(object[i].label + "  " + percent + "%", object[i].x, object[i].y + 15); 
            noFill();
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
    
    }
function modelloaded(){
    console.log("Model Loaded!");
    Status = "true";
    object_detector.detect(img, gotresults);
}
function gotresults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        object = results;
    }
}
function back(){
    location = "index.html";
}

