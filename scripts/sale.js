console.log("Welcome in main.js");

//todo ==> slider array for setting the position of image
const slider = document.querySelectorAll(".slider-image");
slider.forEach((el, i) => {
	el.style.left = `${100 * i}%`;
});
// console.log(slider);

//todo ==> automatic slide
let id;
const autoSlide = () => {
	id = setInterval(() => {
		if (count === slider.length) {
			count = 0;
		}
		slideImage("auto");
		count++;
	}, 3000);
};
autoSlide();

//todo ==> go previous button
let count = 0;
const goPrev = () => {
	console.log("prev");
	count--;
	setTimeout(slideImage());
	clearInterval(id);
};

//todo ==>go next button
const goNext = () => {
	count++;
	console.log("next");
	setTimeout(slideImage());
	clearInterval(id);
};

// todo ==> slide image funciton
const slideImage = () => {
	// console.log("count", count);
	if (count == slider.length) {
		document.querySelector(".next").style.cursor = "not-allowed";
		count = slider.length - 1;
	} else if (count < 0) {
		document.querySelector(".prev").style.cursor = "not-allowed";
		count = 0;
	} else {
		slider.forEach((el) => {
			el.style.translate = `-${100 * count}%`;
		});
		document.querySelector(".prev").style.cursor = "pointer";
		document.querySelector(".next").style.cursor = "pointer";
	}
};

//todo ------------Beauty Offers in brands----------
const cardContainer = document.querySelector("#card-container");
cardContainer.onclick = (event) => {
	console.log("clicked");
	console.log(event.target.id);
	if (
		event.target.id == "ikoo-img" ||
		event.target.id == "hanz-de-fuko-img" ||
		event.target.id == "pixi-img" ||
		event.target.id == "abhati-img"
	) {
		let temp = event.target.id;
		localStorage.setItem("productBrand", JSON.stringify(temp));
		window.location.href = "product.html";
	}
};
