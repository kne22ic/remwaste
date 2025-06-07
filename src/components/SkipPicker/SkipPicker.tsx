import { useEffect } from "react";
import type { Skip } from "@/store/skipsSlice";
import {
    Card,
    CardContent,
} from "@/components/ui/card"

interface SkipPickerProps {
    skips: Skip[];
    onSkipSelect: (skip: Skip) => void;
    selectedSkip: Skip | null;
}

/**
 *
 * @param {SkipPickerProps} props - The properties for the SkipPicker component.
 * @returns JSX.Element
 * @description SkipPicker component allows users to select a skip from a list of available skips.
 * It displays the skips in a horizontal scrollable list with their size and price.
 * The selected skip is highlighted, and clicking on a skip updates the selection.
 */

const SkipPicker = ({ skips, onSkipSelect, selectedSkip }: SkipPickerProps) => {
    useEffect(() => {
        if (!selectedSkip && skips.length > 0) {
            onSkipSelect(skips[0]);
        }
    }, [selectedSkip, skips, onSkipSelect]);

    return (
        <div className="mb-6">
            <div className="flex gap-2 overflow-x-auto p-4 bg-white rounded-lg border border-gray-200">
                {skips.map((skip) => (
                    <Card
                        key={skip.id}
                        onClick={() => onSkipSelect(skip)}
                        className={`
                            ${selectedSkip?.id === skip.id ? "bg-blue-100 border-blue-500" : ""}
                            cursor-pointer hover:border-blue-500 transition-colors
                        `}
                    >
                        <CardContent>
                            <div className="flex flex-col items-center py-2 gap-1">
                                <p className="text-lg font-semibold">{skip.size}</p>
                                <p className="text-xs text-muted-foreground">Yards</p>
                                <p className="text-sm font-semibold">£{skip.price_before_vat}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default SkipPicker;
