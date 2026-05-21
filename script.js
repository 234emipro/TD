const canvas=document.getElementById("espacio")
const ctx = canvas.getContext ("2d");
canvas.width=1100;
canvas.height=700;
let Life=0
let Money=5
let Waves=1
const liveText=document.getElementById("Lives")
const moneyText=document.getElementById("Cash")
const waveText=document.getElementById("Waves")
const enemies=[];
const bullets=[];
const towers=[];
const grassImg=new Image();
const lakeImg=new Image();
const caveImg=new Image();
// AXOLOTES_SF images
const axolotlBeeImg = new Image();
const axolotlCartoonImg = new Image();
const axolotlDevilImg = new Image();
const axolotlKnightImg = new Image();
const axolotlMarshImg = new Image();
const axolotlMochiImg = new Image();
const axolotlPenguImg = new Image();
const axolotlRobotImg = new Image();
const axolotlSkullImg = new Image();
const axolotlWizardImg = new Image();
// ENEMIGOS images
const enemyDefaultImg = new Image();
const enemyBearImg = new Image();
const enemyCrabImg = new Image();
const enemyFoxImg = new Image();
grassImg.src="IMAGENES/FONDO/Road.png";
lakeImg.src="IMAGENES/FONDO/Lago.png";
caveImg.src="IMAGENES/FONDO/Cueva.png";
// AXOLOTES_SF src
axolotlBeeImg.src = "IMAGENES/AXOLOTES_SF/Bee.png";
axolotlCartoonImg.src = "IMAGENES/AXOLOTES_SF/Cartoon.png";
axolotlDevilImg.src = "IMAGENES/AXOLOTES_SF/Devil.png";
axolotlKnightImg.src = "IMAGENES/AXOLOTES_SF/Knight.png";
axolotlMarshImg.src = "IMAGENES/AXOLOTES_SF/Marsh.png";
axolotlMochiImg.src = "IMAGENES/AXOLOTES_SF/Mochi.png";
axolotlPenguImg.src = "IMAGENES/AXOLOTES_SF/Pengu.png";
axolotlRobotImg.src = "IMAGENES/AXOLOTES_SF/Robot.png";
axolotlSkullImg.src = "IMAGENES/AXOLOTES_SF/Skull.png";
axolotlWizardImg.src = "IMAGENES/AXOLOTES_SF/Wizard.png";
// ENEMIGOS src
enemyDefaultImg.src = "IMAGENES/ENEMIGOS/5csv5gkj74l31-removebg-preview.png";
enemyBearImg.src = "IMAGENES/ENEMIGOS/Bear.png";
enemyCrabImg.src = "IMAGENES/ENEMIGOS/Crab.png";
enemyFoxImg.src = "IMAGENES/ENEMIGOS/Fox.png";

const path = [{
    x: 0, y: 300
}
,{
    x: 400, y: 300
} ,{
    x: 400, y: 500
},{ x: 800, y: 500
},{ x: 900, y: 150
} ,{
    x: 1100, y: 150
}];

function updateUi(){
    liveText.textContent = `Life: ${Life}`;
    moneyText.textContent = `Cash: ${Money}`;
    waveText.textContent = `Waves: ${Waves}`;
}

class Enemy {
    constructor(){
        this.x=path[0].x;
        this.y=path[0].y;
        this.size=50;
        this.range=200;
    }
}


function gameloop(){
    ctx.drawImage(grassImg,0,0,canvas.width,canvas.height);
    enemies.forEach(enemy=>{
        enemy.update();
        enemy.draw();
    });
    requestAnimationFrame(gameloop);
    if (Life <= 0) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cream";
    ctx.font = "48px comic sans ms";
    ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}
}
