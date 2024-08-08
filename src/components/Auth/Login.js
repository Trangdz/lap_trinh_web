import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = (props) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        //validate

        //submit
        let res = await postLogin(email, password);
        console.log("check res: ", res);
        if (res && res.EC === 0) {
            toast.success(res.EM);
            navigate("/");
        }
        if (res && res.EC !== 0) {
            toast.error(res.EM);
        }
    }

    const handleSignin = () => {
        navigate("/signin");
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-header">
                    <span>Don't have an account yet?</span>
                    <button onClick={handleSignin}>Sign up</button>
                </div>
                <div className="login-title">
                    ACTVN
                </div>
                <div className="login-subtitle">
                    Hello, who's this?
                </div>
                <div className="login-content">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type='email'
                            className='form-control'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <span>Forgot password</span>
                    <div className="btn-login">
                        <button onClick={() => handleLogin()}>Login</button>
                    </div>
                    <div className="text-content">
                        <span className="back" onClick={() => { navigate('/') }}>Go to Home Page</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
