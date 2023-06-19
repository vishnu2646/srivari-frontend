import { useEffect, useState } from 'react';
import location from '../../assets/location.png';
import axios from 'axios';

interface IBlock {
    title: string,
    points: string
}

interface IContent {
    content: string,
    quote: string
}

export const About = () => {
    const [blockData, setBlockData] = useState<IBlock[]>([]);
    const [contentData, setContentData] = useState<IContent[]>([]);
    const [blockError, setBlockError] = useState()
    const [contentError, setContentError] = useState()

    const getBlockData = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/about-block/`).then((response) => {
            if(response.data) {
                setBlockData(response.data);
            }
        }).catch((err) => {
            setBlockError(err);
        });
    }

    const getContentData = () => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/about-content/`).then((response) => {
            if(response.data) {
                setContentData(response.data);
            }
        }).catch((err) => {
            setContentError(err);
        });
    }

    useEffect(() => {
        getBlockData();
        getContentData();
    }, []);

    if(blockError || contentError) {
        return (
            <p>Something Went Worng. Please contact Adminsitator.</p>
        )
    }
    

    return (
        <div className="about-page-container" id='about'>
            <h1><span>A</span>bout us</h1>

            <div className="about-page-content">
                <div className="about-page-flex-content">
                    <div className="about-page-left-content">
                        <div className="blocks">
                            <div className="row1">
                                <div className="block2"></div>
                            </div>
                            {
                                blockData.map((data, index) => {
                                    return (
                                        <div className="row3" key={index}>
                                            <div className="block6">{data.title}</div>
                                            <div className="block7">{data.points}</div>
                                            <div className="block8"></div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row5">
                                <div className="block2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-page-right-content">
                        <div className="map">
                            <iframe
                                title="map"
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=srivari%20suvarna%20subikshaa%20Homes,%20Hosur+(srivari%20suvarna%20subikshaa%20Homes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            >
                                <a href="https://www.maps.ie/distance-area-calculator.html">
                                    measure area map
                                </a>
                            </iframe>
                            <div className="address">
                                <img src={location} alt="location" />
                                <p>QV75+36 Srivari Suvarna Subikshaa Homes, Marasandiram, Tamil Nadu 635109</p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    contentData.map((d ,index) => {
                        return (
                            <div className="about-content" key={index}>
                                <div dangerouslySetInnerHTML={{ __html: d.content }}></div>
                                <div dangerouslySetInnerHTML={{ __html: d.quote }}></div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};
