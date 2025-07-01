import './Banner.scss';

function Banner({ imgBanner, imgText }) {
    return (
        <div className="home-banner">
            <img
                src={imgBanner}
                alt="paysage montagneux"
                className="home-banner-image"
            />
            <h1 className="home-banner-title">{imgText}</h1>
        </div>
    );
}

export default Banner;
