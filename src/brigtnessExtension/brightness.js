function cover(brightness) {
    if (typeof(div) == 'undefined') {
        div = document.createElement('div');
        div.setAttribute('style', 'position:fixed;top:0;left:0;outline:5000px solid;z-index:99999;');
        document.body.appendChild(div);
    } else {
        div.style.display = '';
    }
    div.style.outlineColor = 'rgba(0,0,0,' + brightness + ')';
}
//event listener
window.addEventListener('keydown', function(e) {
    if (e.altKey && e.keyCode == 90) { //Alt+Z: open dark mode
        cover(brightness = 0.3);
    }
    if (e.altKey && e.keyCode == 88) { //Alt+X:close mode
        cover(brightness = 0);
    }
    if (e.altKey && e.keyCode == 38) { //Alt+↑: increase brigtness
        if (brightness - 0.05 > 0.05) cover(brightness -= 0.05);
    }
    if (e.altKey && e.keyCode == 40) { //Alt+↓: decrease brigtness
        if (brightness + 0.05 < 0.95) cover(brightness += 0.05);
    }
}, false);
