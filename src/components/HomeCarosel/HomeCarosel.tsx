import { HomeCaroselItem } from "./HomeCaroselItem";
import { useState } from "react";

interface Item {
    id: string;
    img: string;
    imgname: string
}

type Props = {
    items: Item[]
}

export const HomeCarosel = (props: Props) => {
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
                        <HomeCaroselItem key={index} item={item.img}/>
                    )
                })}
                
            </div>
            <div className="indecator-outer">
                <p className="control-left" onClick={()=> updateIndex(activeIndex - 1)}>{'<'}</p>
                {props.items.map((item, index) => {
                    return (
                        <div
                            className={`indecator ${index === activeIndex && 'active'}`} 
                            key={index} 
                            onClick={() => { 
                                updateIndex(index)
                            }}
                        >
                        </div>
                    )
                })}
                <p className="control-right" onClick={()=> updateIndex(activeIndex + 1)}>{'>'}</p>
            </div>
        </div>
    );
};
