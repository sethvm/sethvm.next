import { useRouter } from 'next/router'
import styleBlueBlock from './BlueBlock.module.css'

const BlueBlock = () => {

    // checks if user is on home page and styles accordingly
    const styleBlock = (useRouter().pathname === '/')
    ? undefined
    : styleBlueBlock.thin;

    return (
        <div className={`${styleBlueBlock.block} ${styleBlock}`} />
    );
}

export default BlueBlock
