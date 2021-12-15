// image description text
// place directly below Img components
import styleImgCaption from './ImageCaption.module.css'

const ImgCaption = ({ children }) => {
    
    return (
        <div className={styleImgCaption.caption}>
            <p>
                <span className='italic'>{children}</span>
            </p>
        </div>
    );
}

export default ImgCaption
