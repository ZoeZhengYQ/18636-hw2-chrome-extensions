'use strict';
window.onload=function() {
    var x = document.getElementById('hello-input');
    if (x) {
        x.addEventListener('input', input);
    }
}


function input(e) {
    var name = document.getElementById('hello-input').value;
    var displayMsg = 'Hello ' + name + '!';
    document.getElementById('hello-msg').innerText = displayMsg;
}

