
import { useEffect, useState } from 'react';
import { Customerdata, Login, Register, UpdateData } from './Pages';
import { Footer, Navbar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import whatsapp from './assets/whatsapp.png';
import phone from './assets/phone.png';
import { MainPage } from './MainPage/MainPage';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

export function App() {
    const [backToTop, setBackToTop] = useState(false);
    const [looged, setLooged] = useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {                
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        }, 1000)
        return () => clearInterval(intervalId);
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <Navbar looged={looged} setLogged={setLooged}/>
            <Router>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
                <Routes>
                    <Route path='/customer-detail' element={<Customerdata />} />
                </Routes>
                <Routes>
                    <Route path='/login' element={<Login looged={looged} setLogged={setLooged}/>} />
                </Routes>
                <Routes>
                    <Route path='/signup' element={<Register />} />
                </Routes>
                <Routes>
                    <Route path='/update/:id' element={<UpdateData />} />
                </Routes>
            </Router>
            <Footer />
            {backToTop && 
                (
                    <button 
                        className='backtotop'
                        onClick={() => scrollUp()}
                    > 
                        <i className="fa-solid fa-arrow-up"></i>
                    </button>
                )
            }
            <div className='contact-icons'>
                <a href="https://wa.me/9381011411?text=Hello%2C%20Srivari%20developers" target="_blank" className='whatsapp-link' rel="noreferrer">
                    <img src={whatsapp} className='whatsapp' alt="whatsapp" />
                </a>
                <a href="tel:+919381011411" className='phone-link'>
                    <img src={phone} className='phone' alt="phone" />
                </a>
            </div>
        </>
    );
}

export default App;
