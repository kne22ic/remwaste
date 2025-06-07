import ListItem from "../ListItem/ListItem";
import { Card } from "../ui/card";
import type { Skip } from "@/store/skipsSlice";
import { TriangleAlert } from "lucide-react";

interface SkipCardProps {
    skip: Skip;
}

const SkipCard = ({ skip }: SkipCardProps) => {
    return (
        <Card className="w-full">
            <div className="flex">
                <div className="flex flex-col items-center justify-center bg-blue-100 flex-1 rounded-l-lg">
                    <img src={skip.image} alt={`${skip.size} Yard Skip`} className="h-48 object-cover rounded" />
                    <h2 className="text-lg font-semibold mt-2">{skip.size} Yard Skip</h2>
                </div>
                <div className="flex-1 p-4">
                    <ListItem
                        title={`Capacity`}
                        description={`${skip.size} Yards`}
                    />
                    <ListItem title="Hire Period" description={`${skip.hire_period_days} days`} />
                    <ListItem title="Allowed on Road" description={skip.allowed_on_road ? "Yes" : "No"} icon={!skip.allowed_on_road && <TriangleAlert className="w-4 h-4 text-yellow-500" />} />
                    <ListItem title="Allows Heavy Waste" description={skip.allows_heavy_waste ? "Yes" : "No"} icon={!skip.allows_heavy_waste && <TriangleAlert className="w-4 h-4 text-yellow-500" />} />
                    <ListItem title="Transport Cost" description={skip.transport_cost !== null ? `£${skip.transport_cost}` : "N/A"} />
                    <ListItem title="Per Tonne Cost" description={skip.per_tonne_cost !== null ? `£${skip.per_tonne_cost}` : "N/A"} />
                    {skip.area && <ListItem title="Area" description={skip.area} />}
                    <ListItem title="Price (before VAT)" description={`£${skip.price_before_vat}`} />
                    <ListItem title="VAT" description={`${skip.vat}%`} />
                </div>
            </div>
        </Card>
    );
};

export default SkipCard;
