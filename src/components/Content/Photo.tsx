// uncontained photo component
// horizontal margins line up with text content
import stylePhoto from './Photo.module.scss';

interface Props {
    src: string;
    alt: string;
}

const Photo = ({ src, alt }: Props) => <img className={stylePhoto.photo} src={src} alt={alt} />;

export default Photo;
