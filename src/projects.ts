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
            'Novel post-signup experience that grew subscription purchases by 32% and document creations by 27%',
        img: '/is/free-trial/is-free-trial_card.svg',
        alt: 'Invoice Simple Mobile Paywall',
        cardLink: 'View case study →',
        quickLinkLabel: 'Trial',
        url: '/is-free-trial',
    },
    {
        title: 'Paywall Redesign',
        company: 'Invoice Simple',
        description:
            'Generated 18% lift in purchase conversion by improving visual layout and messaging clarity',
        img: '/is/paywall/is_paywall_card.svg',
        alt: 'Invoice Simple Mobile Paywall',
        cardLink: 'View case study →',
        quickLinkLabel: 'Paywall',
        url: '/is-paywall-redesign',
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
    {
        title: 'Checkout Portal',
        company: 'Intuit',
        description:
            'Enhanced scalability of a QuickBooks checkout that processes over $300 million daily',
        img: '/intuit/intuit-card.svg',
        alt: 'Intuit QuickBooks Checkout Portal',
        cardLink: 'View project →',
        url: '/qb-checkout-portal',
    },
];

export default projects;
