// card component for project previews on homepage
import Link from 'next/link'
import styleCard from './Card.module.css'

const Card = ({
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
                <Link
                href={url}
                passHref>
                    <a className='activeLink'>
                        <span className='heavy'>{link}</span>
                    </a>
                </Link>
            </div>
            <Link
            href={url}
            passHref>
                <a>
                    <img
                    className={styleCard.image}
                    src={img}
                    alt={alt} />
                </a>
            </Link>
        </div>
    );
}

export default Card
