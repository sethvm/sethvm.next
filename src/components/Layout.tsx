// todo: analytics and scroll scripts

import NavBar from '../components/NavBar/NavBar'
import Wrapper from '../components/Wrapper/Wrapper'
import QuickLinks from '../components/QuickLinks/QuickLinks'
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer/Footer'
import BlueBlock from '../components/BlueBlock/BlueBlock'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {

    return (
        <>
        <NavBar />
        <Wrapper>
            {children}
        </Wrapper>
        <QuickLinks />
        <SideBar />
        <Footer />
        <BlueBlock />
        </>
    );
}

export default Layout
