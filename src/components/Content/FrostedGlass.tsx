// frosted glass container
// use to highlight key results and findings
import styleFrostedGlass from './FrostedGlass.module.scss';

interface Props {
    ends?: boolean;
    children: React.ReactNode;
}

const FrostedGlass = ({ ends, children }: Props) => {
    // adjusts bottom margin based on 'end' prop
    const isSectionEnd = ends ? styleFrostedGlass.endMargins : styleFrostedGlass.defaultMargins;

    return <div className={`${styleFrostedGlass.container} ${isSectionEnd}`}>{children}</div>;
};

export default FrostedGlass;
