/* eslint-disable jsx-a11y/iframe-has-title */
import location from '../../assets/location.png';

export const About = () => {
    return (
        <div className="about-page-container" id='about'>
            <h1><span>A</span>bout us</h1>

            <div className="about-page-content">
                <div className="about-page-flex-content">
                    <div className="about-page-left-content">
                        <div className="blocks">
                            <div className="row1">
                                <div className="block1"></div>
                                <div className="block2"></div>
                            </div>
                            <div className="row2">
                                <div className="block3"></div>
                                <div className="block4">20+</div>
                                <div className="block5">Projects</div>
                            </div>
                            <div className="row3">
                                <div className="block6">Experience</div>
                                <div className="block7">20+</div>
                                <div className="block8"></div>
                            </div>
                            <div className="row4">
                                <div className="block3"></div>
                                <div className="block4">16+</div>
                                <div className="block5">Tie ups</div>
                            </div>
                            <div className="row5">
                                <div className="block1"></div>
                                <div className="block2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="about-page-right-content">
                        <div className="map">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=srivari%20suvarna%20subikshaa%20Homes,%20Hosur+(srivari%20suvarna%20subikshaa%20Homes)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
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
                <div className="about-content">
                    <p><b>Srivari Deveopers</b> have been in industry from 20+ years. Our principals have deep roots in real estate ownership that span more than Eight Decades and understand the value of property ownership. We have solved many challenging and complex transactions to the satisfaction of the clients. We believe in a strict Code of Ethics. We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</p>
                    <p>WE BELIEVE WE CAN ACCOMPLISH YOUR DREAM WITH COMMITMENT, RESOURCES AND PASSION AND GET THE JOB DONE."</p>
                </div>
            </div>
        </div>
    );
};
