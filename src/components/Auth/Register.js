import { useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import { toast } from "bootstrap";
const Register = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const validateEmail = (email) => {
        return (String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ));
      };
    const handleSignIn=()=>{
        const checkMail=validateEmail(email);
        if(!checkMail)
        {

        }
    }
    const handleLogin = () => {
        navigate('/login');
    }

    return (
        <div className="register-page">
            <div className="register-container">
                <div className="register-header">
                    <span>Already have an account?</span>
                    <button onClick={handleLogin}>Log in</button>
                </div>
                <div className="register-title">
                    Hỏi Dân IT & Eric
                </div>
                <div className="register-subtitle">
                    Start your journey?
                </div>
                <div className="register-content">
                    <div className="form-group">
                        <label>Email (*)</label>
                        <input
                            type='email'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password (*)</label>
                        <input
                            type='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type='text'
                            value={username}
                            onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="btn-register">
                        <button onClick={()=>handleSignIn()}>Create my free account</button>
                    </div>
                    <div className="text-content">
                        <span className="back" onClick={() => { navigate('/') }}>Go to Homepage</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
