import default_finger_other_highlight from '../../img/finger/others-highlight.png';
import default_finger_other from '../../img/finger/default-finger-other.png';

const OtherButton = ({ isAllSelected, handleOtherClick }) => (
    <div className="grid items-center justify-items-center" onClick={isAllSelected ? handleOtherClick : null}>
        <img 
            className="w-[427px] sm:w-[477px] md:w-[527px] lg:w-[577px]" 
            src={isAllSelected ? default_finger_other_highlight : default_finger_other} 
            alt="finger" 
        />
    </div>
);

export default OtherButton;