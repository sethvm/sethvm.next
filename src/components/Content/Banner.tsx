// project banner
import Image from 'next/image'
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
            <Image
            className={styleBanner.image}
            src={img}
            alt={alt}
            width={1920}
            height={1080}
            layout='responsive'
            priority />
        </div>
    );
}

export default Banner
