import styleFooter from './Footer.module.scss'

const Footer = () => {
    return (
        <footer
        id='footer'
        className={styleFooter.container}>
            <div className={styleFooter.text}>
                © 2022 Seth Morenos
            </div>
        </footer>
    );
}

export default Footer
