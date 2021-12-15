// paragraph - use to section text content together
interface Props {
    children: Element
}

export default function Paragraph({ children }: Props) {
    
    return(
        <p>
            {children}
        </p>
    );
}
