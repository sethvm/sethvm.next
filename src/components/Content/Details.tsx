// Details — label/value metadata blocks for case-study intros (Role, Platform, Client…).
// Stacks on mobile; flips to an inline row at the md breakpoint, mirroring Results.
// Rendered as a <dl> so each pair carries proper label/value semantics.
import styleDetails from './Details.module.scss';

export interface Detail {
    label: string; // field name, e.g. "Role", "Platform"
    value: React.ReactNode; // field value; ReactNode preserves inline markup (e.g. <abbr>)
}

interface Props {
    details: Detail[];
}

const Details = ({ details }: Props) => (
    <dl className={styleDetails.details}>
        {details.map(({ label, value }) => (
            <div key={label} className={styleDetails.item}>
                <dt className={styleDetails.label}>{label}</dt>
                <dd className={styleDetails.value}>{value}</dd>
            </div>
        ))}
    </dl>
);

export default Details;
