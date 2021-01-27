const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy,thunderbolt1,rain1,rain2,rain3,rain4,rain5,rain6,rain7,rain8,rain9,rain10,rain11,rain12,rain13,rain14,rain15,rain16,rain17,rain18,rain19,rain20,rain21,rain22,rain23,rain24,rain25,rain26,rain27,rain28,rain29,rain30;
var rain31,rain32,rain33;




function setup(){
   
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
     
    rain1 = new Rain(200,200,10,10)
    rain2 = new Rain(250,200,10,10)
    rain3 = new Rain(300,200,10,10)
    rain4 = new Rain(350,200,10,10)
    rain5 = new Rain(150,200,10,10)
    rain6 = new Rain(450,200,10,10)
    rain7 = new Rain(500,200,10,10)
    rain8 = new Rain(550,200,10,10)
    rain9 = new Rain(600,200,10,10)
    rain10 = new Rain(650,200,10,10)
    rain11 = new Rain(700,200,10,10)
    rain12 = new Rain(200,200,10,10)
    rain13 = new Rain(250,200,10,10)
    rain14 = new Rain(300,200,10,10)
    rain15 = new Rain(350,200,10,10)
    rain16 = new Rain(150,200,10,10)
    rain17 = new Rain(450,200,10,10)
    rain18 = new Rain(500,200,10,10)
    rain19 = new Rain(550,200,10,10)
    rain20 = new Rain(600,200,10,10)
    rain21 = new Rain(650,200,10,10)
    rain22 = new Rain(700,200,10,10)
    rain23 = new Rain(200,200,10,10)
    rain24= new Rain(150,200,10,10)
    rain25 = new Rain(250,200,10,10)
    rain26 = new Rain(300,200,10,10)
    rain27 = new Rain(350,200,10,10)
    rain28 = new Rain(550,200,10,10)
    rain29 = new Rain(450,200,10,10)
    rain30 = new Rain(500,200,10,10)
    rain31 = new Rain(600,200,10,10)
    rain32 = new Rain(650,200,10,10)
    rain33 = new Rain(700,200,10,10)

    boy = new Boy(400,700,10,10);
    thunderbolt1 = new Thunder(400,100,100,10);
    
}

function draw(){

   background("black")
   
   Engine.update(engine);

   drawSprites();


   boy.display();
   thunderbolt1.display();
   rain1.display();
   rain2.display();
   rain3.display();
   rain4.display();
   rain5.display();
   rain6.display();
   rain7.display();
   rain8.display();
   rain9.display();
   rain10.display();
   rain11.display();
   rain12.display();
   rain13.display();
   rain14.display();
   rain15.display();
   rain16.display();
   rain17.display();
   rain18.display();
   rain19.display();
   rain20.display();
   rain21.display();
   rain22.display();
   rain23.display();
   rain24.display();
   rain25.display();
   rain26.display();
   rain27.display();
   rain28.display();
   rain29.display();
   rain30.display();
   rain31.display();
   rain32.display();
   rain33.display();
}   

