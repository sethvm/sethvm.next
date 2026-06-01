import { useRouter } from 'next/router';
import styleBlueBlock from './BlueBlock.module.scss';

// Home shows the wide block; About pulls it to the right edge as a stripe; case studies
// hide it (the centered content grid would collide with a visible block).
const BlueBlock = () => {
    const { pathname } = useRouter();

    const variant =
        pathname === '/'
            ? undefined
            : pathname === '/about'
              ? styleBlueBlock.stripe
              : styleBlueBlock.thin;

    return <div className={[styleBlueBlock.block, variant].filter(Boolean).join(' ')} />;
};

export default BlueBlock;
