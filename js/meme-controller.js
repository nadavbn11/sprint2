
function onInit() {
    createImgs();
    renderImgs();
}


function renderImgs() {

    var strHtmls = gImgs.map(function (image) {
        console.log(image.url);
        return `<img src='meme-imgs/${image.url}' class="box item-1" id='${image.id}' onclick="OnopenCanvas(this.id)"></img>`;

    })
    document.querySelector('.img-container').innerHTML = strHtmls;


}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') document.body.classList.add('rtl');
    else document.body.classList.remove('rtl');

    doTrans();
}

function OnopenCanvas(id){
    openCanvas(id);
}
