export function Footer() {
    return (
        <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                <div className="col-span-2 md:col-span-1">
                    <span className="text-lg font-bold tracking-tighter">BlogPedia</span>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed max-w-xs">
                        The modern platform for technical writing and community-driven knowledge.
                    </p>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">Platform</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-blue-600 transition">Explore</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Changelog</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Status</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-500">
                        <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Privacy</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition">Terms</a></li>
                    </ul>
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-400 font-medium">
                    © 2026 BlogPedia Tech. Built for performance.
                </p>
                <div className="flex gap-6 grayscale opacity-60 hover:opacity-100 transition cursor-not-allowed">
                   <span className="text-xs font-bold">Twitter</span>
                   <span className="text-xs font-bold">GitHub</span>
                   <span className="text-xs font-bold">Discord</span>
                </div>
            </div>
        </footer>
    );
}