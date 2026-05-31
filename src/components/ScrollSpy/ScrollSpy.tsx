// ScrollSpy — sticky case-study section navigation.
// Discovers headings marked via <Heading anchor=...> (data-scrollspy + id), labels each item
// with the heading's navLabel override or its text, and highlights the section in view.
// Mounted by Wrapper in the rail cell on case-study pages; hidden < 992px.
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styleScrollSpy from './ScrollSpy.module.scss';

interface SpyItem {
    id: string;
    label: string;
}

const NAV_OFFSET = 248; // viewport-top offset where a section becomes "active" (below the 64px navbar)

const ScrollSpy = () => {
    const { pathname } = useRouter();
    const [items, setItems] = useState<SpyItem[]>([]);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const headings = Array.from(
            document.querySelectorAll<HTMLElement>('[data-scrollspy]')
        ).filter((el) => el.id);

        // label = the heading's navLabel override (data-scrollspy value) when set, else its text
        setItems(
            headings.map((el) => ({
                id: el.id,
                label: el.dataset.scrollspy?.trim() || el.textContent?.trim() || '',
            }))
        );
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
