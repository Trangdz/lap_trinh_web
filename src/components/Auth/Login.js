import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = (props) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate=useNavigate();
    const handleLogin = async() => {
        //validate

        //submit
        let res= await postLogin(email,password);
        console.log("check res: ",res);
        if( res && res.EC===0)
        {
            toast.success(res.EM);
          navigate("/");

        }
        if( res && res.EC!==0)
        {
            toast.error(res.EM); 
        }
    }
    
    return (
        <div className="login-container">
            <div className='header col-4 mx-auto' >

                <span>Don't have an account yet?</span>
                <button>Sign up</button>

            </div>
            <div className='title col-4 mx-auto'>
                ACTVN
            </div>
            <div className='welcome col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group mx-auto'>
                    <label>Email</label>
                    <input
                        type='email'
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div className='form-group mx-auto'>
                    <label>Password</label>
                    <input
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <span>Forgot password</span>
                <div className='btn-login'>
                    <button onClick={() => handleLogin()}>Login</button>

                </div>
                <div className='text-content'>
                    <span className="back" onClick={()=>{navigate('/')}}>Go to Home Page</span>

                </div>
            </div>
           


        </div>
    )
}
export default Login