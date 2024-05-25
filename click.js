var body     = document.querySelector("body");
var form     = document.createElement("div");
var header   = document.createElement("h4");
var container= document.createElement("div");
var box      = document.createElement("input");
var btn      = document.createElement("button");
var show     = document.querySelector("#randomfield");

body.appendChild(form);

form.appendChild(header);
form.appendChild(container);
form.appendChild(show);

container.appendChild(box);
container.appendChild(btn);

form.classList.add("form");

header.innerText="Change string to Propercase!";

header.style.color="";

container.classList.add("container");

box.innerText="";

show.style.color="blue";

btn.innerText="Click";

btn.classList.add("button");

btn.addEventListener("click",ranchar)

function ranchar(){

    var lenString=7;
    var randomChar='';
    var rnum=Math.floor(Math.random() * box.value.length);
    randomChar=box.value[rnum];

    document.getElementById("randomfield").innerHTML=randomChar;
}