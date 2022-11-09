import { footer } from "../components/footer.js";
import { navbar } from "../components/navbar.js";
const footerContainer = document.querySelector("#footer");
footerContainer.innerHTML = footer();

const navbarContainer = document.querySelector("#navbar");
navbarContainer.innerHTML = navbar();



//? ===================================================================
//todo display the login page
const loginbtn = document.querySelector(".loginBtn");
loginbtn.onclick = () => {
	console.log("login");
	document.querySelector("#login-signup").style.display = "flex";
	document.querySelector(".overlay").style.display = "block";
};

// todo close the login page
const closeBtn = document.querySelector(".x-btn");
closeBtn.onclick = () => {
	console.log("close");
	document.querySelector("#login-signup").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
};

//todo overlay
const overlay = (document.querySelector(".overlay").onclick = () => {
	document.querySelector("#login-signup").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
});

//todo backBtn
const backBtn = document.querySelector(".back-btn");
backBtn.onclick = () => {
	console.log("Back");
	document.querySelector("#login").style.display = "block";
	document.querySelector("#createAccount").style.display = "none";
};

//todo back btn
const backBtnEnter = document.querySelector("#back-btn-enter");
backBtnEnter.onclick = () => {
	console.log("Back");
	document.querySelector("#login").style.display = "block";
	document.querySelector("#enter").style.display = "none";
};

let user_name = document.getElementById("emailID");
let err = document.getElementById("err");
let login = document.querySelector(".continue");

login.onclick = () => {
	let user_name = document.getElementById("emailID").value;
	let createAccount = document.getElementById("createAccount");
	let enter = document.getElementById("enter");
	let login = document.getElementById("login");
	console.log("login: ", login);
	login.style.display = "none";
	console.log(user_name);
	let data = [
		{ id: 1, email: "ayazkhanm4512@gmail.com" },
		{ id: 2, email: "ayazkhan1245@gmail.com" },
		{ id: 3, email: "rahulkore1212@gmail.com" },
	];
	let ans = data.filter((el) => {
		if (el.email == user_name) {
			return true;
		} else {
			return false;
		}
	});
	console.log(ans);

	if (ans.length == 0) {
		createAccount.style.display = "block";
		login.style.display = "none";
	} else if (ans.length > 0) {
		enter.style.display = "block";
		login.style.display = "none";
	}
};

user_name.onblur = () => {
	let user_name = document.getElementById("emailID").value;

	if (user_name.includes("@") || user_name == "") {
		err.style.visibility = "hidden";
	} else {
		err.style.visibility = "visible";
	}
};
user_name.oninput = () => {
	let user_name = document.getElementById("emailID").value;
	// console.log(user_name)
	// console.log((user_name.length));
	if (user_name.includes("@") || user_name == "") {
		err.style.visibility = "hidden";
	}
};
