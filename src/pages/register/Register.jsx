// import axios from "axios";
// import { useRef } from "react";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";  
// import "./register.scss";

// export default function Register() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const history = useHistory();

//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const usernameRef = useRef();
//   // const moveToLogin = () =>{

//   // }
//   const handleStart = () => {
//     setEmail(emailRef.current.value);
//   };
//   const handleFinish = async (e) => {
//     e.preventDefault();
//     setPassword(passwordRef.current.value);
//     setUsername(usernameRef.current.value);
//     try {
//       await axios.post("auth/register", { email,username, password });
//       console.log("here")
//       history.push("/login");
//     } catch (err) {console.log(err)}
//   };
//   return (
//     <div className="register">
//       <div className="top">
//         <div className="wrapper">
//           <img
//             className="logo"
//             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
//             alt=""
//           />
//           <Link to = "/login">
//             <span className="loginButton" onClick={()=>console.log("hey")} >Sign In</span>
//           </Link>
//         </div>
//       </div>
//       <div className="container">
//         <h1>Unlimited movies, TV shows, and more.</h1>
//         <h2>Watch anywhere. Cancel anytime.</h2>
//         <p>
//           Ready to watch? Enter your email to create or restart your membership.
//         </p>
//         {!email ? (
//           <div className="input">
//             <input type="email" placeholder="email address" ref={emailRef} />
//             <button className="registerButton" onClick={handleStart}>
//               Get Started
//             </button>
//           </div>
//         ) : (
//           <form className="input">
//             <input type="username" placeholder="username" ref={usernameRef} />
//             <input type="password" placeholder="password" ref={passwordRef} />
//             <button className="registerButton" onClick={handleFinish}>
//               Start
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// }
import axios from "axios";
import { useRef } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
const login = ()=>{
  history.push("/login");
}
  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {console.log(err)}
  };
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          {/* <button className="loginButton" onClick={login}>Sign In</button> */}
          {/* <Link to="/login">
          <button className="loginButton" onClick={login}>Sign In</button>
          </Link> */}
          
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <>
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
          <div className="haveaccount">
            <p>Already Have an Account?</p>
          <Link to="/login">
          <button className="loginButton" onClick={login}>Sign In</button>
          </Link>
          </div>
          </>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}