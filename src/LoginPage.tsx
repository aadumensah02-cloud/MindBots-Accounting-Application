import React, {useState, type ChangeEvent , type FormEvent} from 'react';
import './LoginPage.css';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
</style>

const LoginPage: React.FC = () => {

  const navigate = useNavigate(); 

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', {email, password});
  };

  // const handleEmailFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   const el = e.target;
  //   const length = el.value.length;
  //   el.setSelectionRange(length, length);
  // };

  // const handlePasswordFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   const el = e.target;
  //   const length = el.value.length;
  //   el.setSelectionRange(length, length);
  // };

  return (
    <div className = "login-container">
       <div className ="MindBots">
          <h2>MindBots Accounting Web Application</h2>
          <h5>Accounting With Technology</h5>
        </div>
       <form onSubmit={handleSubmit}>
          <div className ="email-group">
            <label htmlFor="email">BUSINESS EMAIL:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              // onFocus= {handleEmailFocus}
            />
          </div>
          <div>
            <div className = "password-header">
               <label htmlFor="password">PASSWORD:</label>
               <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>
            <div className = "password-group">
                {/* <span className="input-icon">🔒</span> */}
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                  // onFocus = {handlePasswordFocus}
                  />
            </div> 
          </div>
           <div className="checkbox-group">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember this device</label>
          </div>
          <div className='login-button'>
              <button onClick= {() => navigate("/dashboard")}type="submit">Login</button>
          </div>
          
      </form>
      <p className="signup-text">
        New to MindBots? <a href="/signup">Sign up for a new account</a>
      </p>
    </div>
  );
};

export default LoginPage