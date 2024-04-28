
let a = window.document.getElementById("img");
const img1 = ''
console.log('a', a, window)
// a.style.position = "relative";
// a.style.left = "0px";
// a.style.top = "0px";
// a.style.right = "0px";
// a.style.down = "0px";
function fun(b) {
    console.log('b', b)
    if (b === "left") {
        // a.src = './assets/firstimage1.jpg'
        // a.style.left = (parseInt(a.style.left) - 10) + "px";
    }
    if (b === "right") {
        // a.src = './assets/firstimage2.jpg'

        // a.style.left = (parseInt(a.style.left) + 10) + "px";
    }


}


let slideIndex = 0;
showSlide(slideIndex);

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slider img');
  console.log('slides', slides)
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}
