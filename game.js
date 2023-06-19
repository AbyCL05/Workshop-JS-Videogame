const canvas = document.querySelector('#game')
const contextoCanvas = canvas.getContext('2d')
const btnUp = document.querySelector('#up')
const btnLeft = document.querySelector('#left')
const btnRight = document.querySelector('#right')
const btnDown = document.querySelector('#down')
btnUp.addEventListener('click', moveUp)
btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)
btnDown.addEventListener('click', moveDown)

document.addEventListener('keydown', moveByKeys)

let canvasSize 
let elementsSize

const playerPosition = {
    x: undefined,
    y: undefined, 
}

window.addEventListener('load', setCanvasSize)
window.addEventListener('resize', setCanvasSize)

function setCanvasSize () {
    if(window.innerHeight > window.innerWidth) {
        canvasSize = window.innerWidth *  0.8 
    } else {
        canvasSize = window.innerHeight * 0.8
    } 

    canvas.setAttribute('width', canvasSize)
    canvas.setAttribute('height', canvasSize)

     elementsSize = canvasSize / 10
     startGame()
}

function startGame () {
    contextoCanvas.font = ( elementsSize - 6) + 'px Verdana' 
    contextoCanvas.textAlign = 'end'

    const map = maps[2]
    const mapRows = map.trim().split('\n')
    const mapRowCols = mapRows.map(row => row.trim().split(''))

     mapRowCols.forEach((row, rowI)=> {
        row.forEach((col, colI) => {
            const emoji = emojis[col]
            const posX = elementsSize * (rowI + 1)
            const posY = elementsSize * (colI + 1)

            if (col == 'O' && !playerPosition.x && !playerPosition.y) {
                playerPosition.x = posX 
                playerPosition.y = posY 
            }

            contextoCanvas.fillText(emoji, posX + 8, posY - 9)
        })
     });
     contextoCanvas.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y)
}

function moveByKeys (event) {
    switch (event.key) {
        case 'ArrowUp' : moveUp()
        console.log(event);
        break;
        case 'ArrowLeft' : moveLeft()
        break;
        case 'ArrowRight' : moveRight()
        break;
        case 'ArrowDown' : moveDown()
        break;
        default : console.log('Presione las teclas de dirección');
    }
}

/*moveByButtons*/

function moveUp () {
    if ((playerPosition.y - elementsSize) < elementsSize) {
        console.log('no salgas');
    } else {
        playerPosition.y -= elementsSize
        setCanvasSize()
    }
    console.log('Arriba');
}
function moveLeft () {
    if ((playerPosition.x - elementsSize) < elementsSize) {
        console.log('no salgas');
    } else {
        playerPosition.x -= elementsSize
        setCanvasSize()
    }
    console.log('Izquierda');
}
function moveRight () {
    if((playerPosition.x + elementsSize) > canvasSize) {
        console.log('no salgas');
    } else {
        playerPosition.x += elementsSize
        setCanvasSize()
    }
    console.log('Derecha');
}
function moveDown () {
    if ((playerPosition.y + elementsSize) > canvasSize) {
        console.log('no salgas');
    } else {
        playerPosition.y += elementsSize
        setCanvasSize()
    }
    console.log('Abajo');
}



 /* if (playerPosition.x > canvasSize || playerPosition.y > canvasSize) {
     playerPosition.x = canvasSize
     playerPosition.y = canvasSize
 }*/