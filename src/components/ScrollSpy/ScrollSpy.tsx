// ScrollSpy — sticky case-study section navigation (Finding #6 wayfinding).
// Discovers headings marked via <Heading anchor=...> (data-scrollspy + id),
// builds a nav from their text, and highlights the section currently in view.
// Mounted by Wrapper in the rail cell on case-study pages; hidden < 992px.
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styleScrollSpy from './ScrollSpy.module.scss';

interface SpyItem {
    id: string;
    label: string;
}

const NAV_OFFSET = 248; // px below the fixed 64px navbar where a section becomes "active"

const ScrollSpy = () => {
    const { pathname } = useRouter();
    const [items, setItems] = useState<SpyItem[]>([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const headings = Array.from(
            document.querySelectorAll<HTMLElement>('[data-scrollspy]')
        ).filter((el) => el.id);

        setItems(headings.map((el) => ({ id: el.id, label: el.textContent?.trim() ?? '' })));
        if (headings.length === 0) return;

        // Active = the last anchored heading whose top has crossed the activation line.
        const computeActive = () => {
            let current = headings[0].id;
            for (const el of headings) {
                if (el.getBoundingClientRect().top - NAV_OFFSET <= 1) current = el.id;
                else break;
            }
            setActiveId(current);
        };

        const observer = new IntersectionObserver(computeActive, {
            rootMargin: `-${NAV_OFFSET}px 0px 0px 0px`,
            threshold: [0, 1],
        });
        headings.forEach((el) => observer.observe(el));
        computeActive();

        return () => observer.disconnect();
    }, [pathname]);

    if (items.length === 0) return null;

    const handleClick = (event: React.MouseEvent, id: string) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={styleScrollSpy.nav} aria-label='Sections'>
            <ul className={styleScrollSpy.list}>
                {items.map(({ id, label }) => {
                    const isActive = id === activeId;
                    return (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                onClick={(event) => handleClick(event, id)}
                                className={`${styleScrollSpy.link} ${isActive ? styleScrollSpy.active : ''}`}
                                aria-current={isActive ? 'true' : undefined}
                            >
                                {label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default ScrollSpy;
