// content wrapper
import { useRouter } from 'next/router';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import styleWrapper from './Wrapper.module.scss';

interface Props {
    children: React.ReactNode;
}

// Pages that are NOT case studies get no ScrollSpy rail.
const NON_CASE_STUDY = ['/', '/about', '/404'];

const Wrapper = ({ children }: Props) => {
    const { pathname } = useRouter();

    // Home: full-bleed, no container (unchanged).
    if (pathname === '/') {
        return <main>{children}</main>;
    }

    // About / 404: centered container, no rail (unchanged).
    if (NON_CASE_STUDY.includes(pathname)) {
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
