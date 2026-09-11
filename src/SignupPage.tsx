import { useNavigate } from "react-router";
import "./SignupPage.css";
// import { Link } from "react-router-dom";

const SignupPage: React.FC = () => {

   const navigate = useNavigate();

  return (
    <div className="signup-container">
        <div className = "signup-left">
            <h1>MindBots</h1>
            <h2>Empowering Institutionnal Finanacial Decisions.</h2>
            <p>Access the Ghana's most advances AI-driven accounting assistant. 
            Secure, high-precision, and built for modern business scale. 
            </p>
            <p className = "bottom-word">MindBots Accounting Web Application</p>
        </div>

        <div className = "signup-right">
         <h2>Create your account</h2>
         <form className = "signup-form">
              <div className="form-group">
                 <label htmlFor="name">Full Name:</label>
                 <input type="text" id="name" placeholder = "John Doe" />
              </div>
        
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" placeholder = "john@example.com" />
              </div>

                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" placeholder = "Enter your password" />
                  <small>Password must be at least 8 characters long.</small>
               </div>

                <div className="checkbox">
                  <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                     I agree to the Terms of Service and Privacy Policy.
                  </label>
                </div>
                <div className="create-account-button">
                   <button className = "signup-button" type="submit" onClick={() => navigate("/dashboard")}>Create Account → </button>
                </div>
              
          </form>

          <p className="login-link">
              Already have an account? <a href="/loginpage">Login here</a>
           </p>
       </div>
    </div>
      
  );
};

export default SignupPage;