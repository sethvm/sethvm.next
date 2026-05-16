// container for header-paragraph segments
import styleSection from './Section.module.scss';

interface Props {
    ends?: boolean;
    gap?: boolean;
    children: React.ReactNode;
}

const Section = ({ ends, gap, children }: Props) => {
    // adjusts bottom margin
    const isSectionEnd = ends ? styleSection.endMargins : styleSection.defaultMargins;
    const gapClass = gap ? styleSection.gap : '';

    return (
        <div className={`${styleSection.container} ${isSectionEnd} ${gapClass}`.trimEnd()}>
            {children}
        </div>
    );
};

export default Section;
