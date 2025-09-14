import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <header className="h-[10vh] w-full flex justify-start px-4 bg-gray-400">
            <Link to={"/"} className="text-4xl">
                BlogPedia
            </Link>
        </header>
    )
}
