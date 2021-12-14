// dynamic heading component
const Heading = ({
    type,
    className,
    children
}) => {

    const HeadingType = [
        () => { return <h1 className={className}>{children}</h1> },
        () => { return <h2 className={className}>{children}</h2> },
        () => { return <h3 className={className}>{children}</h3> },
        () => { return <h4 className={className}>{children}</h4> },
        () => { return <h5 className={className}>{children}</h5> }
    ]

    const index = (type - 1);

    // default render if 'type' not provided
    if (!HeadingType[index]) {
        return HeadingType[0]();
    }

    // render header based on provided 'type' value
    return HeadingType[index]();
}

export default Heading
