import { useState, useEffect } from 'react';

export const useFingerSelection = () => {
    const [selectedArea, setSelectedArea] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [isCleared, setIsCleared] = useState(false);

    useEffect(() => {
        if (selectedArea.includes(0) && selectedArea.includes(4) && selectedArea.includes(9)) {
            setIsAllSelected(true);
        } else {
            setIsAllSelected(false);
        }

        setIsCleared(selectedArea.length === 0);
    }, [selectedArea]);

    const handleSelectedArea = (e) => {
        setSelectedArea(e);
    }

    const clearSelectedArea = () => {
        setSelectedArea([]);
    }

    return {
        selectedArea,
        isAllSelected,
        isCleared,
        handleSelectedArea,
        clearSelectedArea
    };
};
