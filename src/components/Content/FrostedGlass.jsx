// frosted glass container
// use to highlight key results and findings
import styleFrostedGlass from './FrostedGlass.module.css'

const FrostedGlass = ({ ends, children }) => {

    // adjusts bottom margin based on 'end' prop
    const isSectionEnd = ends
    ? styleFrostedGlass.endMargins
    : styleFrostedGlass.defaultMargins;

    return (
        <div className={`${styleFrostedGlass.container} ${isSectionEnd}`}>
            {children}
        </div>
    );
}

export default FrostedGlass
