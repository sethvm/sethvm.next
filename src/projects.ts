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
        title: 'QuickBooks Payment Portal',
        company: 'Intuit',
        description: 'Reconstructing online invoice checkouts for payors',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit QuickBooks Payment Portal',
        cardLink: 'View project →',
        quickLinkLabel: 'Intuit',
        url: '/qb-payment-portal',
    },
    {
        title: 'Ops Pick History',
        company: 'Loblaw Digital',
        description:
            "Crafting a streamlined order validation experience for Canada's largest grocery retailer",
        img: '/loblaw/loblaw-card.svg',
        alt: 'Loblaw OPS Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'Loblaw',
        url: '/ops-pick-history',
    },
    {
        title: 'Patient Support App',
        company: 'Soulfx Technologies Inc',
        description: "Facilitating the remote operation of a client's patient support service",
        img: '/soulfx/soulfx-card.svg',
        alt: 'Soulfx Patient Support App',
        cardLink: 'View case study →',
        quickLinkLabel: 'Soulfx',
        url: '/patient-support-app',
    },
];

export default projects;
