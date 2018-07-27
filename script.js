

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));

itemsArray.forEach(items => {
    indata(items);
    
    
});


document.getElementById("newInput").addEventListener("keypress", function (e) {
    if (event.keyCode == 13) {
        submit();
    }
});

function indata(items) {
    var li = document.createElement("li");
    var input = document.getElementById("newInput");
    var t = document.createTextNode(items);
    console.log(items);
    li.appendChild(t);
    document.getElementById("rememberList").appendChild(li);
    close(li);

    }
    
function submit() {
    var li = document.createElement("li");
    var input = document.getElementById("newInput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if (input === '') {
        alert("Du måste skriva något!")
    } else {
        document.getElementById("rememberList").appendChild(li);
    }

    document.getElementById("newInput").value = "";

    close(li);
    
    itemsArray.push(input);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
}

function close (li){    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var date = new Date();
    var time = document.createTextNode(date.toDateString());
    span.className = "close";
    span.appendChild(time);
    span.appendChild(txt);
    li.appendChild(span);

    var close = document.getElementsByClassName("close");

    for (i = 0; i < close.length; i++) {
        (function (i){
            close[i].onclick = function () {

                var div = this.parentElement;
                div.style.display = "none";
                console.log(itemsArray);
                itemsArray.splice(i-1,1);
                console.log(i);
                console.log(itemsArray);
                localStorage.setItem('items', JSON.stringify(itemsArray));
                
        }
    })(i);
        

        
    }
}
function getItems() {
    var str = localStorage.getItem('items');
    todos = JSON.parse(str);
    if (!todos) {
        todos = [];
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

$(function () {
    $("#rememberList").sortable();
    $("#rememberList").disableSelection();
});




