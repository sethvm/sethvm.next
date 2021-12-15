// project banner
import styleBanner from './Banner.module.css'

const Banner = ({ img, alt }) => {
    
    return (
        <div className={styleBanner.container}>
            <img
            className={styleBanner.image}
            src={img}
            alt={alt} />
        </div>
    );
}

export default Banner
