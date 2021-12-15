// title subheading
interface Props {
    children: React.ReactNode
}

export default function SubHeading({ children }: Props) {

    return (
        <span className='heavy' style={{ color: '#7C6900' }}>
            {children}
        </span>
    );
}
