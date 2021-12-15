// flexbox container for displaying an image(s)
import styleImgFluid from './ImageFluid.module.css'

interface Props {
    children: Element
}

const ImgFluid = ({ children }: Props) => {
    
    return (
        <div className={styleImgFluid.container}>
            {children}
        </div>
    );
}

export default ImgFluid
