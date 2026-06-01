import styleSection from './Section.module.scss';

interface Props {
    ends?: boolean;
    gap?: boolean;
    children: React.ReactNode;
}

const Section = ({ ends, gap, children }: Props) => {
    const isSectionEnd = ends ? styleSection.endMargins : styleSection.defaultMargins;

    const classes = [styleSection.container, isSectionEnd, gap && styleSection.gap]
        .filter(Boolean)
        .join(' ');

    return <div className={classes}>{children}</div>;
};

export default Section;
