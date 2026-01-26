import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/MotionWrapper";
import { CheckCircle2, Play, Lock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Games | Virtuverse Gaming Studio",
    description: "Explore our portfolio of immersive games including Teen Patti Retroverse and our upcoming Poker title.",
};

export default function GamesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <MotionWrapper>
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">Our Portfolio</Badge>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                                Our Gaming <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Universe</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                From classic card games reinvented to futuristic adventures, discover the worlds we've built for you.
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Games Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="space-y-12 max-w-6xl mx-auto">
                        {/* Teen Patti Retroverse - Horizontal Card */}
                        <MotionWrapper delay={0.1}>
                            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-gray-200 hover:border-primary/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10">
                                    {/* Left: Content */}
                                    <div className="flex flex-col justify-center space-y-6">
                                        {/* Badges */}
                                        <div className="flex items-center gap-3">
                                            <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold uppercase rounded-full">Live Now</span>
                                            <span className="text-sm text-gray-600">Multiplayer Card Game</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                                            Teen Patti Retroverse
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            Experience the classic Indian card game like never before. Set in a neon-drenched cyberpunk future, Teen Patti Retroverse brings traditional gameplay to a modern, high-tech world.
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span>Real-time multiplayer action</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span>Stunning 3D environments</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                                                <span>Daily rewards and tournaments</span>
                                            </li>
                                        </ul>

                                        {/* Button */}
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-lg shadow-lg w-fit"
                                        >
                                            <Link href="https://www.teenpattiretroverse.com/" target="_blank" className="flex items-center gap-2">
                                                <Play className="w-5 h-5" />
                                                Play Now
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>

                                    {/* Right: Image */}
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                        <img
                                            src="/teen-patti.png"
                                            alt="Teen Patti Retroverse"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>

                        {/* Premium Poker - Horizontal Card (Image on Left) */}
                        <MotionWrapper delay={0.2}>
                            <div className="relative rounded-3xl overflow-hidden bg-white border-2 border-gray-200 hover:border-purple-300 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10">
                                    {/* Left: Image */}
                                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 order-2 lg:order-1">
                                        <img
                                            src="/poker-game.png"
                                            alt="Premium Poker"
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Right: Content */}
                                    <div className="flex flex-col justify-center space-y-6 order-1 lg:order-2">
                                        {/* Badges */}
                                        <div className="flex items-center gap-3">
                                            <span className="px-4 py-1.5 bg-purple-500 text-white text-xs font-bold uppercase rounded-full">Coming Soon</span>
                                            <span className="text-sm text-gray-600">High-Stakes Poker</span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                                            Premium Poker
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 leading-relaxed">
                                            An elegant, high-stakes poker experience designed for the modern player. Featuring realistic physics and social tables for serious players.
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                                <span>Realistic card physics</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                                <span>Social tables & chat</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-700">
                                                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                                                <span>Cross-platform play</span>
                                            </li>
                                        </ul>

                                        {/* Button */}
                                        <Button
                                            disabled
                                            size="lg"
                                            className="bg-gray-200 text-gray-500 font-bold h-14 rounded-lg cursor-not-allowed w-fit"
                                        >
                                            <Lock className="w-5 h-5 mr-2" />
                                            Coming Soon
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </MotionWrapper>

                        {/* Mystery Project Card */}
                        <MotionWrapper delay={0.3}>
                            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-dashed border-gray-300 p-12 text-center">
                                <div className="max-w-md mx-auto space-y-6">
                                    <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                                        <Sparkles className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-3xl font-black text-gray-900">Mystery Project</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Our laboratories are cooking up something exciting. Stay tuned for announcements!
                                    </p>
                                    <Badge variant="outline" className="text-sm">In Concept</Badge>
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
