import Logo from "../Logo/Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

/**
 * 
 * @returns Navbar component
 * @description This component renders a sticky navigation bar with a logo, navigation links, and a user avatar.
 * The navigation links are only visible on larger screens (desktop), while the user avatar is always visible.
 * The navbar is styled with Tailwind CSS classes for a clean and modern look.
 * This navbar is solely for making the application look more complete and does not include any functionality.
 */

const Navbar = () => {
    return (
        <nav className="sticky top-0 w-full bg-white border-b border-gray-200 sm:px-0 px-4">
            <div className="flex items-center justify-between py-4 mx-auto max-w-3xl w-full">
                <Logo />
                {/* Desktop links */}
                <div className="hidden md:flex items-center space-x-4">
                    <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                {/* User avatar always visible */}
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