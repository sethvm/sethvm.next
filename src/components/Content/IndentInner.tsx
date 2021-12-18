// Container for highlighting text inside sections
// place within the same tier as paragraphs
import styleIndentInner from './IndentInner.module.scss'

interface Props {
    noBar?: boolean,
    children: React.ReactNode
}

const IndentInner = ({ 
    noBar,
    children
}: Props) => {

    // styles border based on 'nobar' prop
    const borderStyle = noBar
    ? styleIndentInner.borderless
    : styleIndentInner.bordered;
    
    return (
        <div className={`${styleIndentInner.container} ${borderStyle}`}>
            {children}
        </div>
    );
}

export default IndentInner
