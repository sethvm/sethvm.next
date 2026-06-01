import styleImgFluid from './ImageFluid.module.scss';

interface Props {
    children: React.ReactNode;
}

const ImgFluid = ({ children }: Props) => <div className={styleImgFluid.container}>{children}</div>;

export default ImgFluid;
