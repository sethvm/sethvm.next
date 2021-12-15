// variant of Section.js for nesting inside other containers
import styleSectionInner from './SectionInner.module.css'

interface Props {
    children: React.ReactNode
}

const SectionInner = ({ children }: Props) => {
    
    return (
        <div className={styleSectionInner.container}>
            {children}
        </div>
    );
}

export default SectionInner
