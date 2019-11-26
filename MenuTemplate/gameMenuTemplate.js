document.addEventListener('DOMContentLoaded', (e) => {
    _hide();
});

let el = document.getElementById("body");

if('alt' in window){
    alt.on("ShowHudUI", _show);
    alt.on("HideHudUI", _hide);
}

function _show() {
    document.getElementById("body").style.display = "block";
}

function _hide() {

    document.getElementById("body").style.display = "none";

}

alt.on("updateMenu", (menuTitle, menuIcon, menuIntro, button1, button2, button3, button4, button5, button6, button7, button1price, button2price, button3price, button4price,
                      button5price, button6price, button7price) => {
    document.getElementById("title").innerHTML = ""+menuTitle;
    document.getElementById("icon").src = "./icons/"+menuIcon+".svg";
    document.getElementById("intro").innerHTML = ""+menuIntro;
    document.getElementById("introend").innerHTML = ""+menuTitle;
    document.getElementById("button1name").innerHTML = ""+button1;
    document.getElementById("button2name").innerHTML = ""+button2;
    document.getElementById("button3name").innerHTML = ""+button3;
    document.getElementById("button4name").innerText = ""+button4;
    document.getElementById("button5name").innerHTML = ""+button5;
    document.getElementById("button6name").innerHTML = ""+button6;
    document.getElementById("button7name").innerHTML = ""+button7;
    document.getElementById("button1price").innerHTML = ""+button1price;
    document.getElementById("button2price").innerHTML = ""+button2price;
    document.getElementById("button3price").innerHTML = ""+button3price;
    document.getElementById("button4price").innerHTML = ""+button4price;
    document.getElementById("button5price").innerHTML = ""+button5price;
    document.getElementById("button6price").innerHTML = ""+button6price;
    document.getElementById("button7price").innerHTML = ""+button7price;
    _show();
});

function NextFunction() {

}

function ButtonClick(args) {
    alt.emit('JSToClientMenuCall', args);
}

function closeWin() {
    window.close();
    alt.emit('CloseMenuTemplate');
}
