console.log("Welcome in main.js");

//todo ==> slider array for setting the position of image
const slider = document.querySelectorAll(".slider-image");
slider.forEach((el, i) => {
	el.style.left = `${100 * i}%`;
});
console.log(slider);

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

// ? Ayaz bhai

let data1 = [
	{
		img: "https://cdn11.nnnow.com/web-images/medium/styles/8V1ZDUHUDR0/1533201155000/1.jpg",
		brand: "SEPHORA COLLECTION",
		product: "Beauty Amplifier Smoothing Primer",
		price: "Rs.1,345",
	},
	{
		img: "https://cdn11.nnnow.com/web-images/medium/styles/8V1ZDUHUDR0/1533201155000/1.jpg",
		brand: "SEPHORA COLLECTION",
		product: "Beauty Amplifier Smoothing Primer",
		price: "Rs.1,345",
	},
	{
		img: "https://cdn11.nnnow.com/web-images/medium/styles/8V1ZDUHUDR0/1533201155000/1.jpg",
		brand: "SEPHORA COLLECTION",
		product: "Beauty Amplifier Smoothing Primer",
		price: "Rs.1,345",
	},
];
const append_jl = (data) => {
	let container = document.querySelector(".jl_pl-container");
	container.innerHTML = "";
	data.forEach((el) => {
		const showTemplate = `<div class="product-item">
                                   <div class="product-image">
                                        <div>
                                             <img src="${el.img}" alt="">
                                        </div>
                                        <div class="product-cart">
                                             <div>
                                                  <span class="material-symbols-outlined"> shopping_bag </span>
                                                  <p>SHOP NNNOW</p>
                                             </div>
                                             <div>
                                                  <span class="material-symbols-outlined"> favorite </span>
                                                  <p>FAVORITE</p>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="product-details">
                                        <div class="offer">
                                             <img src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                                                  alt="">
                                             <p>OFFER</p>
                                        </div>
                                        <p class="product-brand">${el.brand}</p>
                                        <p class="product-description">${el.product}</p>
                                        <p class="product-price">${el.price}</p>
                                   </div>
                              </div>`;
		container.innerHTML += showTemplate;
	});
};

append_jl(data1);
