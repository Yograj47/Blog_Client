export function GuestNav() {
    return (
        <header className="w-full h-20 bg-black text-white px-8 flex items-center justify-between sticky top-0 z-50">
            <div className="text-3xl font-black tracking-tighter grace-font">BlogPedia</div>
            <div className="flex items-center gap-6">
                <button className="text-sm font-medium hover:text-gray-300">Explore</button>
                <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition">
                    Get Started
                </button>
            </div>
        </header>
    );
}