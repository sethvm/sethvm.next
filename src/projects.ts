// projects and quicklink labels

interface Project {
    title: string;
    company?: string;
    description: string;
    img: string;
    alt: string;
    cardLink: string;
    quickLinkLabel?: string;
    url: string;
}

const projects: Project[] = [
    {
        title: 'Paywall Redesign',
        company: 'Invoice Simple',
        description: 'Generated 18% lift in subscription conversions',
        img: '/intuit/intuit-card.svg',
        alt: 'Invoice Simple Paywall Redesign',
        cardLink: 'View project →',
        quickLinkLabel: 'Paywall',
        url: '/is-paywall-redesign',
    },
    {
        title: 'Checkout Portal',
        company: 'Intuit QuickBooks',
        description:
            'Enhancing the discoverability of automation features for online invoice payments',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit QuickBooks Checkout Portal',
        cardLink: 'View project →',
        quickLinkLabel: 'Checkout',
        url: '/qb-checkout-portal',
    },
    {
        title: 'Ops Pick History',
        company: 'Loblaw Digital',
        description:
            "Crafting a streamlined order validation experience for Canada's largest grocery retailer",
        img: '/loblaw/loblaw-card.svg',
        alt: 'Loblaw OPS Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'History',
        url: '/ops-pick-history',
    },
];

export default projects;
