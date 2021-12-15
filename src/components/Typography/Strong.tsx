// strong text styling
// use to emphasize words or phrases
// use <bold> for visual-specific purposes
interface Props {
    children: Element
}

export default function Strong({ children }: Props) {

    return(
        <strong>
            {children}
        </strong>
    );
}
