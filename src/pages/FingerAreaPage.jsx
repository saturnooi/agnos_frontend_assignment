import React, { useRef } from 'react';
import default_finger from '../img/finger/default-finger.png';
import Voronoi from "../components/Voronoi";
import FingerHighLight from "../components/FingerHighLight";
import dip_active from "../img/finger/dip-active.png";
import pip_active from "../img/finger/pip-active.png";
import mcp_active from "../img/finger/mcp-active.png";
import { useDimensions } from '../hooks/useDimensions';
import { data } from "../data/FingerData";
import { useFingerSelection } from '../hooks/useFingerSelection';
import ActiveImage from '../components/Finger/ActiveImage';
import OtherButton from '../components/Finger/OtherButton';

export default function FingerAreaPage() {
    const divRef = useRef(null);
    const dimension = useDimensions(divRef);
    const {
        selectedArea,
        isAllSelected,
        isCleared,
        handleSelectedArea,
        clearSelectedArea
    } = useFingerSelection();

    const activeImagesData = [
        { areaIndex: 0, activeImage: dip_active, left: "53%", top: "-10%" },
        { areaIndex: 4, activeImage: pip_active, left: "54%", top: "7%" },
        { areaIndex: 9, activeImage: mcp_active, left: "54%", top: "23%" },
    ];
    return (
        <div className="flex-col">
            <div className="grid items-center justify-items-center text-[#585858] text-center text-xl mb-4 mt-4 sm:text-xl md:text-2xl lg:text-3xl">
                Which part of your fingers hurt the most?
            </div>
            <div
                className="relative grid justify-items-center max-h-96 min-h-[var(--dim-h)] min-w-[var(--dim-w)] mb-8 sm:mb-8 md:mb-10 lg:mb-12"
                style={{
                    '--dim-h': `${dimension.height}px`,
                    '--dim-w': `${dimension.width}px`,
                }}
            >
                {activeImagesData.map(({ areaIndex, activeImage, left, top }) => (
                    <ActiveImage
                        key={areaIndex}
                        areaIndex={areaIndex}
                        activeImage={activeImage}
                        left={left}
                        top={top}
                        isActive={selectedArea.includes(areaIndex) && !isAllSelected}
                    />
                ))}
                <img
                    src={default_finger}
                    alt="finger"
                    className="absolute w-[240px] sm:w-[270px] md:w-[300px] lg:w-[330px] h-[345px] sm:h-[388px] md:h-[430px] lg:h-[475px]"
                    ref={divRef}
                />
                <div className="absolute z-40">
                    <FingerHighLight data={data} width={dimension.width} height={dimension.height} SelectedArea={selectedArea} />
                </div>
                <div className="absolute z-50">
                    <Voronoi data={data} width={dimension.width} height={dimension.height} OnSelectedArea={handleSelectedArea} area="finger" ClearAllSelectedArea={isCleared} />
                </div>
            </div>
            <OtherButton isAllSelected={isAllSelected} handleOtherClick={clearSelectedArea} />
        </div>
    );
}
