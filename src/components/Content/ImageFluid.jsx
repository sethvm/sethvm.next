// flexbox container for displaying an image(s)
import styleImgFluid from './ImageFluid.module.css'

const ImgFluid = ({ children }) => {
    
    return (
        <div className={styleImgFluid.container}>
            {children}
        </div>
    );
}

export default ImgFluid
