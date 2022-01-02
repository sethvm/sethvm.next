// title subheading
import styleSubHeading from './SubHeading.module.scss';

interface Props {
    children: React.ReactNode;
}

const SubHeading = ({ children }: Props) => (
    <span className={`${styleSubHeading.text} heavy`}>{children}</span>
);

export default SubHeading;
