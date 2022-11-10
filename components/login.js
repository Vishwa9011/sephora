const loginComp = () => {
	return `   <div class="overlay"></div>
                    <div id="login-signup">
                         <div id="login">
                              <button class="x-btn">
                                   <span class="material-symbols-outlined">
                                        close
                                   </span>
                              </button>
                              <h1>LOGIN</h1>
                              <div id="form1">
                                   <p>Enter your Phone / Email</p>
                                   <input id="emailID" type="text" />
                                   <div id="err">Please enter a valid email address.</div>
                                   <button class="continue">CONTINUE</button>
                                   <div class="line"></div>
                                   <div class="text">or</div>
                                   <div class="gg-btn">
                                        <img src="https://static.nnnow.com/google-social-login.svg" alt="icon">
                                        <button>
                                             <span>Continue with Google</span>
                                        </button>
                                   </div>
                                   <div class="fb-btn">
                                        <img src="https://static.nnnow.com/facebook.png" alt="icon">
                                        <button>
                                             <span>Continue with Facebook</span>
                                        </button>
                                   </div>
                                   <div class="policy">
                                        <p>By proceeding, you agree to <a href="" target="_blank">Privacy Policy</a>,<br><a
                                                  href="" target="_blank">Terms & Conditions</a></p>
                                   </div>
                              </div>
                         </div>

                         <div id="createAccount">
                              <button class="back-btn">
                                   <span class="material-symbols-outlined">
                                        arrow_back_ios
                                   </span>
                              </button>
                              <div>
                                   <h1>CREATE ACCOUNT</h1>
                              </div>
                              <p>Name*</p>
                              <div class="name"><select>
                                        <option selected >Select</option>
                                        <option>Mr</option>
                                        <option>Ms</option>
                                   </select><input type="text" id="userName"></div>
                              <p>Email*</p>
                              <input type="text" id="userEmail">
                              <p>Password*</p>
                              <div class="name1">
                                   <input id="pass" type="password">
                              </div>
                              <p>Phone Number*</p>
                              <input type="text" id="userMob">
                              <button class="continue2">Sign Up</button>
                         </div>

                         <div id="enter">
                              <button class="back-btn" id="back-btn-enter">
                                   <span class="material-symbols-outlined">
                                        arrow_back_ios
                                   </span>
                              </button>
                              <div>
                                   <h1>ENTER PASSWORD</h1>
                              </div>
                              <div><img src="https://static.nnnow.com/Group%2043389.svg" alt=""></div>
                              <p>Password*</p>
                              <div class="name1">
                                   <input id="Pass" type="password">
                              </div>
                              <div class="fp">
                                   <p>Forget Password?</p>
                              </div>
                              <button class="continue3">CONTINUE</button>
                         </div>
                    </div>`;
};

export { loginComp };
