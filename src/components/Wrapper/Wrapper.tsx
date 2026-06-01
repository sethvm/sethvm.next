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

    // About: full-width canvas (no centered spine) so the offset content column and the
    // right-edge BlueBlock stripe reproduce the deployed layout. See About.module.scss.
    if (pathname === '/about') {
        return (
            <main className={`${styleWrapper.container} ${styleWrapper.aboutPage}`}>
                {children}
            </main>
        );
    }

    // 404: centered container, no rail.
    if (pathname === '/404') {
        return <main className={styleWrapper.container}>{children}</main>;
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
