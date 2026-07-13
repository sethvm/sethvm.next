import Link from 'next/link';
import styleCard from './Card.module.scss';

interface Props {
    heading: string;
    description: string;
    url: string;
    link: string;
    img: string;
    eager?: boolean; // first card loads eagerly (above the fold); the rest lazy-load
    children: React.ReactNode;
}

const Card = ({ heading, description, url, link, img, eager, children }: Props) => (
    <article className={styleCard.container}>
        <Link href={url} className={styleCard.plateLink} tabIndex={-1} aria-hidden='true'>
            <img
                className={styleCard.plate}
                src={img}
                alt=''
                loading={eager ? 'eager' : 'lazy'}
                decoding='async'
            />
        </Link>
        <div className={styleCard.text}>
            <div className={styleCard.company}>{children}</div>
            <h3 className={styleCard.title}>{heading}</h3>
            <p className={styleCard.description}>{description}</p>
            <Link
                href={url}
                className={`${styleCard.link} activeLink`}
                aria-label={`${heading}: ${link}`}
            >
                <span className='heavy'>{link}</span>
            </Link>
        </div>
    </article>
);

export default Card;
