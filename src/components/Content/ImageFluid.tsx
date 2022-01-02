// flexbox container for displaying an image(s)
import styleImgFluid from './ImageFluid.module.scss';

interface Props {
    children: React.ReactNode;
}

const ImgFluid = ({ children }: Props) => <div className={styleImgFluid.container}>{children}</div>;

export default ImgFluid;
