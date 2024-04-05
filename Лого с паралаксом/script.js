//Паралакс
window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

//Текст печатной машинкой
let textdata = [
	"ORLD", "AIND", //довать проверку если массив 0 то удалить ститль, если текст дата 1 добавить стиль
];

let ref = document.getElementById("text");
let first_latter = document.getElementById("first_latter");
let ind = 0;
let cInd = 0;
let remove = false;

function textTypeFunction() {
	if (ind < textdata.length) {
		let currentText = textdata[ind];
		if (!remove && cInd
			< currentText.length) {
			ref.textContent +=
				currentText.charAt(cInd);
			cInd++;
			setTimeout(textTypeFunction, 100); //скорость напечатывания
		} else if (remove && cInd >= 0) {
			ref.textContent =
				currentText.substring(0, cInd);
			cInd--;
			setTimeout(textTypeFunction, 100); //скорость упечатывания
		} else {
			remove = !remove;
			if (!remove) {
				ind++;
				if (ind >= textdata.length) {
					ind = 0;
				}
			}
			if (textdata.length > 0) {
          if (document.getElementById('first_latter')) {
					document.getElementById('first_latter').classList.toggle('transform_latter', ind === 1);
        }
        setTimeout(textTypeFunction, 1000); // скорость перехода на новый цикл
      }
	}
}
}

textTypeFunction();

//first_latter.classList.add('transform_latter');