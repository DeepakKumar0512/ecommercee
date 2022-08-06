import React,{useEffect,useRef,useState} from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import Checkout from './Checkout';
import SignIn from './SignIn';
import firebase from 'firebase/app';
import "firebase/auth";


function Header() {
  const [{ basket}] = useStateValue();
  const [modal, setmodal] = useState(null)
  let ref = useRef(null)
    
  const checkout= ()=>{
    setmodal(true)
    ref.current.click()
  }
  const loginpage= ()=>{
    setmodal(null)
    ref.current.click()
  }
  const [viewOtpForm, setViewOtpForm] = useState(false);
  const [user, setUser] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyC4lr4a9GGmRJh4xfHO5XCKmtMrRNQHrWw",
    authDomain: "ecommerce-ee4fe.firebaseapp.com",
    projectId: "ecommerce-ee4fe",
    storageBucket: "ecommerce-ee4fe.appspot.com",
    messagingSenderId: "636034493759",
    appId: "1:636034493759:web:8a254ab682f6dfd7c4378a",
    measurementId: "G-LXYPJCVVHE"
  };

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function () {
          console.log("Captcha Resolved");
          this.onSignInSubmit();
        },
        defaultCountry: "IN",
      }
    );
  }, []);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const auth = firebase.auth();
  const captchaRef = React.useRef(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    }
  });
  const loginSubmit = (e) => {
    e.preventDefault();
    let phone_number = "+91" + e.target.phone.value;
    const appVerifier = window.recaptchaVerifier;

    auth
      .signInWithPhoneNumber(phone_number,appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        console.log("otp sent");
        setViewOtpForm(true);
        window.confirmationResult = confirmationResult;
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        alert(error.message);
      });
  };
  const otpSubmit = (e) => {
    e.preventDefault();

    let opt_number = e.target.otp_value.value;

    window.confirmationResult
      .confirm(opt_number)
      .then((confirmationResult) => {
        console.log(confirmationResult);
        console.log("success");
        window.open("/", "_self");
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert(error.message);
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        window.open("/signin", "_self");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const userId = user.uid;
    return (
      <>
        <div id="recaptcha-container" ref={captchaRef}></div>
          <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            {modal?<div className="modal fade"  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title p-center" id="exampleModalLabel ">Cart Details</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <Checkout/>
                </div>
              </div>
            </div>
            </div>: <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className="modal-title " id="exampleModalLabel">Login</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <SignIn
                   loginSubmit={loginSubmit}
                   otpSubmit={otpSubmit}
                   viewOtpForm={viewOtpForm}
                   />
                </div>
              </div>
            </div>
          </div>}
           

    <nav className="header">
			<div className="m-2 header__title">
        <div onClick={checkout} className="header__link">
					<div className='my-2 mx-2 '>{basket.length} item(s)  <strong>^</strong>
						<p>
							Total Rs.{getBasketTotal(basket)}
						</p>
					</div> 
        </div>
      </div>
			{!userId ? 
				<div className="header__nav">
					<div className="header__option">
						<span className="login-btn" onClick={loginpage} >Login</span>
					</div>
				</div> 
			:
				<div className="header__nav">            
					<div className="header__option">
						<span className="logout-btn" onClick={signOut}>Logout</span>
					</div>            
				</div>
			}
                
      {userId?<div className="header__link">
        <Link to="/payment" className="header__link">
          <div className="header__option">
            <span className="header__optionuser" >&#8594;</span>
              </div>
                  </Link> 
                </div>:<div className="header__link">
          <div className="header__option">
            <span className="header__optionuser" onClick={()=>{alert("Please Login First")}} >&#8594;</span>
          </div> 
        </div>}                       
        </nav>
        </>
    )
}

export default Header
