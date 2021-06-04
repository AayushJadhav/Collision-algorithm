var backGround, backgroundImg;

var tom, tom_sitting, tom_moving, tom_quiet;

var mouse, mouse_enjoying, mouse_provoking, mouse_analyzing;

function preload() {
    //load the images here

    backgroundImg = loadImage("/images/garden.png");

    tom_sitting = loadAnimation('/images/cat1.png');
    tom_moving = loadAnimation('/images/cat2.png', 'images/cat3.png');
    tom_quiet = loadAnimation('/images/cat4.png');

    mouse_enjoying = loadAnimation('/images/mouse1.png');
    mouse_provoking = loadAnimation('/images/mouse2.png', 'images/mouse3.png');
    mouse_analyzing = loadAnimation('/images/mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    backGround = createSprite(width/2 - 200, height/2);
    backGround.addImage(backgroundImg);
    backGround.scale = 2;

    tom = createSprite(800, 700, 100, 50);
    tom.addAnimation('sitting', tom_sitting);
    tom.scale = 0.2;
    tom.addAnimation('moving', tom_moving);
    tom.scale = 0.2;
    tom.addAnimation('quiet', tom_quiet);
    tom.scale = 0.2;

    mouse = createSprite(200, 700, 40, 40);
    mouse.addAnimation('enjoying', mouse_enjoying);
    mouse.scale = 0.1;
    mouse.addAnimation('provoking', mouse_provoking);
    mouse.scale = 0.1;
    mouse.addAnimation('analyzing', mouse_analyzing);
    mouse.scale = 0.1;

    mouse.debug = true;
    mouse.setCollider('rectangle', 0, 0, mouse.width, mouse.height);
    tom.debug = true;
    tom.setCollider('rectangle', 0, 0, tom.width, tom.height);
}

function draw() {
    background(255);
    text(mouseX + ',' + mouseY, mouseX, mouseY);
    //Write condition here to evalute if tom and jerry collide
    console.log(mouse.width);

    mouse.width = Math.round(50);
    tom.width = Math.round(100);

    mouse.depth = backGround.depth;
    mouse.depth = mouse.depth + 1;
    
    if (keyDown('left_arrow')) {
        tom.changeAnimation('moving');
        tom.velocityX = -4;
        mouse.changeAnimation('provoking');
    }

    if (tom.x - mouse.x < mouse.width/2 + tom.width/2) {
        tom.velocityX = 0;
        tom.changeAnimation('quiet');
        mouse.changeAnimation('analyzing');
    }

    drawSprites();
}
