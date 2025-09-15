import { Link } from "react-router-dom";

export default function NavThree() {
    return (
        <header className="h-[10vh] w-full flex items-center px-8 bg-black shadow-lg">
            <Link
                to={"/"}
                className="text-4xl font-extrabold text-white tracking-tight hover:text-gray-300 transition-colors"
            >
                BlogPedia
            </Link>
        </header>
    )
}
