import { Button } from "@mui/material";
import { useAuthModal } from "@/Utils/context/AuthModal";

export default function GuestHome() {
    const { setAuthModal } = useAuthModal();

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

                <div className="flex flex-col items-center justify-center px-4 text-center gap-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900">
                        Welcome to <span className="text-blue-600">BlogPedia</span>
                    </h1>
                    
                    <p className="text-lg md:text-xl max-w-xl text-gray-600 leading-relaxed">
                        Discover amazing articles, learn new things, and join a community of
                        passionate readers and writers.
                    </p>

                    <div className="flex gap-4 mt-4">
                        <Button
                            variant="contained"
                            onClick={() => setAuthModal("signup")}
                            sx={{ 
                                borderRadius: "99px", 
                                px: 4, py: 1.5, 
                                fontWeight: 700, 
                                textTransform: 'none',
                                boxShadow: '0 4px 14px 0 rgba(0,118,255,0.39)',
                                backgroundColor: '#2563eb'
                            }}
                        >
                            Sign Up
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => setAuthModal("signin")}
                            sx={{ 
                                borderRadius: "99px", 
                                px: 4, py: 1.5, 
                                fontWeight: 600, 
                                textTransform: 'none',
                                borderColor: '#e2e8f0',
                                color: '#475569',
                                '&:hover': { borderColor: '#cbd5e1', backgroundColor: '#f8fafc' }
                            }}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section - Kept your original descriptions */}
            <section className="bg-gray-50/50 py-20 border-y border-gray-100">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard 
                        title="Read without limits"
                        desc="Explore thousands of topics from tech to personal growth."
                    />
                    <FeatureCard 
                        title="Share your voice"
                        desc="Our editor is designed for focus. Just write, we handle the rest."
                    />
                    <FeatureCard 
                        title="Grow your audience"
                        desc="Reach readers who are looking for exactly what you have to say."
                    />
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-2xl border border-gray-200/60 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
        </div>
    );
}