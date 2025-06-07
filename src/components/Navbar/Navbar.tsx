import Logo from "../Logo/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full bg-white border-b border-gray-200">
            <div className="flex items-center justify-between py-4 mx-auto max-w-6xl w-full">
                <Logo />
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                <div className="flex items-center space-x-4">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://i.pravatar.cc/300" alt="User Profile" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;