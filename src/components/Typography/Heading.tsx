type HeadingRank = 1 | 2 | 3 | 4 | 5;

interface Props {
    type: HeadingRank;
    className?: string;
    children: React.ReactNode;
}

const Heading = ({ type, className, children }: Props) => {
    const Tag = `h${type}` as const;
    return <Tag className={className}>{children}</Tag>;
};

export default Heading;
