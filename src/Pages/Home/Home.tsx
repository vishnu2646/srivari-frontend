import Percentage from '../../assets/percentage.png';
import Recycle from '../../assets/recycle.png';
import Badge from '../../assets/badge.png';
// import viedo from '../../assets/viedo.mp4';
import HomeLogo from '../../assets/logo.png';
import { LandSpecs } from '../../components';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { validations } from '../../utils/utils';
import axios from 'axios';

export const Home = () => {
    const [registrationData,setRegistrarionData] = useState({
        name:'',
        phone:'',
        email:'',
        password:'',
        password2:'',
    });
    const navigate = useNavigate();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (e:any) => {
        setRegistrarionData({...registrationData,[e.target.name]:e.target.value})
    }
    
    const navigateToLogin = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        navigate('/login');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const habdleSubmit = async (e: any) => {
        e.preventDefault();
        const res = validations(registrationData);
        if(res) {
            toast.error("Form is invalid or Please fill all the fields");
        } else {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/user/register/`, {
                email: registrationData.email,
                name: registrationData.name,
                password: registrationData.password,
                password2: registrationData.password2,
                phone: registrationData.phone,
            });
            const data = await response.data.msg;
            if(!data) {
                toast.error("Registration failed");
            } else {
                toast.success(data);
                navigateToLogin();
            }
            setRegistrarionData({
                email: '',
                name: '',
                password: '',
                password2: '',
                phone: ''
            });
        }
        
    }

  return (
    <div className="home-page-container" id="home">
        <ToastContainer />
        <div className="banner">
            <div className="video">
                {/* <video autoPlay loop muted playsInline className='back-viedo'>
                    <source src={viedo} type="video/mp4" />
                </video> */}
            </div>
            <div className='home'>
                <div className='triangle'>
                </div>
                <div className='square'>
                    <form>
                        <p>Registration</p> 
                        <input type="text" name="name" value={registrationData.name} placeholder='Name' onChange={handleChange}/>
                        <input type="text" name="phone" value={registrationData.phone} placeholder='Mobile number' onChange={handleChange}/>
                        <input type="email" name="email" value={registrationData.email} placeholder='Email' onChange={handleChange}/>
                        <input type="password" name="password" value={registrationData.password} placeholder='Enter Password' onChange={handleChange}/>
                        <input type="password" name="password2" value={registrationData.password2} placeholder='Confirm Password' onChange={handleChange}/>
                        <button type="submit" onClick={(e) => habdleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div className="home-page-content">
            <div className="home-page-title">
                <div className="home-page-border-left"></div>
                <div>
                    <p>House is the starting place of the hope, joy and love!!!</p>
                    <span className="home-page-description">Yes! Lets build our dream home at</span>
                </div>
                <div className="home-page-border-right"></div>
            </div>
            <button className="home-banner-button">survana subikshaa homes</button>
            <div className="home-points">
                <div>
                    <span className="home-points-icon">
                        <img src={Percentage} alt="percentage" />
                    </span>
                    <span className="home-points-description">Special discount</span>
                </div>
                <div>
                    <span className="home-points-icon">
                        <img src={Badge} alt="badge" />
                    </span>
                    <span className="home-points-description">Assistance from approval to grahapravesam</span>
                </div>
                <div>
                    <span className="home-points-icon">
                        <img src={Recycle} alt="recycle" />
                    </span>
                    <span className="home-points-description">Earn by referal</span>
                </div>
            </div>
        </div>
        <div className="land-spec-container">
            <LandSpecs />
        </div>
    </div>
  );
};
