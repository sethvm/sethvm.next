// place directly below Image components
import styleImgCaption from './ImageCaption.module.scss';

interface Props {
    children: React.ReactNode;
}

const ImgCaption = ({ children }: Props) => (
    <div className={styleImgCaption.caption}>
        <p>
            <span>{children}</span>
        </p>
    </div>
);

export default ImgCaption;
