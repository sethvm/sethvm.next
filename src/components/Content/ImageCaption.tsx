// image description text
// place directly below Img components
import styleImgCaption from './ImageCaption.module.scss';

interface Props {
    children: React.ReactNode;
}

const ImgCaption = ({ children }: Props) => (
    <div className={styleImgCaption.caption}>
        <p>
            <span className='italic'>{children}</span>
        </p>
    </div>
);

export default ImgCaption;
