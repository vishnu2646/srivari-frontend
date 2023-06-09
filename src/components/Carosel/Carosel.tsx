import { CaroselItem } from "./CaroselItem";
import { useState } from "react";

interface Item {
    images: string;
    title: string;
}

type Props = {
    items: Item[]
}

export const Carosel = (props: Props) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex: number) => {
        if(newIndex < 0) {
            newIndex = 0
        } else if(newIndex >= props.items.length) {
            newIndex = props.items.length - 1;
        }

        setActiveIndex(newIndex);
    }

    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translate(-${activeIndex * 100}%)`}}>
                {props.items.map((item, index) => {
                    return (
                        <CaroselItem key={index} item={item.images}/>
                    )
                })}
                
            </div>
            <div className="indecator-outer">
                {props.items.map((item, index) => {
                    return (
                        <div 
                            className={`indecator ${index === activeIndex && 'active'}`} 
                            key={index} 
                            onClick={() => { 
                                updateIndex(index);
                            }}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    );
};
