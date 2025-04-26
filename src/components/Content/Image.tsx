// image component
import styleImg from './Image.module.scss';

interface Props {
    end?: boolean;
    item?: boolean;
    screen?: boolean;
    animation?: boolean;
    src: string;
    alt: string;
}

const Image = ({ end, item, screen, animation, src, alt }: Props) => {
    // adjusts margins
    const marginSpacing = end ? styleImg.endMargins : styleImg.defaultMargins;

    // prop-based styling
    const screenStyle = screen ? styleImg.screen : undefined;
    const itemStyle = item ? styleImg.item : undefined;
    const animationStyle = animation ? styleImg.animation : undefined;

    return (
        <img
            className={`${styleImg.image} ${marginSpacing} ${screenStyle} ${itemStyle} ${animationStyle}`}
            src={src}
            alt={alt}
        />
    );
};

export default Image;
