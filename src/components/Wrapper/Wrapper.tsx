//content wrapper
import { useRouter } from 'next/router';
import styleWrapper from './Wrapper.module.css'

interface Props {
    children: React.ReactNode
}

const Wrapper = ({ children }: Props) => {

    // checks if user is on home page
    const onHomePage = (useRouter().pathname === '/');

    return (
        <main className={onHomePage ? undefined : styleWrapper.container}>
            {children}
        </main> 
    );
}

export default Wrapper
