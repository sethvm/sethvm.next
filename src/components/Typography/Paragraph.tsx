// paragraph - use to section text content together
interface Props {
    children: React.ReactNode;
}

const Paragraph = ({ children }: Props) => <p>{children}</p>;

export default Paragraph;
