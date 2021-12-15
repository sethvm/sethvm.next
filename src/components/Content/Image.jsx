// image component
import styleImg from './Image.module.css'

const Image = ({
    end,
    item,
    screen,
    src,
    alt
}) => {

    // adjusts margins
    const marginSpacing = end
    ? styleImg.endMargins
    : styleImg.defaultMargins;

    // prop-based styling
    const screenStyle = screen
    ? styleImg.screen
    : undefined;

    const itemStyle = item
    ? styleImg.item
    : undefined;

    return (
        <img
        className={`${styleImg.image} ${marginSpacing} ${screenStyle} ${itemStyle}`}
        src={src}
        alt={alt} />
    );
}

export default Image
