import { useEffect, useState } from 'react';
import arraw from '../../assets/upcoming.png';
import axios from 'axios';

interface Endorement {
    title: string,
    image: string
}

export const Endoresments = () => {
    const [endoresment, setEndoresment] = useState<Endorement[]>([]);

    const fetchEndoresment = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/user/endoresment-list/`)
        const data = await response.data
        setEndoresment(data);
    }

    useEffect(() =>{
        fetchEndoresment()
    },[]);

    return (
        <div className="endoresment-page-container" id='future-endevors'>
            <h1><span>F</span>uture Endeveours</h1>
            <div className="endoresment-page-content">
                {endoresment.map((item, id) => {
                    return (
                        <div className="endoresment-card" key={id}>
                            <div 
                                className="endoresment-image" 
                                style={{ 
                                    backgroundImage: `url(${item.image})`, 
                                    height: "250px", 
                                    width: '250px', 
                                    backgroundSize: "contain", 
                                    backgroundRepeat: "no-repeat" 
                                }}
                            >
                                <div className="comming-soon">
                                    <img src={arraw} alt='arrow' width="20px"/>
                                    Comming Soon
                                </div>
                            </div>
                            <p className="title">{item.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

