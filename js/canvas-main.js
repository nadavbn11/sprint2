'use strict'


let canvas
let ctx

let currElement = 'triangle'



function uploade() {
    console.log("init");
    canvas = document.querySelector('#my-canvas');
    ctx = canvas.getContext('2d');
    randerImage();
}


function randerImage() {
    var background = new Image();
     var img=loadFromStorage('url')
     background.src = "meme-imgs/"+img;
    background.onload = function () {
        ctx.drawImage(background, 0, 0);
    }
}
function changeEl(elName) {
    currElement = elName
}

function draw(ev) {
    console.log(ev)
    ctx.save()
    // const offsetX = ev.offsetX
    // const offsetY = ev.offsetY
    const { offsetX, offsetY } = ev
    switch (currElement) {
        case 'triangle':
            drawTriangle()
            break;
        case 'rect':
            drawRect(offsetX, offsetY)
            break;
        case 'text':
            drawText('test', offsetX, offsetY)
            break;
    }
    ctx.restore()
}

function downloadCanvas(elLink) {
    const data = canvas.toDataURL()
    elLink.href = data



    elLink.download = 'my-img.jpg'
}

function drawImg() {
    const img = document.querySelector('img');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

}

function clearCanvas() {
    ctx.fillStyle = 'yellow'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.clearRect(50, 50, 100, 100)
}

function drawText(txt, x, y) {
    ctx.fillStyle = 'white'
    ctx.strokeStyle = 'green'
    ctx.font = "17px Arial";
    // ctx.fillText(txt, x, y);
    ctx.strokeText(txt, x, y);
}


function drawArc() {
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 1 * Math.PI);
    ctx.stroke();
}

function drawRect(x, y) {
    ctx.rect(x, y, 150, 150)
    ctx.fillStyle = 'orange'
    ctx.fillRect(x, y, 150, 150)
    ctx.stroke()
    ctx.fill()
}



function drawTriangle() {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(100, 100);
    ctx.closePath()

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue'
    ctx.fillStyle = '#ff0000'

    ctx.stroke();
    ctx.fill()

}

