const CELL_SIZE = 20;
const CANVAS_SIZE = 400;
const REDRAW_INTERVAL = 100;
const WIDTH = CANVAS_SIZE / CELL_SIZE;
const HEIGHT = CANVAS_SIZE / CELL_SIZE;
const DIRECTION = {
    LEFT: 0,
    RIGHT: 1,
    UP: 2,
    DOWN: 3,
}
let MOVE_INTERVAL = 160;
let life = 3;
let level = 1;

function initPosition() {
    return {
        x: Math.floor(Math.random() * WIDTH),
        y: Math.floor(Math.random() * HEIGHT),
    }
}

function initHeadAndBody() {
    let head = initPosition();
    let body = [{x: head.x, y: head.y}];
    return {
        head: head,
        body: body,
    }
}

function initDirection() {
    return Math.floor(Math.random() * 4);
}

function initSnake() {
    return {
        ...initHeadAndBody(),
        direction: initDirection(),
        score: 0,
    }
}
let snake1 = initSnake();

let apple = {
    position: initPosition(),
}

let apple2 = {
    position: initPosition(),
}

let lifeIcon = {
    position: initPosition(),
}

let dinding1 = {
    position: {
        x: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        y: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    },
    color: "black",
}

let dinding2 = {
    position: {
        x: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        y: [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
    },
    color: "black",
}

let dinding3 = {
    position: {
        x: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
        y: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15]
    },
    color: "black",
}

let dinding4 = {
    position: {
        x: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        y: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    },
    color: "black",
}

let dinding5 = {
    position: {
        x: [15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],
        y: [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
    },
    color: "black",
}

function bangunDinding(){
    let positionLevel = level*10

}

function drawCell(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function drawGambar(ctx, img, x, y) {
    ctx.drawImage(img, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
}

function drawScore(snake) {
    let scoreCanvas;
    if (snake.color == snake1.color) {
        scoreCanvas = document.getElementById("score1Board");
    }
    let scoreCtx = scoreCanvas.getContext("2d");

    scoreCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    scoreCtx.font = "30px Arial";
    scoreCtx.fillStyle = snake.color
    scoreCtx.fillText(snake.score, 10, scoreCanvas.scrollHeight / 2);
}

function  apakahPrima  (angka) {
    let pembagi = 0;
    for(let i=1; i <= angka; i++){
      if(angka%i == 0){
        pembagi++
      }
    }
    if(pembagi == 2){
      return true
    }else{
      return false
    }
  }

function draw() {
    setInterval(function() {
        let snakeCanvas = document.getElementById("snakeBoard");
        let ctx = snakeCanvas.getContext("2d");
        let appleImg = document.getElementById("apple");
        let headSnakeImg = document.getElementById("head-snake");
        let bodySnakeImg = document.getElementById("body-snake");
        let lifeIconImage = document.getElementById("life-icon");

        ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
        
        drawGambar(ctx,headSnakeImg, snake1.head.x, snake1.head.y,);
        for (let i = 1; i < snake1.body.length; i++) {
            drawGambar(ctx, bodySnakeImg, snake1.body[i].x, snake1.body[i].y,);
        }
        
        drawGambar(ctx, appleImg, apple.position.x, apple.position.y);
        drawGambar(ctx, appleImg, apple2.position.x, apple2.position.y);

        if(apakahPrima(snake1.score)){
            drawGambar(ctx, lifeIconImage, lifeIcon.position.x, lifeIcon.position.y);
        }
        
        for(let i = 0; i < life; i++){
            drawGambar(ctx, lifeIconImage, i+0.2, 0.2);
        }

        if(level ===2){
            for(let i = 0; i < dinding1.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding1.position.x[i], dinding1.position.y[i], dinding1.color);
                console.log("test2")
            }
        }else if(level === 3){
            for(let i = 0; i < dinding1.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding1.position.x[i], dinding1.position.y[i], dinding1.color);
                console.log("test2")
            }
            for(let i = 0; i < dinding2.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding2.position.x[i], dinding2.position.y[i], dinding2.color);
                console.log("test2")
            }
        }else if (level === 4){
            for(let i = 0; i < dinding1.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding1.position.x[i], dinding1.position.y[i], dinding1.color);
                console.log("test2")
            }
            for(let i = 0; i < dinding2.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding2.position.x[i], dinding2.position.y[i], dinding2.color);
                console.log("test2")
            }
            for(let i = 0; i < dinding3.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding3.position.x[i], dinding3.position.y[i], dinding3.color);
                console.log("test2")
            }
        }else if(level === 5){
            for(let i = 0; i < dinding4.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding4.position.x[i], dinding4.position.y[i], dinding4.color);
                console.log("test2")
            }
            for(let i = 0; i < dinding5.position.x.length; i++){
                console.log("test")
                drawCell(ctx, dinding5.position.x[i], dinding5.position.y[i], dinding5.color);
                console.log("test2")
            }
        }

        drawScore(snake1);
        document.getElementById("level").innerHTML = "Snake Game - Level " + level;
        document.getElementById("moveSpeed").innerHTML = "Speed: " + MOVE_INTERVAL + " .ms";
    }, REDRAW_INTERVAL);
}

function teleport(snake) {
    if (snake.head.x < 0) {
        snake.head.x = CANVAS_SIZE / CELL_SIZE - 1;
    }
    if (snake.head.x >= WIDTH) {
        snake.head.x = 0;
    }
    if (snake.head.y < 0) {
        snake.head.y = CANVAS_SIZE / CELL_SIZE - 1;
    }
    if (snake.head.y >= HEIGHT) {
        snake.head.y = 0;
    }
}

function levelCheck(snake) {
    if(snake.score % 5 === 0){
        level++;
        let bel = new Audio('assets/levelUp.mp3');
        bel.play();
        MOVE_INTERVAL /= 1.2;
    }
}

function eat(snake, apple) {
    if (snake.head.x == apple.position.x && snake.head.y == apple.position.y) {
        apple.position = initPosition();
        snake.score++;
        snake.body.push({x: snake.head.x, y: snake.head.y});
        levelCheck(snake)
    }
}

function eatLive(snake, liveIcon) {
    if (snake.head.x == liveIcon.position.x && snake.head.y == liveIcon.position.y) {
        liveIcon.position = initPosition();
        snake.score++;
        snake.body.push({x: snake.head.x, y: snake.head.y});
        levelCheck(snake)
        life++;
    }
}

function moveLeft(snake) {
    snake.head.x--;
    teleport(snake);
    eat(snake, apple);
    eat(snake, apple2);
    eatLive(snake, lifeIcon);
}

function moveRight(snake) {
    snake.head.x++;
    teleport(snake);
    eat(snake, apple);
    eat(snake, apple2);
    eatLive(snake, lifeIcon);
}

function moveDown(snake) {
    snake.head.y++;
    teleport(snake);
    eat(snake, apple);
    eat(snake, apple2);
    eatLive(snake, lifeIcon);
}

function moveUp(snake) {
    snake.head.y--;
    teleport(snake);
    eat(snake, apple);
    eat(snake, apple2);
    eatLive(snake, lifeIcon);
}

function checkCollision(snakes) {
    let isCollide = false;
    //this
    for (let k = 1; k < snakes.body.length; k++) {
        if (snakes.head.x == snakes.body[k].x && snakes.head.y == snakes.body[k].y) {
            isCollide = true;
        }
    }

    if(level >= 2 && level <= 4 ){
        if(level >= 2){
            for (let i = 0; i < dinding1.position.x.length; i++){
                if (snakes.head.x == dinding1.position.x[i] && snakes.head.y == dinding1.position.y[i]){
                    isCollide = true;
                };
            }
        }if(level >= 3){
            for (let i = 0; i < dinding2.position.x.length; i++){
                if (snakes.head.x == dinding2.position.x[i] && snakes.head.y == dinding2.position.y[i]){
                    isCollide = true;
                };
            }
        }if(level >= 4){
            for (let i = 0; i < dinding3.position.x.length; i++){
                if (snakes.head.x == dinding3.position.x[i] && snakes.head.y == dinding3.position.y[i]){
                    isCollide = true;
                };
            }
        }
    }else if(level === 5){
        for (let i = 0; i < dinding4.position.x.length; i++){
            if (snakes.head.x == dinding4.position.x[i] && snakes.head.y == dinding4.position.y[i]){
                isCollide = true;
            };
        }
        for (let i = 0; i < dinding5.position.x.length; i++){
            if (snakes.head.x == dinding5.position.x[i] && snakes.head.y == dinding5.position.y[i]){
                isCollide = true;
            };
        }
    }

    if (isCollide) {
        if(life <= 0){
            var bel = new Audio('assets/game-over.mp3');
            bel.play();
            alert("Game over");
            snake1 = initSnake();
            life = 1;
        }else{
            snakes.score = 0;
            snake1 = initSnake();
            life--
        }
    }
    return isCollide;
}

function move(snake) {
    switch (snake.direction) {
        case DIRECTION.LEFT:
            moveLeft(snake);
            break;
        case DIRECTION.RIGHT:
            moveRight(snake);
            break;
        case DIRECTION.DOWN:
            moveDown(snake);
            break;
        case DIRECTION.UP:
            moveUp(snake);
            break;
    }
    moveBody(snake);
    if (!checkCollision(snake)) {
        setTimeout(function() {
            move(snake);
        }, MOVE_INTERVAL);
    } else {
        move(snake1);
    }
}

function moveBody(snake) {
    snake.body.unshift({ x: snake.head.x, y: snake.head.y });
    snake.body.pop();
}

function turn(snake, direction) {
    const oppositeDirections = {
        [DIRECTION.LEFT]: DIRECTION.RIGHT,
        [DIRECTION.RIGHT]: DIRECTION.LEFT,
        [DIRECTION.DOWN]: DIRECTION.UP,
        [DIRECTION.UP]: DIRECTION.DOWN,
    }

    if (direction !== oppositeDirections[snake.direction]) {
        snake.direction = direction;
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        turn(snake1, DIRECTION.LEFT);
    } else if (event.key === "ArrowRight") {
        turn(snake1, DIRECTION.RIGHT);
    } else if (event.key === "ArrowUp") {
        turn(snake1, DIRECTION.UP);
    } else if (event.key === "ArrowDown") {
        turn(snake1, DIRECTION.DOWN);
    }
})

move(snake1)
