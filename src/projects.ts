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
        title: 'QuickBooks CP Portal',
        company: 'Intuit',
        description: 'Frictionless invoice checkouts for payors',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit CP Portal',
        cardLink: 'View project →',
        quickLinkLabel: 'Intuit',
        url: '/qb-counterpart-portal',
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
    /*
        {
            title: 'Proximity Transfer',
            company: 'Interac Corp',
            description:
                "Introducing a new peer-to-peer transaction channel within Canada's leading debit payment platform",
            img: '/interac/interac-card.svg',
            alt: 'Interac Proximity Transfer',
            cardLink: 'View project →',
            quickLinkLabel: 'Interac',
            url: '/proximity-transfer',
        },
    */
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
