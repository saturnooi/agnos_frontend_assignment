import React, { useRef } from 'react';
import default_abs from '../img/abs/default-abs.png';
import Voronoi from "../components/Voronoi";
import AbsHighLight from "../components/AbsHighLight";
import epigastrium_active from '../img/abs/epigastrium-active.png';
import llq_active from '../img/abs/llq-active.png';
import luq_active from '../img/abs/luq-active.png';
import rlq_active from '../img/abs/rlq-active.png';
import ruq_active from '../img/abs/ruq-active.png';
import suprapubic_active from '../img/abs/suprapubic-active.png';
import umbilicus_active from '../img/abs/umbilicus-active.png';
import { useDimensions } from '../hooks/useDimensions';
import { data } from "../data/AbsData";
import { useAbdominalSelection } from '../hooks/useAbdominalSelection';
import ActiveImage from '../components/Abdominal/ActiveImage';
import OtherButton from '../components/Abdominal/OtherButton';

export default function AbdominalAreaPage() {
    const divRef = useRef(null);
    const dimension = useDimensions(divRef);
    const {
        selectedArea,
        isAllSelected,
        isCleared,
        handleSelectedArea,
        clearSelectedArea
    } = useAbdominalSelection();

    const images = [
        { index: 1, imgSrc: epigastrium_active, position: { right: "51%", top: "12%" } },
        { index: 6, imgSrc: llq_active, position: { left: "56%", top: "70%" } },
        { index: 2, imgSrc: luq_active, position: { left: "56%", top: "30%" } },
        { index: 4, imgSrc: rlq_active, position: { right: "58%", top: "70%" } },
        { index: 0, imgSrc: ruq_active, position: { right: "58%", top: "35%" } },
        { index: 5, imgSrc: suprapubic_active, position: { right: "50%", top: "87%" } },
        { index: 3, imgSrc: umbilicus_active, position: { right: "50%", top: "27%" } },
    ];

    const renderActiveImage = (index, imgSrc, position) => {
        const isActive = selectedArea.includes(index) && !isAllSelected;
        return (
            <ActiveImage
                imgSrc={imgSrc}
                position={position}
                isActive={isActive}
            />
        );
    };

    return (
        <div className="flex-col">
            <div className="grid items-center justify-items-center text-[#585858] text-xl mb-4 mt-4 sm:text-xl mb-4 mt-4 md:text-2xl mb-12 mt-12 lg:text-3xl mb-16 mt-16">
                Which part of your abs hurt the most? {dimension.width} {dimension.height}
            </div>
            <div
                className="relative grid justify-items-center max-h-96 min-h-[var(--dim-h)] min-w-[var(--dim-w)] mb-8 sm:mb-8 md:mb-10 lg:mb-12"
                style={{
                    '--dim-h': `${dimension.height}px`,
                    '--dim-w': `${dimension.width}px`,
                }}
            >

                {images.map(({ index, imgSrc, position }) =>
                    renderActiveImage(index, imgSrc, position)
                )}

                <img
                    src={default_abs}
                    alt="abs"
                    className="absolute w-[360px] sm:w-[390px] md:w-[420px] lg:w-[450px] h-[373px] sm:h-[405px] md:h-[436px] lg:h-[467px]"
                    ref={divRef}
                />

                <img
                    src={default_abs}
                    alt="abs"
                    className="absolute w-[360px] sm:w-[390px] md:w-[420px] lg:w-[450px] h-[373px] sm:h-[405px] md:h-[436px] lg:h-[467px]"
                    ref={divRef}
                />
                
                <div className="absolute z-40">
                    <AbsHighLight data={data} width={dimension.width} height={dimension.height} SelectedArea={selectedArea} />
                </div>
                <div className="absolute z-50">
                    <Voronoi
                        data={data}
                        width={dimension.width}
                        height={dimension.height}
                        OnSelectedArea={handleSelectedArea}
                        area="abs"
                        ClearAllSelectedArea={isCleared}
                    />
                </div>
            </div>
            <OtherButton isAllSelected={isAllSelected} clearSelectedArea={clearSelectedArea} />
        </div>
    );
}
