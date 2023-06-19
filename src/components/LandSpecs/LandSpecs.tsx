import Bus from '../../assets/bus.png';
import Gate from '../../assets/gate.png';
import Park from '../../assets/park.png';
import Jog from '../../assets/jog.png';
import Gym from '../../assets/gym.png';
import Yoga from '../../assets/yoga.png';
import Light from '../../assets/light.png';
import Party from '../../assets/party.png';
import Net from '../../assets/net.png';
import BasketBall from '../../assets/basket-ball.png';

export const LandSpecs = () => {
    return (
        <>
            <div className="backdrop desktop">
                <div className="column column1">
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        PROJECT HIGHLIGHTS
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Bus} alt='bus' width="50px" />
                        4 Km from Hosur Bus Stand
                        <br/>
                        <br/>
                        Entry Arch
                    </div>
                </div>
                <div className="column column2">
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Gate} alt='bus' width="80px" />
                        10 Acres Gated Community
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Park} alt='bus' width="80px" />
                        Children's play area
                        <br />
                        <br />
                        <img src={Jog} alt='bus' width="80px" />
                        Walking and Jogging Track
                    </div>
                </div>
                <div className="column column3">
                    <div className="element" style={{ fontSize: "28px" }} data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Gym} alt='bus' width="100px" />
                        GYM
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        Strom water Trench
                        <br />
                        <br />
                        <img src={Yoga} alt='bus' width="80px" />
                        YOGA and Meditation Court
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Light} alt='bus' width="80px" />
                        LED Street lights
                    </div>
                </div>
                <div className="column column4">
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={BasketBall} alt='bus' width="80px" />
                        Basket ball court
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        Senior citizen Plaza
                        <br />
                        <br />
                        <img src={Net} alt='bus' width="50px" />
                        Cricket Practice net
                    </div>
                    <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                        <img src={Party} alt='bus' width="80px" />
                        Party Lawn
                    </div>
                </div>
            </div>
            <div className='backdrop mobile'>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Bus} alt='bus' width="50px" />
                    4 Km from Hosur Bus Stand
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    Entry Arch
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Gate} alt='bus' width="80px" />
                    10 Acres Gated Community
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Park} alt='bus' width="80px" />
                    Children's play area
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Jog} alt='bus' width="80px" />
                    Walking and Jogging Track
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000" style={{ fontSize: "28px" }}>
                    <img src={Gym} alt='bus' width="100px" />
                    GYM
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    Strom water Trench
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Yoga} alt='bus' width="80px" />
                    YOGA and Meditation Court
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Light} alt='bus' width="80px" />
                    LED Street lights
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={BasketBall} alt='bus' width="80px" />
                    Basket ball court
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    Senior citizen Plaza
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Net} alt='bus' width="50px" />
                    Cricket Practice net
                </div>
                <div className="element" data-aos="zoom-out" data-aos-duration="3000">
                    <img src={Party} alt='bus' width="80px" />
                    Party Lawn
                </div>
            </div>
        </>
    );
};
