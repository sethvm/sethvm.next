import styleFooter from './Footer.module.css'

const Footer = () => {
    
    return (
        <footer
        id='footer'
        className={styleFooter.container}>
            <div className={styleFooter.text}>
                © 2021 Seth Morenos
            </div>
        </footer>
    );
}

export default Footer
