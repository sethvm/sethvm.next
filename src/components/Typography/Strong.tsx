// strong text styling
// use to emphasize words or phrases
// use <bold> for visual-specific purposes
interface Props {
    children: React.ReactNode;
}

const Strong = ({ children }: Props) => <strong>{children}</strong>;

export default Strong;
