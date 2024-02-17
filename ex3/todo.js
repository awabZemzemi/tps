
function dele(x){
    document.getElementById(x).remove();
}
var i = 0

function essai(){
    const div=document.createElement('span');
    var del=document.createElement('button');
    del.innerHTML = document.getElementById("name").value+" : "+ document.getElementById("content").value+ '&#128465;&#65039;';
    
    var bt=i
    i++
    div.setAttribute("id",bt);
    del.onclick=function(){
        dele(bt)
    }

    div.appendChild(del);
    div.appendChild(document.createElement('br'));
    
    
    document.getElementById('container').appendChild(div)
    }
/* */