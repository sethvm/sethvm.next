import styleHeading from './Heading.module.scss';

type HeadingRank = 1 | 2 | 3 | 4 | 5;

interface Props {
    type: HeadingRank;
    className?: string;
    anchor?: string; // when set: marks a ScrollSpy section + scroll target (renders id + data-scrollspy)
    navLabel?: string; // optional ScrollSpy label override; falls back to the heading text. Requires `anchor`.
    children: React.ReactNode;
}

const Heading = ({ type, className, anchor, navLabel, children }: Props) => {
    const Tag = `h${type}` as const;
    const classes = [className, anchor && styleHeading.anchored].filter(Boolean).join(' ');
    // data-scrollspy carries the optional label for the rail; empty string keeps the marker
    // (so ScrollSpy falls back to the heading text). Omitted entirely when there's no anchor.
    return (
        <Tag
            id={anchor}
            data-scrollspy={anchor ? (navLabel ?? '') : undefined}
            className={classes || undefined}
        >
            {children}
        </Tag>
    );
};

export default Heading;
