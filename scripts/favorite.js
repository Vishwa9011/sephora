console.log("Welcome in favorites.js");

let existingUserDataFromLS = JSON.parse(localStorage.getItem("existingUser"));
const getFavDataFromDatabase = async () => {
	const url = `https://sephors.onrender.com/favorite`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	filterDataForUser(data);
};

getFavDataFromDatabase();

// todo filtering the data
const filterDataForUser = (data) => {
	const temp = data.filter((el) => {
		return el["email"] == existingUserDataFromLS.email;
	});
	console.log("temp: ", temp);
	if (temp.length) {
		appendFilterData(temp);
	} else {
		appendEmpty();
	}
};

// todo empty
const appendEmpty = () => {
	document.querySelector("#fav-container").innerHTML = `<div id="EmptyBag">
												<div id="EmptyCart">
													<img src="./images/favorite.jpeg" alt="">
												</div>
												<div id="shop_more">
													<a href="sale.html"><button>SHOP NOW</button></a>
												</div>
											</div>`;
};

const appendFilterData = (data) => {
	document.querySelector("#fav-container").innerHTML = "";
	data.forEach((el) => {
		const showTemplate = `<div class="fav-item">
                                   <div class="fav-image">
                                        <img title="${el.id}" src="${el.img}"
                                             alt="">
                                   </div>
                                   <div class="detail">
                                        <div class="offer">
                                             <div><img src="https://cdn02.nnnow.com/web-images/master/product_tags/cb6e9f96-922e-42cb-84ae-9337178f87fa/1554297283453/Sale.png"
                                                       alt=""></div>
                                             <div>
                                                  <p>OFFER</p>
                                             </div>
                                        </div>
                                        <div class="product-name">
                                             <p>${el.brand}</p>
                                        </div>
                                        <div class="product-desc">
                                             <p>${el.product}</p>
                                        </div>
                                        <div class="product-colour">
                                             <p>Color : Crimson</p>
                                        </div>
                                        <div class="product-price">
                                             <p>${el.price}</p>
                                        </div>
                                        <div class="product-more-offer">
                                             <p>5 more offer</p>
                                        </div>
                                        <div class="move-remove">
                                             <div><button onclick="moveToBag('${el.id}')">Move to bag</button></div>
                                             <div><button onclick="RemoveFromFav('${el.id}')">Remove</button></div>
                                        </div>
                                   </div>
                              </div>`;
		document.querySelector("#fav-container").innerHTML += showTemplate;
	});
};

// todo remove the product from cart
const RemoveFromFav = async (id) => {
	const url = `https://sephors.onrender.com/favorite/${id}`;
	const res = await fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	getFavDataFromDatabase();
};

// todo move the element into the favorite
const moveToBag = async (id) => {
	const url = `https://sephors.onrender.com/favorite/${id}`;
	const res = await fetch(url);
	const data = await res.json();

	if (data) RemoveFromFav(id);

	//todo adding the data in fav
	addToBag(data);
};

const addToBag = async (data) => {
	const url = `https://sephors.onrender.com/cart`;
	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
