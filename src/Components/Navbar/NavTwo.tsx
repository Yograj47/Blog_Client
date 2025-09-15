import { useUser } from '@/Utils/context/UserAuth';
import { Button } from '@mui/material'
import { Bell, Menu, PenBox, User } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function NavTwo() {
    const [isProfileOpen, setProfileOpen] = useState<boolean>(false);
    const { user, logout } = useUser();
    return (
        <header className="w-full bg-white shadow-sm px-4 py-2 flex items-center justify-between relative">
            {/* Left Section: menu + logo + search */}
            <div className="flex items-center gap-4">
                {/* Menu & Logo */}
                <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Menu className="w-6 h-6 text-gray-700" />
                    </button>
                    <span className="text-xl font-bold text-gray-800">Blogpedia</span>
                </div>

                {/* Search Bar */}
                <div className="hidden md:flex">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Search..."
                        className="px-3 py-1.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                    />
                </div>
            </div>

            {/* Right Section: nav items */}
            <nav className="flex items-center gap-4">
                <Link
                    to="/b/write"
                    className="flex items-center gap-1 px-3 py-1.5 text-gray-700 hover:bg-gray-100 rounded-lg transition"
                >
                    <PenBox className="w-5 h-5" />
                    <span className="hidden sm:inline">Write</span>
                </Link>

                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <Bell className="w-6 h-6 text-gray-700" />
                    {/* Notification Dot */}
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                {user ?
                    <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setProfileOpen(!isProfileOpen)}>
                        <User className="w-6 h-6 text-gray-700" />
                    </button> : <></>
                }
            </nav>

            <div className={`${isProfileOpen ? "flex" : "hidden"} absolute top-[3.5rem] right-6 w-64 bg-white shadow-lg rounded-2xl border border-gray-200 p-4 flex-col gap-4 z-50`}>
                {/* Profile */}
                <div className="flex items-center gap-3 border-b pb-3">
                    <img
                        src={"/assets/pp.jpg"}
                        width={48}
                        height={48}
                        className="rounded-full object-cover aspect-square ring-2 hover:ring-zinc-700 overflow-hidden"
                        alt="profile picture"
                    />
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-800">Han Li</span>
                        <Link
                            to="/profile"
                            className="text-sm text-indigo-600 hover:underline"
                        >
                            View Profile
                        </Link>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-2 text-sm text-gray-700">
                    <Link
                        to="/settings"
                        className="px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                        Settings
                    </Link>
                    <button className="px-3 py-2 text-left rounded-lg hover:bg-gray-100 transition">
                        Help
                    </button>
                </div>

                {/* Sign out */}
                <Button
                    variant="outlined"
                    className="w-full mt-2 !rounded-xl !capitalize"
                    onClick={() => logout()}
                >
                    Sign Out
                </Button>
            </div>

        </header>

    )
}

