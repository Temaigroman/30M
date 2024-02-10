let point = document.querySelectorAll('.point')
let imageSlider = document.querySelectorAll('.imageSlider')
let back = document.getElementById('back')
let next = document.getElementById('next')

point[0].classList.add('activeImage')
imageSlider[0].classList.add('activeImage')

let counter=0

for(let i=0; i<point.length; i++){
    point[i].addEventListener('click',()=>{
        for(let k = 0; k<imageSlider.length; k++){
            point[k].classList.remove('activeImage')
            imageSlider[k].classList.remove('activeImage')
        }
counter = i;
        imageSlider[counter].classList.add('activeImage')
        point[counter].classList.add('activeImage')
    })
}

back.addEventListener('click',()=> {
    for (let k = 0; k < imageSlider.length; k++) {
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }

    counter--
    if (counter < 0) {
        counter = imageSlider.length - 1
    }
    imageSlider[counter].classList.add('activeImage')
    point[counter].classList.add('activeImage')
})


next.addEventListener('click',()=>{
    for(let k = 0; k<imageSlider.length; k++){
        point[k].classList.remove('activeImage')
        imageSlider[k].classList.remove('activeImage')
    }
    counter++
    if (counter >= imageSlider.length){
        counter = 0
    }
    imageSlider[counter].classList.add('activeImage');
    point[counter].classList.add('activeImage');
})

/* // Кнопка стар/пауза

const icon = document.getElementById("control");
icon.addEventListener("click", function () {
    if (icon.className == "fa fa-play fa-5x") {
        icon.className = "fa fa-pause fa-5x";
    } else {
        icon.className = "fa fa-play fa-5x";
    }
});

// Старт/стоп видео
 
document.querySelector('#start_pause').onclick = play;
document.querySelector('#start_pause').onclick = pause;

let gif;
gif = document.querySelector('#imageSlider');
function play() {
    gif.play();}
function pause () {
    gif.pause();
}
 */

let btn_modal = document.getElementById('btn_modal')
let modal_block = document.getElementById('modal-block')