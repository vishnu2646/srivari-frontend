import { CaroselItem } from "./CaroselItem";
import { useState } from "react";

interface Item {
    image: string;
    id: number
}

type Props = {
    items: Item[]
}

export const Carosel = (props: Props) => {
    const [slide, setSlide] = useState(0);
    const [active, setActive] = useState(0);

    const handleSlide = (index: number) => {
        if(index === 1 || index === 2) {
           setSlide(slide - 100);
        } else {
            setSlide(0);
        }
    }
    

    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translateX(${slide}%)`}}>
                {props.items.map((item, index) => {
                    return (
                        <CaroselItem key={index} item={item.image}/>
                    )
                })}
                
            </div>
            <div className="indecator-outer">
                {props.items.map((item, index) => {
                    return (
                        <div 
                            className={`indecator ${active === item.id && 'active'}`} 
                            key={index} 
                            onClick={() => { 
                                handleSlide(index);
                                setActive(index);
                            }}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
