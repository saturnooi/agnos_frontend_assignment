import { useState, useEffect } from 'react';

export const useAbdominalSelection = () => {
    const [selectedArea, setSelectedArea] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isCleared, setIsCleared] = useState(false);

    useEffect(() => {
        setIsAllSelected(selectedArea.length === 7);
        setIsCleared(selectedArea.length === 0);
    }, [selectedArea]);

    const handleSelectedArea = (e) => {
        setSelectedArea(e);
    };

    const clearSelectedArea = () => {
        setSelectedArea([]);
    };

    return {
        selectedArea,
        isAllSelected,
        isCleared,
        handleSelectedArea,
        clearSelectedArea
    };
};
