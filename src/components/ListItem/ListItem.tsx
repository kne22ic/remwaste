interface ListItemProps {
    title: string;
    description?: string;
    icon?: React.ReactNode;
}

const ListItem = ({ title, description, icon }: ListItemProps) => {
    return (
        <div className="flex items-center py-2 border-b border-gray-200">
            {icon && <span className="mr-2">{icon}</span>}
            <div className="flex-1 flex items-center justify-between">
                <h3 className="text-sm font-semibold">{title}</h3>
                {description && <p className="text-sm text-gray-600">{description}</p>}
            </div>
        </div>
    );
};

export default ListItem;