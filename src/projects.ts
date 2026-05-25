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
        title: 'Free Trial',
        company: 'Invoice Simple',
        description:
            'Reimagined activation journey that grew subscription purchases by 32% and document creations by 27%',
        img: '/is/free-trial/is-free-trial_card.png',
        alt: 'Invoice Simple Free Trial',
        cardLink: 'View case study →',
        quickLinkLabel: 'Trial',
        url: '/free-trial',
    },
    {
        title: 'Paywall Redesign',
        company: 'Invoice Simple',
        description:
            'Generated 18% lift in purchase conversion by improving visual layout and messaging clarity',
        img: '/is/paywall/is_paywall_card.png',
        alt: 'Invoice Simple Paywall Redesign',
        cardLink: 'View case study →',
        quickLinkLabel: 'Paywall',
        url: '/paywall-redesign',
    },
    {
        title: 'Pick History',
        company: 'Loblaw Digital',
        description:
            "Streamlined order validation experience for Canada's largest grocery retailer",
        img: '/loblaw/loblaw-card.png',
        alt: 'Loblaw Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'History',
        url: '/pick-history',
    },
    {
        title: 'Payment Portal',
        company: 'Intuit QuickBooks',
        description:
            'Enhanced scalability of a customer-facing checkout that processes over $300 million daily',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit QuickBooks Payment Portal',
        cardLink: 'View project →',
        url: '/payment-portal',
    },
    /*
    {
        title: 'Patient Support App',
        company: 'Soulfx Technologies',
        description: 'Enabled virtual-first healthcare delivery during COVID-19',
        img: '/soulfx/soulfx-card.svg',
        alt: 'Soulfx Patient Support App',
        cardLink: 'View case study →',
        url: '/patient-support-app',
    },*/
];

export default projects;
