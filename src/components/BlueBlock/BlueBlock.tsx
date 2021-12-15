import { useRouter } from 'next/router'
import styleBlueBlock from './BlueBlock.module.css'

const BlueBlock = () => {

    // checks if user is on home page and styles accordingly
    const styleBlock = (useRouter().pathname === '/')
    ? 'animate__fadeInLeft'
    : `${styleBlueBlock.thin} animate__fadeInDown`;

    return (
        <div className={`${styleBlueBlock.block} ${styleBlock} animate__animated`} />
    );
}

export default BlueBlock
