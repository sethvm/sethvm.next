import styleFooter from './Footer.module.css'

const Footer = () => {
    
    return (
        <footer
        id='footer'
        className={`${styleFooter.container} animate__animated animate__fadeIn`}>
            <div className={styleFooter.text}>
                © 2021 Seth Morenos
            </div>
        </footer>
    );
}

export default Footer
