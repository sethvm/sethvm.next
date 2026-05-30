// Stat — headline impact metric (Finding #3).
// Renders a large primary-color value with a supporting label.
// Place where IndentInner metric headings were previously used.
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
