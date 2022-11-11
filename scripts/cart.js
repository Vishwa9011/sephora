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
                                             <div><button>Move to Favorites</button></div>
                                             <div><button>Remove</button></div>
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
