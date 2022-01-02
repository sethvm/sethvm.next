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
            <p>
                <br />
                {description}
                <br />
            </p>
            <Link href={url} passHref>
                <a className={`${styleCard.link} activeLink`}>
                    <span className='heavy'>{link}</span>
                </a>
            </Link>
        </div>
        <Link href={url} passHref>
            <a>
                <img className={styleCard.image} src={img} alt={alt} />
            </a>
        </Link>
    </div>
);

export default Card;
