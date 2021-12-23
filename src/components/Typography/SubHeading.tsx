// title subheading
import styleSubHeading from './SubHeading.module.scss';

interface Props {
    children: React.ReactNode
}

export default function SubHeading({ children }: Props) {
    return (
        <span className={`${styleSubHeading.text} heavy`}>
            {children}
        </span>
    );
}
