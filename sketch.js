  // var hour,minute//,seconds;
 
function setup() {
  createCanvas(800,400);
  
   
}

function draw() {
  background(0);
 var seconds=second()
  var minutes=minute()
  var hr=hour()  
 // text(hour+'/'+minute+'/'+seconds,400,200)
 
 secondcAngle = map(seconds, 0, 60, 0, 360);
 minuteangle = map(minutes, 0, 60, 0, 360);
 hourangle = map(hr, 0, 12, 0, 360);
 
  angleMode(DEGREES)
  stroke('blue')
  strokeWeight(5)
fill('black')
  //arc(400,200,100,20,10,20)
  arc(400,200,300,300,0,hourangle);
  stroke('green')
   arc(400,200,270,270,0,minuteangle);
   stroke("red")
   arc(400,200,250,250,0,secondcAngle);
  
  text('Seconds=Red',100,200)
  text('Minutes=Green',100,220)
  text('Hours=Blue',100,240)
  if(hour<12){
    text("Am",700,200)
     }else{
      text("Pm",700,200)
     }

  drawSprites();
}

