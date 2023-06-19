import axios from 'axios';
import Logo1 from '../../assets/logo.png';
import { useState, useEffect } from 'react';

export const Navbar = ({looged, setLogged}) => {
    const [active, setActive] = useState('');
    const [width, setWidth] = useState(0);
    const [isAdminUser, setIsAdminUser] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(false);

    const LinkArr = [
        {
            title: 'Home',
            link: '#home',
        },
        {
            title: 'About Us',
            link: '#about',
        },
        {
            title: 'Residential plots',
            link: '#residential-plots',
        },
        {
            title: 'Future Endevors',
            link: '#future-endevors',
        },
        {
            title: 'Contact us',
            link: '#contact-us',
        }
    ];

    const checkUserIsAdmin = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/user/is-admin-user/`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        }).then(response => {
            if(response.data.admin) {
                const data = response.data.admin;
                setIsAdminUser(data);
            }
        }).catch(error => {
            setIsAdminUser(false);
        });
    }

    const isUserLoggedIn = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/user/is-user-logged-in/`, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
        }).then((response) => {
            if (response.data) {
                const data = response.data.LoggedIn;
                setIsUserLogged(data);
            }
        }).catch((error) => {
            setIsUserLogged(false);
        });
    }

    const logoutUser = () => {
        localStorage.clear();
    }

    useEffect(() => {
        checkUserIsAdmin();
        isUserLoggedIn();
    },[looged])  

    useEffect(() => {
        setActive(LinkArr[0].link);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <nav className="navbar">
            <div className="logo-1">
                <a href='/'><img src={Logo1} alt='logo'/></a>
            </div>
            <div className="nav-links">
                {LinkArr.map((link, i) => {
                    return(
                        <li 
                            key={i}
                            onClick={() => setActive(link.title)}
                            className={`${active === link.title && 'active'}`}
                        >
                            {/* <Link to={link.link} spy={true} smooth={true} offset={-10} duration={500} className={`${active === link.title ? 'active' : ''}`}>{link.title}</Link> */}
                            <a href={`${link.link}`} rel="noopener noreferrer external" className={`${active === link.title && 'active'}`}>{link.title}</a>
                        </li>
                    )
                })}
                {isAdminUser && (<li 
                    onClick={() => setActive("Customer Data")}
                    className={`${active === "Customer Data" && 'active'}`}
                >
                    <a href="/customer-detail" className={`${active === "Customer Data" && 'active'}`}>Customer Details</a>
                </li>)}
                {isUserLogged && (<li 
                    onClick={() => {
                        setActive("Logout");
                        logoutUser();
                    }}
                    className={`${active === "Logout" && 'active'}`}
                >
                    <a href='/login' className={`${active === "Logout" && 'active'}`}>Logout</a>
                </li>)}
                {!isUserLogged && (<li 
                    onClick={() => {
                        setActive("Logout");
                        logoutUser();
                    }}
                    className={`${active === "Login" && 'active'}`}
                >
                    <a href='/login' className={`${active === "Login" && 'active'}`}>Login</a>
                </li>)}
            </div>
            <div className="logo-2">
                {width !== 0 ? <i className="fa-solid fa-xmark" onClick={() => setWidth(0)}></i> : <i className="fa-solid fa-bars" onClick={() => setWidth(250)}></i> }
            </div>
            <div className='sidenav' style={{ width: width }}>
                <div className="nav-links">
                    {LinkArr.map((link, i) => {
                        return(
                            <li 
                                key={i}
                                onClick={() => {
                                    setActive(link.title);
                                    setWidth(0);
                                }}
                                className={`${active === link.title && 'active'}`}
                            >
                                <a href={link.link} className={`${active === link.title && 'active'}`}>{link.title}</a>
                            </li>
                        )
                    })}
                    {isAdminUser && (<li 
                        onClick={() => setActive("Customer Data")}
                        className={`${active === "Customer Data" && 'active'}`}
                    >
                        <a href="/customer-detail" className={`${active === "Customer Data" && 'active'}`}>Customer Details</a>
                    </li>)}
                    {isUserLogged && (<li 
                        onClick={() => {
                            setActive("Logout");
                            logoutUser();
                        }}
                        className={`${active === "Logout" && 'active'}`}
                    >
                        <a href="/" className={`${active === "Logout" && 'active'}`}>Logout</a>
                    </li>)}
                    {!isUserLogged && (<li 
                        onClick={() => {
                            setActive("Logout");
                            logoutUser();
                        }}
                        className={`${active === "Login" && 'active'}`}
                    >
                        <a href='/login' className={`${active === "Login" && 'active'}`}>Login</a>
                    </li>)}
                </div>
            </div>
        </nav>
    );
};
