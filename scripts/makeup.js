console.log("welcome in makeup.js");

//todo containers
// !1
let product_slider_container1 = document.querySelector(
	".slider-cover1 #product-slider",
);
// var product_item = [
// 	...document.querySelectorAll("slider-cover1 .product-item"),
// ];
// console.log("product_item: ", product_item);

//todo navigation button
let product_slide_next1 = document.querySelector(
	".slider-cover1 #product-slider-next",
);
let product_slide_prev1 = document.querySelector(
	".slider-cover1 #product-slider-prev",
);

product_slide_next1.onclick = () => {
	console.log("next");
	product_slider_container1.scrollLeft += 208;
};
product_slide_prev1.onclick = () => {
	product_slider_container1.scrollLeft -= 208;
};

// !2
let product_slider_container2 = document.querySelector(
	".slider-cover2 #product-slider",
);
// var product_item = [...document.querySelectorAll(".product-item")];
// console.log("product_item: ", product_item);

//todo navigation button
let product_slide_next2 = document.querySelector(
	".slider-cover2 #product-slider-next",
);
let product_slide_prev2 = document.querySelector(
	".slider-cover2 #product-slider-prev",
);

product_slide_next2.onclick = () => {
	console.log("next");
	product_slider_container2.scrollLeft += 208;
};
product_slide_prev2.onclick = () => {
	product_slider_container2.scrollLeft -= 208;
};

let product_slider_container3 = document.querySelector(
	".slider-cover3 #product-slider",
);

//todo navigation button
let product_slide_next3 = document.querySelector(
	".slider-cover3 #product-slider-next",
);
let product_slide_prev3 = document.querySelector(
	".slider-cover3 #product-slider-prev",
);

product_slide_next3.onclick = () => {
	console.log("next");
	product_slider_container3.scrollLeft += 208;
};
product_slide_prev3.onclick = () => {
	product_slider_container3.scrollLeft -= 208;
};
