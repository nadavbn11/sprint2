var gImgs;
var gFilterBy = 'all';
var gCurrImg;

function createImgs() {
    gImgs  = [
            createImg("2.jpg",['happy']),
            createImg("003.jpg",['happy']),
            createImg("004.jpg",['happy']),
            createImg("005.jpg",['happy']),
            createImg("5.jpg",['happy']),
            createImg("006.jpg",['happy']),
            createImg("8.jpg",['happy']),
            createImg("9.jpg",['happy']),
            createImg("12.jpg",['happy']),
            createImg("19.jpg",['happy']),
            createImg("Ancient-Aliens.jpg",['happy']),
            createImg("drevil.jpg",['happy']),
            createImg("img2.jpg",['happy']),
            createImg("img4.jpg",['happy']),
            createImg("img5.jpg",['happy']),
            createImg("img6.jpg",['happy']),
            createImg("Oprah-You-Get-A.jpg",['happy']),
            createImg("img11.jpg",['happy']),
            createImg("img12.jpg",['happy']),
            createImg("leo.jpg",['happy']),
            createImg("meme1.jpg",['happy']),
            createImg("One-Does-Not-simply.jpg",['happy']),
            createImg("patrick.jpg",['happy']),
            createImg("putin.jpg",['happy']),
            createImg("x-EveryWhere.jpg",['happy']),
        ]
    }

    function  openCanvas(id){
        saveToStorage('url', gImgs[id-1].url);
        window.location.href="canvas.html"
      
    }



function createImg(url,[keywords]) {
    return {
        id: makeId(),
        url: url,
        keywords:keywords
    }
}
