import React from "react";

function Login(){


    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
	    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
	    container.classList.remove("right-panel-active");
    });

    return(
        <div>
       
        <div className="loginRegister container" id="container">
            
        <div className="form-container sign-up-container">
		    <form className="loginForm" action="#">
			    <h1 className="headerh1">Create Account</h1>
			    <div className="social-container">
				    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			    </div>
			    <span className="formSpan">or use your email for registration</span>
			    <input className="loginInput" type="text" placeholder="Name" />
			    <input className="loginInput" type="email" placeholder="Email" />
			    <input className="loginInput" type="password" placeholder="Password" />
			    <button className="formButton">Sign Up</button>
		    </form>
	    </div>
	    <div className="form-container sign-in-container">
		    <form className="loginForm" action="#">
			    <h1 className="headerh1">Sign in</h1>
			    <div className="social-container">
				    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
				    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
				    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
			    </div>
			    <span className="formSpan">or use your account</span>
			    <input className="loginInput" type="email" placeholder="Email" />
			    <input className="loginInput" type="password" placeholder="Password" />
			    <a id="formA" href="#">Forgot your password?</a>
			    <button className="formButton">Sign In</button>
		    </form>
	    </div>
	    <div className="overlay-container">
		    <div className="overlay">
			    <div className="overlay-panel overlay-left">
				    <h1 className="headerh1">Welcome Back!</h1>
				    <p className="formP">To keep connected with us please login with your personal info</p>
				    <button className="ghost formButton" id="signIn">Sign In</button>
			    </div>
			    <div className="overlay-panel overlay-right">
				    <h1 className="headerh1">Hello, Friend!</h1>
				    <p className="formP">Enter your personal details and start journey with us</p>
				    <button className="ghost formButton" id="signUp">Sign Up</button>
			    </div>
		    </div>
	    </div>
    </div> 
    </div>
            
    )
}

export default Login;