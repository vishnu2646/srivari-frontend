// import viedo from '../../assets/viedo.mp4';
import { HomeCarosel, LandSpecs, Points, Quote } from '../../components';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { validations } from '../../utils/utils';
import axios from 'axios';

interface ICarosel {
    id: string;
    img: string;
    imgname: string;
}

export const Home = () => {

    const [registrationData,setRegistrarionData] = useState({
        name:'',
        phone:'',
        email:'',
        password:'',
        password2:'',
    });
    const [carosel, setCarosel] = useState<ICarosel[] | []>([]);
    const [caroselError, setCaroselError] = useState();
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

    const caroselData = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/carosel/`).then(response => {
            if(response.data){
                setCarosel(response.data);
            }
        }).catch(err => {
            setCaroselError(err);
        });
    }

    useEffect(() => {
        caroselData();
    },[]);

    if(caroselError || !carosel){
        return (
            <p>Something Went Wrong, Please Contact Administrator.</p>
        )
    }

    return (
        <div className="home-page-container" id="home">
            <ToastContainer />
            <div className="banner">
                <div className="video">
                    <HomeCarosel items={carosel} />
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
                <Quote />
                <Points />
            </div>
            <div className="land-spec-container">
                <LandSpecs />
            </div>
        </div>
    );
};
