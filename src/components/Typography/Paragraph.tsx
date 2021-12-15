// paragraph - use to section text content together
interface Props {
    children: React.ReactNode
}

export default function Paragraph({ children }: Props) {
    
    return(
        <p>
            {children}
        </p>
    );
}
