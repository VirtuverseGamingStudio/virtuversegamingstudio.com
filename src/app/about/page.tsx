import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Target, Lightbulb, Heart, Rocket, Users, Award, Zap, Globe } from "lucide-react";

export const metadata = {
    title: "About Us | Virtuverse Gaming Studio",
    description: "Learn about Virtuverse Gaming Studio - a passionate team creating immersive gaming experiences.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <MotionWrapper>
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">About Us</Badge>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                                Building the Future of <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Gaming</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                We're a passionate team of developers, designers, and gamers dedicated to creating immersive experiences that bring joy to millions of players worldwide.
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <MotionWrapper delay={0.1}>
                            <div className="relative p-10 rounded-2xl bg-white border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Target className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4">Our Mission</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To create innovative, engaging gaming experiences that push the boundaries of interactive entertainment and bring people together through the power of play.
                                </p>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2}>
                            <div className="relative p-10 rounded-2xl bg-white border-l-4 border-amber-500 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="w-20 h-20 rounded-2xl bg-amber-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                                    <Lightbulb className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h2 className="text-3xl font-black text-gray-900 mb-4">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    To become a globally recognized gaming studio known for quality, innovation, and creating unforgettable experiences that resonate with players of all ages.
                                </p>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <MotionWrapper>
                        <div className="text-center mb-16">
                            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Our Values</Badge>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                What Drives Us
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The principles that guide everything we do
                            </p>
                        </div>
                    </MotionWrapper>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <MotionWrapper delay={0.1} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Passion</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We love what we do and it shows in every game we create
                                </p>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Constantly pushing boundaries with cutting-edge technology
                                </p>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.3} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Award className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Committed to delivering the highest quality in everything
                                </p>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.4} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group text-center">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <Users className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">Community</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Building strong relationships with our players and partners
                                </p>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-gradient-to-br from-primary to-blue-700 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <MotionWrapper>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black mb-4">
                                Our Impact
                            </h2>
                            <p className="text-xl text-blue-100">
                                Numbers that speak for themselves
                            </p>
                        </div>
                    </MotionWrapper>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        <MotionWrapper delay={0.1}>
                            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <div className="text-5xl font-black mb-2">2+</div>
                                <div className="text-blue-100 font-medium">Games Live</div>
                            </div>
                        </MotionWrapper>
                        <MotionWrapper delay={0.2}>
                            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <div className="text-5xl font-black mb-2">10K+</div>
                                <div className="text-blue-100 font-medium">Active Players</div>
                            </div>
                        </MotionWrapper>
                        <MotionWrapper delay={0.3}>
                            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <div className="text-5xl font-black mb-2">99%</div>
                                <div className="text-blue-100 font-medium">Satisfaction Rate</div>
                            </div>
                        </MotionWrapper>
                        <MotionWrapper delay={0.4}>
                            <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                                <div className="text-5xl font-black mb-2">24/7</div>
                                <div className="text-blue-100 font-medium">Support</div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
