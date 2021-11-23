let box1 = document.getElementById("box1");
box1.addEventListener("click", myfunc);
function myfunc() {
    if (box1.innerHTML === "") {
        box1.innerHTML = "x";
    }
    else {
        box1.innerHTML = "";
    }
}
let box2 = document.getElementById("box2");
box2.addEventListener("click", mysecfunc);
function mysecfunc() {
    if (box2.innerHTML === "") {
        box2.innerHTML = "o";
    }
    else {
        box2.innerHTML = "";
    }
}

