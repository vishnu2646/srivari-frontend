import { useEffect, useState } from "react";
import carosel1 from '../../assets/plot-1.jpg';
import SitePlan from '../../assets/siteplan.png';
import { Carosel } from "../../components";
import axios from "axios";

interface VillaCarosel {
    images: string;
    title: string;
}

export const Plots = () => {
    const [plots, setPlots] = useState('plots');
    const [plotActive, setPlotActive] = useState(true);
    const [villlaData, setVilllaData] = useState<VillaCarosel[]>([]);
    const [villaActive, setVillaActive] = useState(false);
    const [villaError, setVillaError] = useState(false);

    const openModal = () => {
        const modal = document.getElementById("myModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
        const img = document.getElementById("myImg");
        const modalImg = document.getElementById("img01") as HTMLImageElement;
        if(img ) {
            img.onclick = function(){
                if(modal && modalImg) {
                    modal.style.display = "block";
                    modalImg.src = SitePlan;
                }
            }
        }
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/user/villa-carosel`).then((response) => {
            if(response.data) {
                setVilllaData(response.data);
            }
        }).catch((err) => {
            setVillaError(err)
        })
    },[]);

    if(villaError) {
        return <p>Something Went Wrong. Please Contact Administrator...</p>
    }

    const closeModal = () => {
        const modal = document.getElementById("myModal") as HTMLElement;
        modal.style.display = "none";
    }

    const renderTemplate = () => {
        return (
            <div className="plots-content-container" id="residential-plots">
                { plots === 'plots' ? 
                    (
                        <div className={`${plots}-container`}>
                            <div className={`${plots}-left-content`}>
                                <img src={carosel1} alt={carosel1} />
                                <div className={`${plots}-size`}>
                                    <p>Plot Size : <span>768 - 3179</span> sqft</p>
                                </div>
                            </div>
                            <div className={`${plots}-right-content`} onClick={() => openModal()}>
                                <img src={SitePlan} alt="siteplan" id="myImg" />
                                <div className={`${plots}-price`}>
                                    <p>Price : Starting from <span>19L</span></p>
                                </div>
                            </div>
                            <div id="myModal" className="modal">
                                <span className="close" onClick={() => closeModal()}>&times;</span>
                                <img className="modal-content" id="img01" alt={SitePlan} />
                            </div>
                        </div>
                    ) : 
                    (
                        <div className={`${plots}-container`}>
                            <Carosel items={villlaData}/>
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
