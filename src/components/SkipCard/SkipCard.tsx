import React from "react";
import ListItem from "../ListItem/ListItem";
import { Card } from "../ui/card";
import type { Skip } from "@/store/skipsSlice";
import { TriangleAlert, ChevronRight, Info, Check } from "lucide-react";
import { Button } from "../ui/button";
import { TooltipContent, TooltipTrigger, Tooltip } from "@/components/ui/tooltip";

interface SkipCardProps {
    skip: Skip;
}

/** 
 * 
 * @param skip - The skip object containing details like size, price, and specifications.
 * @returns JSX.Element
 * @description This component is used for rendering a card that displays information about a skip that is passed as a prop from REMWaste API.
 */

const SkipCard = React.memo(({ skip }: SkipCardProps) => {
    return (
        <Card className="w-full">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center justify-center bg-blue-100 flex-1 rounded-t-lg md:rounded-t-none md:rounded-l-lg p-4">
                    <img src={skip.image} alt={`${skip.size} Yard Skip`} className="w-full h-auto object-cover rounded" />
                    <h2 className="text-lg font-bold mt-4">{skip.size} Yard Skip</h2>
                    <p className="text-2xl font-semibold mt-2 text-blue-600">£{skip.price_before_vat}</p>
                    <p className="text-sm text-gray-500">Excl. VAT</p>
                    <p className="text-sm text-gray-500 mt-2 w-3/4">Perfect for:</p>
                    <ul className="list-inside text-sm text-gray-600 mt-1 w-3/4">
                        {skip.perfect_for.map((item, index) => (
                            <li key={index}> <Check className="inline-block w-4 h-4 mr-1 text-blue-600" /> {item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-md font-bold">Specifications</h3>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Info className="w-4 h-4 text-blue-600 cursor-pointer" />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                        <ListItem title={`Capacity`} description={`${skip.size} Yards`} />
                        <ListItem title="Hire Period" description={`${skip.hire_period_days} days`} />
                        <ListItem
                            title="Allowed on Road"
                            description={skip.allowed_on_road ? "Yes" : "No"}
                            icon={!skip.allowed_on_road && <TriangleAlert className="w-4 h-4 text-yellow-500 cursor-pointer" />}
                            message="This skip is not allowed on the road without a permit."
                        />
                        <ListItem
                            title="Allows Heavy Waste"
                            description={skip.allows_heavy_waste ? "Yes" : "No"}
                            icon={!skip.allows_heavy_waste && <TriangleAlert className="w-4 h-4 text-yellow-500 cursor-pointer" />}
                            message="This skip is not suitable for heavy waste."
                        />
                        {skip.transport_cost && (
                            <ListItem title="Transport Cost" description={skip.transport_cost.toString()} />
                        )}
                        {skip.per_tonne_cost && (
                            <ListItem title="Per Tonne Cost" description={skip.per_tonne_cost.toString()} />
                        )}
                        {skip.area && <ListItem title="Area" description={skip.area} />}
                        <ListItem title="Price (before VAT)" description={`£${skip.price_before_vat}`} />
                        <ListItem title="VAT" description={`${skip.vat}%`} last />
                    </div>
                    <div className="w-full flex justify-between gap-2 mt-4">
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
                </div>
            </div>
        </Card>
    );
});

export default SkipCard;
