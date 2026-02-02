import { Button } from "@mui/material";
import { useAuthModal } from "@/Utils/context/AuthModal";
import { ChevronRight, Zap, Shield, Users } from "lucide-react";

export default function GuestHome() {
    const { setAuthModal } = useAuthModal();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
                {/* Subtle Technical Grid Background */}
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="flex flex-col items-center justify-center px-4 text-center gap-8 max-w-4xl mx-auto">
                    {/* Status Badge */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        New: v2.4 Engine Live
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                        Welcome to <span className="text-blue-600">BlogPedia</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl max-w-2xl text-slate-500 leading-relaxed font-medium">
                        Discover amazing articles, learn new things, and join a community of
                        passionate readers and writers. <span className="text-slate-900 font-semibold">Start your technical journey today.</span>
                    </p>

                    <div className="flex flex-col items-center gap-4">
                        <Button
                            variant="outlined"
                            onClick={() => setAuthModal("signin")}
                            sx={{ 
                                borderRadius: "8px", // Tech theme usually uses lower radius than consumer
                                px: 6, py: 1.5, 
                                fontWeight: 700, 
                                fontSize: '1rem',
                                textTransform: 'none',
                                borderColor: '#0f172a',
                                color: '#0f172a',
                                borderWidth: '2px',
                                '&:hover': { borderWidth: '2px', borderColor: '#334155', backgroundColor: '#f8fafc' }
                            }}
                        >
                            Sign In to Account
                        </Button>
                        <p className="text-xs text-slate-400 font-medium">
                            No credit card required • Instant access
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-slate-50/50 py-24 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">Core Features</h2>
                        <p className="text-3xl font-bold text-slate-900">Engineered for modern writers</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <FeatureCard 
                            icon={<Zap size={20} className="text-blue-600" />}
                            title="Read without limits"
                            desc="Explore thousands of topics from tech to personal growth with our high-performance feed."
                        />
                        <FeatureCard 
                            icon={<Shield size={20} className="text-emerald-600" />}
                            title="Share your voice"
                            desc="Our editor is designed for focus. Markdown support and real-time syncing included."
                        />
                        <FeatureCard 
                            icon={<Users size={20} className="text-indigo-600" />}
                            title="Grow your audience"
                            desc="Integrated SEO and social graph tools to reach readers exactly where they are."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
    return (
        <div className="group bg-white p-8 rounded-xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            <div className="mt-6 flex items-center gap-2 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ChevronRight size={14} />
            </div>
        </div>
    );
}