type Props = {
    item: string;
};

export const HomeCaroselItem = (props: Props) => {
    return (
        <div className="carousel-item">
            <img src={props.item} alt="carosule" className="carosule-img" style={{ height: "430px" }}/>
        </div>
    );
};

