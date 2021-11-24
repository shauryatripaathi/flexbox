let box1 = document.getElementById("box1");
box1.addEventListener("click", clickBox);

let box2 = document.getElementById("box2");
box2.addEventListener("click", clickBox);

let box3 = document.getElementById("box3");
box3.addEventListener("click", clickBox);

let box4 = document.getElementById("box4");
box4.addEventListener("click", clickBox);

let box5 = document.getElementById("box5");
box5.addEventListener("click", clickBox);

let box6 = document.getElementById("box6");
box6.addEventListener("click", clickBox);

let box7 = document.getElementById("box7");
box7.addEventListener("click", clickBox);

let box8 = document.getElementById("box8");
box8.addEventListener("click", clickBox);

let box9 = document.getElementById("box9");
box9.addEventListener("click", clickBox);


let array = ["x", "o", "x", "o", "x", "o", "x", "o", "x"];
function clickBox(e) {
    let game = e.target.id;
    for (let i = 0; i < array.length; i++) {
        
        if (game === "box1") {
            box1.innerHTML = array[i];
        }
        else if (game === "box2") {
            box2.innerHTML = array[i];
        }
        else if (game === "box3") {
            box3.innerHTML = array[i];
        }
        else if (game === "box4") {
            box4.innerHTML = array[i];
        }
    }
   alert()
}



// let click = [] ;
// for(let i=0 ; i<=9 ; i++){
//     box1.addEventListener("click", box1Func);
//     click = array[i];
// }
//      function box1Func() {   
//           alert(click);

// }