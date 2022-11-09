
let xBola = 300;
let yBola = 200;
let xvelocidade = 6;
let yvelocidade = 6;
let diametro = 20;
let raio = diametro / 2;

//-----RAQUETE MOVIMENTAÇÃO-----//
let xRaquete = 8;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;


function setup() {
  createCanvas(1920, 720);
}

function draw() {
  background(0);
  mostraBola();
  movimentaBola();
  verificaColisaoBordaBola();
  raquete();
  verificaColisaoRaquete();
}
  



function raquete(){
  rect(xRaquete, yRaquete, wRaquete, hRaquete);
  //rect(582, 150, 10, 90, 20);
  
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
  if(keyIsDown(83)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if(xBola - raio < xRaquete + wRaquete && yBola - raio < yRaquete + hRaquete && yBola + raio > yRaquete){
    xvelocidade *= -1;
  }
}

function mostraBola(){
    circle(xBola, yBola, diametro)
  }
  
  function movimentaBola(){
    xBola += xvelocidade;
    yBola += yvelocidade;
  }
  
  function verificaColisaoBordaBola(){
  if(xBola + raio > width || xBola - raio < 0){
     xvelocidade *= -1;
     }
  if(yBola + raio > height || yBola - raio < 0){
    yvelocidade *= -1;
  }
}