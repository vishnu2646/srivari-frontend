type Props = {
    item: string;
};

export const CaroselItem = (props: Props) => {
    return (
        <div className="carousel-item">
            <img src={props.item} alt="carosule" className="carosule-img" />
        </div>
    );
};

