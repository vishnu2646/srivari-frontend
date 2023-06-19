import React, { useEffect, useState } from "react";
import axios from "axios";

interface IHomeQuote {
    quote: string,
    btnTitle: string
}

export const Quote = () => {
    const [data, setData] = useState<IHomeQuote[]>([]);
    const [error, setError] = useState();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/home/`).then((response) => {
            if(response.data) {
                setData(response.data);
            }
        }).catch((err) => {
            setError(err);
        });
    }, []);

    if(error) {
        return (
            <p>Something Went Wrong Please Contact Administrator</p>
        )
    }    

    return (
        <>
            {
                data.map((d, index) => {
                    return (
                        <div key={index} >
                            <div className="home-page-title" >
                                <div className="home-page-border-left"></div>
                                <div dangerouslySetInnerHTML={{ __html: d.quote }}></div>
                                <div className="home-page-border-right"></div>
                            </div>
                            <button className="home-banner-button">{d.btnTitle}</button>
                        </div>
                    )
                })
            }
        </>
    );
};
