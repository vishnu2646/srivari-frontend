import { useState } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const [registerState, setRegisterState] = useState({
        email:"",
        name:"",
        phone:"",
        password:"",
        password2:"",
    });

    const [registerError, setRegisterError] = useState();

    const navigate = useNavigate();
   
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e:any) =>{
        setRegisterState({...registerState,[e.target.name]:e.target.value})
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e:any) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASE_URL}/user/register/`,{
            email:registerState.email,
            name: registerState.name,
            phone: registerState.phone,
            password: registerState.password,
            password2: registerState.password2
        }).then(async res => {
            if (res.data.token.access && res.data.token.refresh) {
                localStorage.setItem("ACCESS_TOKEN",res.data.token.access)
                localStorage.setItem("REFRESH_TOKEN",res.data.token.refresh)
                navigate('/login');
            }
        }).catch((err) => {
            if(err){
                setRegisterError(err.response.data.errors);
            }
        })
    }

    return (
        <div>
            <div className="Login-wrapper">
                <h1>register PAGE</h1>
                <form autoComplete="off">
                    <div className="form-group">
                        <label htmlFor="email">Email</label><br />
                        <input 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Enter Email"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="name">Name</label><br />
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Enter Name"
                            onChange={e => handleChange(e)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone</label><br />
                        <input 
                            type="text" 
                            name="phone" 
                            id="phone" 
                            placeholder="Enter Phone"
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
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password</label><br />
                        <input
                            type="password" 
                            name="password2" 
                            id="password2" 
                            placeholder="Enter confirm Password"
                            onChange={e => handleChange(e)}
                        />
                    </div>
                    <a href="/login" className="signup">Already have an account</a>
                    {registerError ? <span className="alert-danger">{registerError}</span> : ''}
                    <br />
                    <button onClick={handleSubmit} className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    );
};
