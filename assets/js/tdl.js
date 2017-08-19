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
        var list = document.getElementById("myUL"); //
        list.insertBefore(li, list.childNodes[0]); // list di atas
    }
    //document.getElementById("myInput").value = "";


}

// list coret dan checklist
var listCoret = document.querySelector('ul');
listCoret.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);