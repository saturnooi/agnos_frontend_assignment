import default_abs_other from '../../img/abs/default-abs-other.png';
import default_abs_other_highlight from '../../img/abs/all-over-highlight.png';

const OtherButton = ({ isAllSelected, clearSelectedArea }) => {
    const imgSrc = isAllSelected ? default_abs_other_highlight : default_abs_other;
    return (
        <div className="grid items-center justify-items-center" onClick={clearSelectedArea}>
            <img className="w-[146px] sm:w-[206px] md:w-[246px] lg:w-[266px]" src={imgSrc} alt="finger" />
        </div>
    );
};

export default OtherButton;