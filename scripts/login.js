console.log("Welcome in Login.js");

//todo display the login page
const loginbtn = document.querySelector(".loginBtn");
console.log("loginbtn: ", loginbtn);
loginbtn.onclick = () => {
	console.log("login");
	document.querySelector("#login-signup").style.display = "flex";
	document.querySelector(".overlay").style.display = "block";
	document.querySelector("#login").style.display = "block";
};

// todo close the login page
const closeBtn = document.querySelector(".x-btn");
closeBtn.onclick = () => {
	console.log("close");
	document.querySelector("#login-signup").style.display = "none";
	document.getElementById("enter").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
	document.getElementById("createAccount").style.display = "none";
};

//todo overlay
const overlay = (document.querySelector(".overlay").onclick = () => {
	document.querySelector("#login-signup").style.display = "none";
	document.querySelector(".overlay").style.display = "none";
	document.getElementById("enter").style.display = "none";
	document.getElementById("createAccount").style.display = "none";
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
let continueWith = document.querySelector(".continue");

continueWith.onclick = async () => {
	let user_name = document.getElementById("emailID").value;
	let createAccount = document.getElementById("createAccount");
	let enter = document.getElementById("enter");
	let login = document.getElementById("login");

	// ? checking the user input in bac
	let checkUserInput = await checkEmailReg(user_name);
	console.log("checkUserInput: ", checkUserInput);

	// todo
	if (validation(user_name)) {
		if (!checkUserInput) {
			createAccount.style.display = "block";
			login.style.display = "none";
		} else {
			enter.style.display = "block";
			login.style.display = "none";
			localStorage.setItem(
				"existingUser",
				JSON.stringify(checkUserInput),
			);
			err.style.visibility = "visible";
		}
		err.style.visibility = "hidden";
	} else {
		if (checkMobNum(user_name)) {
			if (user_name.length != 10)
				err.innerHTML = "Please enter a valid mobile.";
		} else {
			err.innerHTML = "Please enter a email address.";
		}
		//todo set the data into localStorage of exsiting user
	}
};

const validation = (user_name) => {
	return (
		(user_name.includes("@") && user_name != "") ||
		(checkMobNum(user_name) && user_name.length == 10)
	);
};

const checkMobNum = (mob) => {
	const mobChar = [...mob];
	let val = mobChar.find((el) => {
		return isNaN(el);
	});
	return val ? false : true;
};

const checkEmailReg = async (user_name) => {
	const url = ` http://localhost:3000/profile`;
	const res = await fetch(url);
	const data = await res.json();
	// console.log("data: ", data);

	return data.find((el) => {
		return el.email == user_name || el.phone == user_name;
	});
};

class User {
	constructor() {}

	checkvalidationForRegister(userData) {
		let { name, email, password, phone_number } = userData;
		if (
			name == "" ||
			email == "" ||
			password == "" ||
			phone_number == ""
		) {
			alert("Please fill all the required fields");
		} else {
			this.userRegisteration(userData);
		}
	}

	async userRegisteration(userData) {
		console.log("userData: ", userData);
		try {
			const url = `http://localhost:3000/profile`;
			const res = await fetch(url, {
				method: "POST",
				body: JSON.stringify(userData),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await res.json();
			console.log("data: ", data);
		} catch (error) {
			console.log("error: ", error);
		}
	}
}

let userDetails = new User();

//todo dom manupulation for registeratin of user
const registerBtn = document.querySelector(".continue2");
registerBtn.onclick = () => {
	const name = document.querySelector("#userName").value;
	const email = document.querySelector("#userEmail").value;
	const password = document.querySelector("#pass").value;
	const phone_number = document.querySelector("#userMob").value;
	const isAdmin = false;
	const sendData = {
		name,
		email,
		password,
		phone_number,
		isAdmin,
	};
	userDetails.checkvalidationForRegister(sendData);
};

// todo login with password for existing uer
const existingUserData = JSON.parse(localStorage.getItem("existingUser"));
const loginWithPass = document.querySelector(".continue3");
loginWithPass.onclick = () => {
	console.log("existingUserData: ", existingUserData.password);
	const userPass = document.querySelector("#Pass").value;
	if (existingUserData.password == userPass) {
		console.log("Successfully Login");
		alert("successfully login");
	} else {
		alert("Wrong Password");
	}
};
