// variant of Section.js for nesting inside other containers
import styleSectionInner from './SectionInner.module.scss';

interface Props {
    children: React.ReactNode;
}

const SectionInner = ({ children }: Props) => (
    <div className={styleSectionInner.container}>{children}</div>
);

export default SectionInner;
