// title subheading
interface Props {
    children: Element
}

export default function SubHeading({ children }: Props) {

    return (
        <span className='heavy' style={{ color: '#7C6900' }}>
            {children}
        </span>
    );
}
