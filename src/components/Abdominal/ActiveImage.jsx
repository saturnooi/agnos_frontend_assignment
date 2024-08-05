const ActiveImage = ({ imgSrc, position, isActive }) => {
    if (isActive) {
        const style = {
            '--caption-left': position.left || 'auto',
            '--caption-right': position.right || 'auto',
            '--caption-top': position.top || 'auto',
        };

        return (
            <img
                src={imgSrc}
                alt="abs"
                className={`absolute z-50 ${position.left ? 'left-[var(--caption-left)]' : 'right-[var(--caption-right)]'} top-[var(--caption-top)] w-[160px] sm:w-[180px] md:w-[230px] lg:w-[280px]`}
                style={style}
            />
        );
    }
    return null;
};

export default ActiveImage;
