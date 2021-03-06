//list component
import styleList from './List.module.scss';

interface Props {
    numbered?: boolean;
    noBullets?: boolean;
    ends?: boolean;
    children: React.ReactNode;
}

const List = ({ numbered, noBullets, ends, children }: Props) => {
    // prop-based styling
    const isNumbered = numbered;

    const noBullet = noBullets ? styleList.noBullets : styleList.defaultListStyle;

    // adjust bottom margin
    const isAtSectionEnd = ends ? styleList.spacedBottomMargin : styleList.defaultMargin;

    if (isNumbered) {
        return <ol className={`${isAtSectionEnd} ${noBullet}`}>{children}</ol>;
    } else {
        return <ul className={`${isAtSectionEnd} ${noBullet}`}>{children}</ul>;
    }
};

export default List;
