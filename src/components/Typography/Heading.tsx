import styleHeading from './Heading.module.scss';

type HeadingRank = 1 | 2 | 3 | 4 | 5;

interface Props {
    type: HeadingRank;
    className?: string;
    anchor?: string; // when set: marks a ScrollSpy section + scroll target (renders id + data-scrollspy)
    children: React.ReactNode;
}

const Heading = ({ type, className, anchor, children }: Props) => {
    const Tag = `h${type}` as const;
    const classes = [className, anchor && styleHeading.anchored].filter(Boolean).join(' ');
    return (
        <Tag id={anchor} data-scrollspy={anchor ? '' : undefined} className={classes || undefined}>
            {children}
        </Tag>
    );
};

export default Heading;
