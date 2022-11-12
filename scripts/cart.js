console.log("Welome in cart.js");

let existingUserDataFromLS = JSON.parse(localStorage.getItem("existingUser"));

const getCartDataFromDatabase = async () => {
	const url = `http://localhost:3000/cart`;
	const res = await fetch(url);
	const data = await res.json();
	console.log("data: ", data);
	filterDataForUser(data);
};
getCartDataFromDatabase();

// todo filtering the data
const filterDataForUser = (data) => {
	const temp = data.filter((el) => {
		return el["email"] == existingUserDataFromLS.email;
	});
	console.log("temp: ", temp);
	getTotalPrice(temp);
	appendFilterData(temp);
};

const appendFilterData = (data) => {
	document.querySelector("#lhs_cartDiv").innerHTML = "";
	data.forEach((el) => {
		const showTemplate = `<div class="fav-item">
                                   <div class="fav-image">
                                        <img title="${el.id}" src="${el.img}"
                                             alt="">
                                   </div>
                                   <div class="detail">
                                        <div class="product-name">
                                             <p>Sephora</p>
                                        </div>
                                        <div class="product-desc">
                                             <p>${el.product}</p>
                                        </div>
                                        <div class="product-colour">
                                             <p>Color : Crimson</p>
                                        </div>
                                        <div class="product-more-offer">
                                             <p>5 more offer</p>
                                        </div>
                                        <div class="move-remove">
                                             <div><button onclick="MoveToFavorite('${el.id}')">Move to Favorites</button></div>
                                             <div><button onclick="RemoveFromCart('${el.id}')">Remove</button></div>
                                        </div>
                                   </div>

                                   <div class="fav-item-last">
                                        <div>
                                             <span>Qty: </span>
                                             <select name="quantity" id="Cart-product-qantity">
                                                  <option value="1">1</option>
                                                  <option value="2">2</option>
                                                  <option value="3">3</option>
                                                  <option value="4">4</option>
                                             </select>
                                        </div>
                                        <div class="product-price">
                                             <p>${el.price}</p>
                                        </div>
                                   </div>
                              </div>`;
		document.querySelector("#lhs_cartDiv").innerHTML += showTemplate;
	});
};

// todo remove the product from cart
const RemoveFromCart = async (id) => {
	const url = `http://localhost:3000/cart/${id}`;
	const res = await fetch(url, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
	});
	getCartDataFromDatabase();
};

// todo move the element into the favorite
const MoveToFavorite = async (id) => {
	const url = `http://localhost:3000/cart/${id}`;
	const res = await fetch(url);
	const data = await res.json();

	if (data) RemoveFromCart(id);

	//todo adding the data in fav
	addToFavorite(data);
};

const addToFavorite = async (data) => {
	const url = `http://localhost:3000/favorite`;
	const res = await fetch(url, {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
		},
	});
};

// todo finding the total price;
let add = 0;
const getTotalPrice = (data) => {
	add = data.reduce((acc, el) => {
		let val = el.price.split(".")[1].split(",");
		return acc + +(val[0] + val[1]);
	}, 0);

	console.log({ add });
	document.querySelector("#subtotal>span+span").innerHTML = `Rs. ${add}`;
	charges(0, add);
};

// todo taking the promocode throw prompt
let discount = 0;
document.querySelector("#promo_code").onclick = () => {
	let discountSpan = document.querySelector("#discount>span+span");
	let val = prompt("Please Enter The promoCode");
	if (val === "SEPHORA30") {
		discount = (add * 0.3).toFixed(2);
		discountSpan.innerHTML = `- Rs. ${discount}`;
		discount = add - discount;
		charges(discount, add);
	}
};

//
const charges = (discount, add) => {
	let deliveryCharge = document.querySelector("#delivery_charges>span+span");
	let gst = document.querySelector("#gst>span+span");
	let totalPrice = document.querySelector("#total>span+span");
	let gstPrice = +(add * 0.18).toFixed(2);
	deliveryCharge.innerHTML = `Rs. 40`;
	gst.innerHTML = `Rs. ${gstPrice}`;
	totalPrice.innerHTML = `Rs. ${(discount || add) + 40 + gstPrice}`;
};

// TODO redirect to Sale when click the see more

document.querySelector(".shop_more").onclick = () => {
	window.location.href = "sale.html";
};
