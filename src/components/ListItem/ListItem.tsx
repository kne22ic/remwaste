import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ListItemProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    last?: boolean;
    message?: string;
}

/**
 * ListItem component that displays a title, an optional description, and an icon with a tooltip.
 * 
 * @param title - The main label for the list item.
 * @param description - Optional description text.
 * @param icon - Optional icon to display with a tooltip.
 * @param last - If true, removes the bottom border.
 * @param message - Tooltip message for the icon.
 * @returns JSX.Element
 */

const ListItem = ({ title, description, icon, last, message }: ListItemProps) => {
    return (
        <div className={`flex items-center py-2 border-b border-gray-200 ${last ? "border-b-0" : ""}`}>
            <div className="flex-1 flex items-center justify-between">
                <div className="flex gap-1">
                    <h3 className="text-sm text-foreground">{title}</h3>
                    <Tooltip>
                        <TooltipTrigger>
                            {icon && <span>{icon}</span>}
                        </TooltipTrigger>
                        <TooltipContent>
                            {message ? <span>{message}</span> : <span className="text-xs text-gray-500">No additional information</span>}
                        </TooltipContent>
                    </Tooltip>
                </div>
                {description && <p className="text-sm font-bold">{description}</p>}
            </div>
        </div>
    );
};

export default ListItem;