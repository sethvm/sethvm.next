// project banner
import styleBanner from './Banner.module.css'

interface Props {
    img: string,
    alt: string
}

const Banner = ({
    img,
    alt
}: Props) => {
    
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
