import React, { useEffect, useState } from "react";
import axios from "axios";

interface IHomePoints {
    icon: string,
    description: string
}

export const Points = () => {
    const [data, setData] = useState<IHomePoints[]>([]);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/home-points/`).then((response) => {
            if(response.data) {
                setData(response.data);
            }
        }).catch((err) => {
            setError(err);
        });
    }, []);

    if(error) {
        return (
            <p>Something Went Worng. Please contact Adminsitator.</p>
        )
    }
    

    return (
        <div className="home-points">
            {
                data.map((d, index) => {
                    return (
                        <div key={index}>
                            <span className="home-points-icon">
                                <img src={d.icon} alt="badge" />
                            </span>
                            <span className="home-points-description">{d.description}</span>
                        </div>
                    )
                })
            }
        </div>
    );
};
