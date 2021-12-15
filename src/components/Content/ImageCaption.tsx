// image description text
// place directly below Img components
import styleImgCaption from './ImageCaption.module.css'

interface Props {
    children: Element
}

const ImgCaption = ({ children }: Props) => {
    
    return (
        <div className={styleImgCaption.caption}>
            <p>
                <span className='italic'>{children}</span>
            </p>
        </div>
    );
}

export default ImgCaption