
let a = window.document.getElementById("img");
const img1 = ''
console.log('a', a.src, window)
a.style.position = "relative";
a.style.left = "0px";
a.style.top = "0px";
a.style.right = "0px";
a.style.down = "0px";
function fun(b) {
    console.log('b', b)
    if (b === "left") {
        a.src = ''
        a.style.left = (parseInt(a.style.left) - 10) + "px";
    }
    if (b === "right") {
        a.style.left = (parseInt(a.style.left) + 10) + "px";
    }


}
