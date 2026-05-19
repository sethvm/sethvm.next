// card component for project previews on homepage
import Link from 'next/link';
import styleCard from './Card.module.scss';

interface Props {
    heading: string;
    description: string;
    url: string;
    link: string;
    img: string;
    alt: string;
    children: React.ReactNode;
}

const Card = ({ heading, description, url, link, img, alt, children }: Props) => (
    <div className={styleCard.container}>
        <div className={styleCard.text}>
            <h2 className={styleCard.title}>{heading}</h2>
            {children}
            <p className={styleCard.description}>{description}</p>
            <Link href={url} className={`${styleCard.link} activeLink`}>
                <span className='heavy'>{link}</span>
            </Link>
        </div>
        <Link href={url}>
            <img className={styleCard.image} src={img} alt={alt} />
        </Link>
    </div>
);

export default Card;
