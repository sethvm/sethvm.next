interface Props {
    className?: string;
    children: React.ReactNode;
}

const Paragraph = ({ className, children }: Props) => <p className={className}>{children}</p>;

export default Paragraph;
