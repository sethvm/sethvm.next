// variant of Section.js for nesting inside other containers
import styleSectionInner from './SectionInner.module.css'

const SectionInner = ({ children }) => {
    
    return (
        <div className={styleSectionInner.container}>
            {children}
        </div>
    );
}

export default SectionInner
