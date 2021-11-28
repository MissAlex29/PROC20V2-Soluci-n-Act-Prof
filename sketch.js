//Para usar el motor físico estableceremos 3 objetos 
//creados en la librería matter.js (World,Engine y Bodys)

//Como los objetos pertenecen a la librería matter.js 

const Engine = Matter.Engine; //se hace referencia a ellos con Matter.Engine
const World = Matter.World;//se hace referencia a ellos con Matter.World
const Bodies = Matter.Bodies;//se hace referencia a ellos con Matter.Bodies
const Body = Matter.Body;//se hace referencia a ellos con Matter.Body

let engine;
let world;

var ball;
var ground;

function setup(){
  createCanvas(400,400);

  engine = Engine.create(); //Se crea motor físico 
  world = engine.world;// Se crea un mundo nuevo usando el motor físico 

  //Opciones de la biblioteca matters para el cuerpo de ball
  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  } 
  ball = Bodies.circle(100,10,20,ball_options);//Se asigna forma al cuerpo
  World.add(world,ball);//Se agrega el cuerpo al mundo nuevo

  //Opciones de la biblioteca matters para el cuerpo de ground
  var ground_options = {
    isStatic: true
  } 
  ground = Bodies.rectangle(5,390,400,20,ground_options);//Se asigna forma al cuerpo
  World.add(world,ground);//Se agrega el cuerpo al mundo nuevo
 
}

function draw() {
  background(200);
  //Se actualiza el moto físico 
  Engine.update(engine);//Actualiza el motor físico
  
  //Se muestra el cuerpo "ball" con una forma geométrica y color específicos
  fill("red"); 
  ellipse(ball.position.x,ball.position.y,20);
  
  //Se muestra el cuerpo "ground" con una forma geométrica y color específicos
  fill("brown");
  rect(ground.position.x,ground.position.y,390,20);
  
}
