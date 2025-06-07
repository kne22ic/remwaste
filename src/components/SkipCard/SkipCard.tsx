import ListItem from "../ListItem/ListItem";
import { Card } from "../ui/card";
import type { Skip } from "@/store/skipsSlice";
import { TriangleAlert } from "lucide-react";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

interface SkipCardProps {
    skip: Skip;
}

const SkipCard = ({ skip }: SkipCardProps) => {
    return (
        <Card className="w-full">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center bg-blue-100 flex-1 rounded-l-lg p-4">
                    <img src={skip.image} alt={`${skip.size} Yard Skip`} className="w-full h-auto object-cover rounded" />
                </div>
                <div className="flex-1 p-4">
                    <h3 className="text-md font-bold mb-2">Specifications</h3>
                    <ListItem title={`Capacity`} description={`${skip.size} Yards`} />
                    <ListItem title="Hire Period" description={`${skip.hire_period_days} days`} />
                    <ListItem title="Allowed on Road" description={skip.allowed_on_road ? "Yes" : "No"} icon={!skip.allowed_on_road && <TriangleAlert className="w-4 h-4 text-yellow-500" />} />
                    <ListItem title="Allows Heavy Waste" description={skip.allows_heavy_waste ? "Yes" : "No"} icon={!skip.allows_heavy_waste && <TriangleAlert className="w-4 h-4 text-yellow-500" />} />
                    {skip.transport_cost && (<ListItem title="Transport Cost" description={skip.transport_cost.toString()} />)}
                    {skip.per_tonne_cost && (<ListItem title="Per Tonne Cost" description={skip.per_tonne_cost.toString()} />)}
                    {skip.area && <ListItem title="Area" description={skip.area} />}
                    <ListItem title="Price (before VAT)" description={`£${skip.price_before_vat}`} />
                    <ListItem title="VAT" description={`${skip.vat}%`} last />
                    <div className="w-full flex justify-between mt-4 gap-2">
                        <Button
                            size="default"
                            variant="outline"
                            className="text-blue-600 border-blue-600 py-1.5 text-sm font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg flex-1"
                        >
                            More Details
                        </Button>
                        <Button
                            size="default"
                            className="bg-blue-600 hover:bg-blue-700 text-white px- py-1.5 text-sm font-semibold transition-all duration-300 transform hover:scale-105 rounded-lg flex-1"
                        >
                            Select {skip.size} Yard Skip
                            <ChevronRight className="w-3.5 h-3.5 ml-1.5" />
                        </Button>
                    </div>
                    <p className="text-xs text-gray-400 mt-8">
                        Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default SkipCard;
