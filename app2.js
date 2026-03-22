
let fun = function(){
    let r =Math.floor(Math.random()*255);
    let g =Math.floor(Math.random()*255);
    let b =Math.floor(Math.random()*255);
    let final = `rgb(${r},${g},${b})`
    return final;
};

let btn = document.querySelector('button');
btn.onclick = () =>{
let color = fun();
    let h1 = document.querySelector('h1');
    h1.innerText = color;

    let div = document.querySelector(".box");
    div.style.backgroundColor = color;
}