document.getElementById("newInput").addEventListener("keypress", function(e) {
    if (event.keyCode == 13) {
        submit();
    }
});

function submit (){
    var li = document.createElement("li");
    var input=document.getElementById("newInput").value;
    var t = document.createTextNode(input);
    li.appendChild(t);
    if (input === ''){
        alert("Du måste skriva något!")
    } else {
        document.getElementById("rememberList").appendChild(li);
    }
    
    document.getElementById("newInput").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    var date = new Date();
    var time = document.createTextNode(date.toDateString());
    span.className = "close";
    span.appendChild(time);
    span.appendChild(txt);
    li.appendChild(span);
    
    var close = document.getElementsByClassName("close");

    for (i =0; i< close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display ="none";
        }
    }
}

var list =document.querySelector('ul');
list.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}, false);

$(function() {
	$("#rememberList").sortable();
	$("#rememberList").disableSelection();
});


