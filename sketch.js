
var cnv;

function setup() {
 //esta funcion define el alto y el ancho del canvas :3
 cnv = createCanvas(720, 400);
  centerCanvas()
  background(0);
  ellipse(360, 400, 100,100 );
  

}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight ) - 400
  cnv.position(x, y);
}

//draw() ftw hace todo basicamente.
function draw(){
  if(mouseIsPressed){
    noStroke();
     ellipse(360, 400, sqrt(millis()*20), sqrt(millis()*20));
    
    
    
    text ("Teneme paciencia porfi",350,300)
    text ("Lo estoy haciendo lo mejor que me sale",200,220)
    text ("Perdon",560,360)
    text ("siento que cada vez me es mas dificil u.u",460,260)
    text ("Perdon que nunca te conte",50,360)
    text ("La verdad no me tenia fe",180,200)
    text ("si, tenes razon",100,100)
    text ("Gracias por escucharme, te quiero :3 ",460,20)
    text ("porque decis que es", 100, 260)
    text ("como si lo hiciera ", 100, 280)
    text ("a propósito? ", 100, 300)
    text ("me da mucho miedo", 500, 200)
 
  }
 
  
  
}
