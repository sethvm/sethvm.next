// projects and quicklink labels
import InteracCard from '../images/interac/interac-card.svg';
import LoblawCard from '../images/loblaw/loblaw-card.svg';
import SoulfxCard from '../images/soulfx/soulfx-card.svg';

export const projects = [
    {
        title: 'Ops Pick History',
        company: 'Loblaw Digital',
        description: "Crafting a streamlined order validation experience for Canada's largest grocery retailer",
        img: LoblawCard,
        alt: 'Loblaw OPS Pick History',
        cardLink: 'View case study →',
        quickLinkLabel: 'Loblaw',
        url: '/ops-pick-history'
    },
    {
        title: 'Proximity Transfer',
        company: 'Interac Corp',
        description: "Introducing a new contactless transaction channel within Canada’s leading debit payment platform",
        img: InteracCard,
        alt: 'Interac Proximity Transfer',
        cardLink: 'View ongoing project →',
        quickLinkLabel: 'Interac',
        url: '/proximity-transfer'
    },
    {
        title: 'Patient Support App',
        company: 'Soulfx Technologies Inc',
        description: "Facilitating the remote operation of a client's patient support service",
        img: SoulfxCard,
        alt: 'Soulfx Patient Support App',
        cardLink: 'View case study →',
        quickLinkLabel: 'Soulfx',
        url: '/patient-support-app'
    }
]
