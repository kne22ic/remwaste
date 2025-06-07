import SkipPicker from "@/components/SkipPicker/SkipPicker";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import { fetchSkips, type Skip } from "@/store/skipsSlice";
import SkipCard from "@/components/SkipCard/SkipCard";


/**
 *
 * @returns JSX.Element
 * @description SkipSelection component allows users to select a skip size from a list of available skips.
 * It fetches the skips from the Redux store and displays them in a picker.
 * The selected skip is displayed in a card format below the picker.
 */
const SkipSelection = () => {
    const dispatch = useAppDispatch();
    const skips = useAppSelector((state) => state.skips.skips);
    const loading = useAppSelector((state) => state.skips.loading);
    const error = useAppSelector((state) => state.skips.error);
    const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

    useEffect(() => {
        if(!skips.length) {
            dispatch(fetchSkips());
        }
    }, [dispatch, skips.length]);

    return (
        <div className="p-6 bg-white">
            <h1 className="text-2xl font-bold mb-2 text-center">Skip Selection</h1>
            <p className="mb-4 text-center text-gray-500">Select a skip size that suits your needs.</p>

            {loading && <div className="text-center">Loading skips...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}
            {!loading && !error && <SkipPicker skips={skips} onSkipSelect={setSelectedSkip} selectedSkip={selectedSkip} />}

            {selectedSkip && (
                <SkipCard skip={selectedSkip} />
            )}
        </div>
    );
}

export default SkipSelection;