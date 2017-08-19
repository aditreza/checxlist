// Membuat List baru if add button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("Kamu harus Menuliskan Sesuatu!");
    } else {
        //  document.getElementById("myUL").appendChild(li); // list dibawah
        var list = document.getElementById("checkList"); //
        list.insertBefore(li, list.childNodes[0]); // list di atas
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// list coret dan checklist
var listCoret = document.querySelector('ul');
//console.log(listCoret);
listCoret.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


// klik close button
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    //console.log(i);
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}