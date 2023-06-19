/* eslint-disable no-useless-concat */
type Props = {
    item: string;
};

export const CaroselItem = (props: Props) => {
    return (
        <div className="carousel-item">
            <img src={`${process.env.REACT_APP_BASE_URL_FOR_IMAGES}`+`${props.item}`} alt="carosule" className="carosule-img" />
        </div>
    );
};

