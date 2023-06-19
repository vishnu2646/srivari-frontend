import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

export const Login = ({looged, setLogged}) => {

    const [loginState, setLoginState] = useState({
        email:"",
        password:""
    });

    const [loginError, setLoginError] = useState<undefined|string>();

    const navigate = useNavigate();
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e:any) =>{
        setLoginState({...loginState,[e.target.name]:e.target.value})
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e:any) => {
        e.preventDefault();
        
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/login`,{
            email:loginState.email,
            password: loginState.password
        }).then(async res => {
            if (res.data.token.access && res.data.token.refresh) {
                localStorage.setItem("ACCESS_TOKEN",res.data.token.access)
                localStorage.setItem("REFRESH_TOKEN",res.data.token.refresh)
                setLogged(!looged);
                navigate('/');
            }
        }).catch((err) => {
            if(err){   
                setLoginError("error");
            }
        })
    }

    return (
        <div>
            <div className="Login-wrapper">
                <h1>LOGIN PAGE</h1>
                <form autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="login">Email</label><br />
                        <input 
                            type="text" name="email" 
                            id="email" 
                            placeholder="Enter Email"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label><br />
                        <input
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Enter Password"
                            onChange={e => handleChange(e)}
                            style={{
                                fontFamily: 'caption',
                                fontSize: '16px'
                            }}
                        />
                    </div>
                    <a href="/signup" className="signup">create a new account</a>
                    {loginError ? <span className="alert-danger">{loginError}</span> : ''}
                    <br />
                    <button onClick={handleSubmit} className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
