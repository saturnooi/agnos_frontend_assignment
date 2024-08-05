const ActiveImage = ({activeImage, left, top, isActive }) => {
    if (isActive) {
        return (
            <img 
                src={activeImage} 
                alt="finger" 
                className="absolute left-[var(--caption-left)] top-[var(--caption-top)] w-[180px] sm:w-[180px] md:w-[230px] lg:w-[280px]"
                style={{
                    '--caption-left': left,
                    '--caption-top': top,
                }}
            />
        );
    }
    return null;
};

export default ActiveImage;