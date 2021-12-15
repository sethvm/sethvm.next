//list component
import styleList from './List.module.css'

const List = ({
    numbered,
    noBullets,
    ends,
    children
}) => {

    // prop-based styling
    const isNumbered = numbered;

    const noBullet = noBullets
    ? styleList.noBullets
    : styleList.defaultListStyle;

    // adjusts bottom margin
    const isAtSectionEnd = ends
    ? styleList.spacedBottomMargin
    : styleList.defaultMargin;

    if (isNumbered) {
        return (
            <ol className={`${isAtSectionEnd} ${noBullet}`}>
                {children}
            </ol>
        );
    } else {
        return (
            <ul className={`${isAtSectionEnd} ${noBullet}`}>
                {children}
            </ul>
        ); 
    }
}

export default List
