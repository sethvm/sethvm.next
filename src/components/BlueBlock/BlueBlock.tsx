import { useRouter } from 'next/router';
import styleBlueBlock from './BlueBlock.module.scss';

const BlueBlock = () => {
    const { pathname } = useRouter();

    // Home no longer shows a navy field (Direction A redesign). About keeps the right-edge
    // stripe; case studies keep the hidden `.thin` variant (the centered grid would collide).
    if (pathname === '/') return null;

    const variant = pathname === '/about' ? styleBlueBlock.stripe : styleBlueBlock.thin;

    return <div className={[styleBlueBlock.block, variant].filter(Boolean).join(' ')} />;
};

export default BlueBlock;
