// counter program

const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const countLabel = document.getElementById("countLabel");

let counter = 0;

increasebtn.onclick = function(){
    counter++;
    countLabel.textContent = counter;
}

decreasebtn.onclick = function(){
    counter--; 
    countLabel.textContent = counter;
}

resetbtn.onclick = function(){
    counter = 0;
    countLabel.textContent = counter;
}
