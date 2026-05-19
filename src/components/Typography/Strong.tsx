// strong text styling
// use to emphasize words or phrases
// use <bold> for visual-specific purposes
interface Props {
    className?: string;
    children: React.ReactNode;
}

const Strong = ({ className, children }: Props) => (
    <strong className={className}>{children}</strong>
);

export default Strong;
