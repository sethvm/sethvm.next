import { useRouter } from 'next/router';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import styleWrapper from './Wrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
    const { pathname } = useRouter();

    // Home: full-bleed, no container.
    if (pathname === '/') {
        return <main>{children}</main>;
    }

    // About: frame canvas so the offset content column resolves against the centred band.
    // See About.module.scss.
    if (pathname === '/about') {
        return (
            <main className={`${styleWrapper.container} ${styleWrapper.frameCanvas}`}>
                {children}
            </main>
        );
    }

    // 404: frame-band canvas so its content can share the homepage greeting inset.
    if (pathname === '/404') {
        return (
            <main className={`${styleWrapper.container} ${styleWrapper.frameCanvas}`}>
                {children}
            </main>
        );
    }

    // Case study: rail (ScrollSpy) + content. Grid kicks in at >=992 via CSS.
    return (
        <main className={`${styleWrapper.container} ${styleWrapper.withRail}`}>
            <div className={styleWrapper.rail}>
                <ScrollSpy />
            </div>
            <div className={styleWrapper.content}>{children}</div>
        </main>
    );
};

export default Wrapper;
