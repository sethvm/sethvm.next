// container for header-paragraph segments
import styleSection from './Section.module.css'

const Section = ({ ends, children }) => {

    // adjusts bottom margin
    const isSectionEnd = ends
    ? styleSection.endMargins
    : styleSection.defaultMargins;
    
    return (
        <div className={`${styleSection.container} ${isSectionEnd} animate__animated animate__fadeIn`}>
            {children}
        </div>
    );
}

export default Section
