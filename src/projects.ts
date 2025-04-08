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
        title: 'Mobile Paywall',
        company: 'Invoice Simple',
        description: 'Generated 18% lift in purchase conversion rate',
        img: '/is/is_card.svg',
        alt: 'Invoice Simple Mobile Paywall',
        cardLink: 'View project →',
        quickLinkLabel: 'Paywall',
        url: '/is-mobile-paywall',
    },
    {
        title: 'Checkout Portal',
        company: 'Intuit QuickBooks',
        description: 'Enhanced scalability and discoverability for online invoice checkouts',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit QuickBooks Checkout Portal',
        cardLink: 'View project →',
        quickLinkLabel: 'Checkout',
        url: '/qb-checkout-portal',
    },
    {
        title: 'Ops Pick History',
        company: 'Loblaw Digital',
        description: 'Streamlined order validation experience for 13 grocery store chains',
        img: '/loblaw/loblaw-card.svg',
        alt: 'Loblaw OPS Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'History',
        url: '/ops-pick-history',
    },
    /*
    {
        title: 'Patient Support App',
        company: 'Soulfx Technologies Inc',
        description: "Facilitated remote operation of patient support service during COVID-19 pandemic",
        img: '/soulfx/soulfx-card.svg',
        alt: 'Soulfx Patient Support App',
        cardLink: 'View case study →',
        url: '/patient-support-app',
    },*/
];

export default projects;
