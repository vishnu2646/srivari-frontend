import { useState } from "react";
import Villa1 from '../../assets/villaouter.png';
import Villa2 from '../../assets/villaplan.png';
import carosel1 from '../../assets/plot-1.jpg';
import SitePlan from '../../assets/siteplan.png';
import { Carosel } from "../../components";

const pitems = [
    {
        image: carosel1,
        id: 0
    },
    {
        image: carosel1,
        id: 1
    },
    {
        image: carosel1,
        id: 2
    }
];

const vitems = [
    {
        image: Villa1,
        id: 0
    },
    {
        image: Villa2,
        id: 1
    }
];

export const Plots = () => {
    const [plots, setPlots] = useState('plots');
    const [plotActive, setPlotActive] = useState(true);
    const [villaActive, setVillaActive] = useState(false);

    const renderTemplate = () => {
        return (
            <div className="plots-content-container" id="residential-plots">
                { plots === 'plots' ? 
                    (
                        <div className={`${plots}-container`}>
                            <div className={`${plots}-left-content`}>
                                <Carosel items={pitems}/>
                                <div className={`${plots}-size`}>
                                    <p>Plot Size : <span>768 - 3179</span> sqft</p>
                                </div>
                            </div>
                            <div className={`${plots}-right-content`}>
                                <img src={SitePlan} alt="siteplan" />
                                <div className={`${plots}-price`}>
                                    <p>Price : Starting from <span>19L</span></p>
                                </div>
                            </div>
                        </div>
                    ) : 
                    (
                        <div className={`${plots}-container`}>
                            <Carosel items={vitems}/>
                            <div className={`${plots}-content`}>
                                <div>
                                    <div className={`${plots}-size`}>
                                        <p>Plot size: <span>1200</span> sqft</p>
                                    </div>
                                    <div className={`${plots}-area`}>
                                        <p>Build up area: <span>950</span> sqft</p>
                                    </div>
                                    <div className={`${plots}-price`}>
                                        <p>Price: Starting from <span>45L</span></p>
                                    </div>
                                </div>
                                <div className="spec">
                                    <div>General spec</div>
                                    <div>Plumbing</div>
                                    <div>Electricals</div>
                                    <div>Painting</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
    return (
        <div className="plots-page-container">
            <h1><span>R</span>esidential plots</h1>
            {renderTemplate()}
            <br />
            <br />
            <p className="options">
                <span 
                    className={`plot ${plotActive? 'active' :''}`}
                    onClick={() => {
                            setPlots('plots');
                            setPlotActive(!plotActive);
                            setVillaActive(false);
                        }
                    }
                >
                    Plots
                </span> 
                / 
                <span 
                    className={`villa ${villaActive? 'active' :''}`}
                    onClick={
                        () => {
                            setPlots('villa');
                            setPlotActive(false);
                            setVillaActive(!villaActive);
                        }
                    }
                >
                    Villa
                </span>
            </p>
        </div>
    );
};
