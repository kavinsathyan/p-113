function setup(){
    canvas = createCanvas(640,480);
    canvas.position(100,250);
    video =createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video,200,150,200,200);

    fill(255,0,0);
    stroke(0,128,0);
    circle(50,50,80);

    fill(0,128,0);
    rect(30,90,25,310);
    fill(255,0,0);
    circle(50,430, 80);
  
    
    fill(0,128,0);
    stroke(0,128,0);
    rect(90,40,460,20);
  

    rect(90,420,460,20)  


    fill(255,0,0);
    stroke(0,128,0);
    circle(590,50,80);

    fill(0,128,0);
    rect(580,90,25,310);
    fill(255,0,0);
    circle(590,430, 80);

    

}