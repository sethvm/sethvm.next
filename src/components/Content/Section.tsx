// container for header-paragraph segments
import styleSection from './Section.module.scss'

interface Props {
    ends?: boolean,
    children: React.ReactNode
}

const Section = ({
    ends,
    children
}: Props) => {

    // adjusts bottom margin
    const isSectionEnd = ends
    ? styleSection.endMargins
    : styleSection.defaultMargins;
    
    return (
        <div className={`${styleSection.container} ${isSectionEnd}`}>
            {children}
        </div>
    );
}

export default Section
