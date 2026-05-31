// Results — reusable row of impact-metric callouts for case-study heroes.
// Takes an array of { value, label } pairs and maps them to compact stat callouts.
import styleResults from './Results.module.scss';

export interface Result {
    value: string; // a metric ("34%") or a qualitative statement
    label?: string; // supporting text — omitted for qualitative results
    qualitative?: boolean; // true → render `value` as a statement, not a big number
}

interface Props {
    results: Result[];
}

const Results = ({ results }: Props) => (
    <div className={styleResults.callouts}>
        {results.map(({ value, label, qualitative }) => (
            <div key={`${value} ${label ?? ''}`}>
                <span className={qualitative ? styleResults.statement : styleResults.value}>
                    {value}
                </span>
                {label && <span className={styleResults.label}>{label}</span>}
            </div>
        ))}
    </div>
);

export default Results;
