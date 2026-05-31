// Results — reusable row of impact-metric callouts for case-study heroes.
// Takes an array of { value, label } pairs and maps them to compact stat callouts.
// Replaces the deprecated Hero.module.scss inline markup; reuse across case studies.
import styleResults from './Results.module.scss';

export interface Result {
    value: string; // e.g. "34%"
    label: string; // e.g. "more subscription purchases"
}

interface Props {
    results: Result[];
}

const Results = ({ results }: Props) => (
    <div className={styleResults.callouts}>
        {results.map(({ value, label }) => (
            <div key={`${value} ${label}`}>
                <span className={styleResults.value}>{value}</span>
                <span className={styleResults.label}>{label}</span>
            </div>
        ))}
    </div>
);

export default Results;
