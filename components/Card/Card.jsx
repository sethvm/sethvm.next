// card component for project previews on homepage
import Link from 'next/link'
import styleCard from './Card.module.css'

const RenderCard = ({
    heading,
    description,
    url,
    link,
    img,
    alt,
    children
}) => {
    
    return (
        <div className={styleCard.container}>
            <div className={styleCard.text}>
                <h2 className={styleCard.title}>{heading}</h2>
                {children}
                <p>
                    <br />
                    {description}
                    <br />
                </p>
                <Link href={url}>
                    <span className='activeLink'>
                        <span className='heavy'>{link}</span>
                    </span>
                </Link>
            </div>
            <Link href={url}>
                <img
                className={styleCard.image}
                src={img}
                alt={alt} />
            </Link>
        </div>
    );
}

export default RenderCard
