// Stat — headline impact metric. Renders a large numeral value with a supporting label,
// set off by a gold accent rule.
import styleStat from './Stat.module.scss';

interface Props {
    value: string; // e.g. "34%"
    children: React.ReactNode; // supporting label, e.g. "more subscription purchases"
}

const Stat = ({ value, children }: Props) => (
    <div className={styleStat.container}>
        <span className={styleStat.value}>{value}</span>
        <span className={styleStat.label}>{children}</span>
    </div>
);

export default Stat;
