console.log("welcome in makeup.js");

let goToPageName = JSON.parse(localStorage.getItem("goToPage"));

const getDataParticularPage = async () => {
	const url = ` http://localhost:3000/${goToPageName}`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	// setTimeout(() => {
	for (let i in data) {
		appendDataOnPage(data[i], i);
	}
	// }, 2000);
};

getDataParticularPage();

const appendDataOnPage = ({ id, pageData }) => {
	document.querySelector(`.slider-cover${id} #product-container`).innerHTML =
		"";
	pageData.forEach((el) => {
		const showTemplate = `<div class="product-item">
							<div class="product-image">
								<div>
									<img src="${el.img}"
										alt="">
								</div>
								<div class="product-cart">
									<div>
										<span class="material-symbols-outlined">
											shopping_bag
										</span>
										<p>SHOP NNNOW</p>
									</div>
									<div>
										<span class="material-symbols-outlined">
											favorite
										</span>
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
		document.querySelector(
			`.slider-cover${id} #product-container`,
		).innerHTML += showTemplate;
	});
};

//todo containers
// !1
let product_slider_container1 = document.querySelector(
	".slider-cover1 #product-slider",
);

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
