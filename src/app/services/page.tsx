import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Gamepad2, Smartphone, Code, Palette, Rocket, Zap, Users, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Our Services | Virtuverse Gaming Studio",
    description: "Comprehensive game development services - from concept to launch.",
};

export default function ServicesPage() {
    const services = [
        {
            icon: Gamepad2,
            title: "Game Development",
            description: "Full-cycle game development for PC, console, and mobile platforms using industry-leading engines like Unity and Unreal.",
            features: ["Cross-platform development", "Custom game mechanics", "Performance optimization", "Quality assurance"],
            color: "bg-blue-600",
            borderColor: "border-blue-600"
        },
        {
            icon: Smartphone,
            title: "Mobile Games",
            description: "Native iOS and Android games optimized for performance, engagement, and monetization strategies.",
            features: ["iOS & Android native", "Touch-optimized controls", "In-app purchases", "Analytics integration"],
            color: "bg-emerald-600",
            borderColor: "border-emerald-600"
        },
        {
            icon: Code,
            title: "Web Games",
            description: "Instant-play HTML5 games that run smoothly across all browsers and devices without downloads.",
            features: ["HTML5/WebGL", "Responsive design", "Browser compatibility", "Fast loading times"],
            color: "bg-purple-600",
            borderColor: "border-purple-600"
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Immersive interfaces designed to enhance player experience, retention, and overall game appeal.",
            features: ["User research", "Wireframing & prototyping", "Visual design", "Usability testing"],
            color: "bg-pink-600",
            borderColor: "border-pink-600"
        },
        {
            icon: Rocket,
            title: "Game Publishing",
            description: "End-to-end publishing support including store optimization, marketing, and launch strategies.",
            features: ["Store optimization", "Marketing strategy", "Launch planning", "Post-launch support"],
            color: "bg-orange-600",
            borderColor: "border-orange-600"
        },
        {
            icon: Zap,
            title: "Game Optimization",
            description: "Performance tuning and optimization to ensure smooth gameplay across all target platforms.",
            features: ["Performance profiling", "Memory optimization", "Frame rate improvement", "Load time reduction"],
            color: "bg-indigo-600",
            borderColor: "border-indigo-600"
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <MotionWrapper>
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">Our Services</Badge>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                                Comprehensive <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Game Development</span> Solutions
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                From concept to launch, we provide end-to-end game development services powered by cutting-edge technology and creative excellence.
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {services.map((service, index) => (
                            <MotionWrapper key={service.title} delay={0.1 * index} animation="scale">
                                <div className={`relative p-8 rounded-2xl bg-white border-l-4 ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col`}>
                                    {/* Icon */}
                                    <div className={`w-20 h-20 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                        <service.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-black text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <MotionWrapper>
                        <div className="text-center mb-16">
                            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Our Process</Badge>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                                How We Work
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                A proven methodology that delivers exceptional results
                            </p>
                        </div>
                    </MotionWrapper>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { step: "01", title: "Discovery", desc: "Understanding your vision and requirements", color: "bg-blue-600" },
                            { step: "02", title: "Planning", desc: "Creating detailed roadmap and milestones", color: "bg-emerald-600" },
                            { step: "03", title: "Development", desc: "Building your game with agile methodology", color: "bg-purple-600" },
                            { step: "04", title: "Launch", desc: "Deploying and supporting your success", color: "bg-pink-600" }
                        ].map((process, index) => (
                            <MotionWrapper key={process.step} delay={0.1 * index} animation="slideRight">
                                <div className="relative p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                                    <div className={`w-16 h-16 rounded-xl ${process.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                                        <span className="text-2xl font-black text-white">{process.step}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                                    <p className="text-gray-600 text-sm">{process.desc}</p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <MotionWrapper>
                        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                            <div className="relative z-10 space-y-6">
                                <h2 className="text-4xl md:text-5xl font-black">
                                    Ready to Start Your Project?
                                </h2>
                                <p className="text-xl text-blue-100">
                                    Let's discuss how we can bring your gaming vision to life
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <Button
                                        size="lg"
                                        asChild
                                        className="bg-white hover:bg-gray-100 text-primary font-bold px-10 h-14 text-lg rounded-lg shadow-xl"
                                    >
                                        <Link href="/contact" className="flex items-center gap-2">
                                            Get Started
                                            <ArrowRight className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button
                                        size="lg"
                                        asChild
                                        className="relative bg-primary hover:bg-gradient-to-r hover:from-primary hover:to-blue-700 text-white font-bold px-10 h-14 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-primary hover:border-blue-400 hover:scale-105 group/work overflow-hidden"
                                    >
                                        <Link href="/games" className="flex items-center gap-2 relative z-10">
                                            View Our Work
                                            <ArrowRight className="w-5 h-5 group-hover/work:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </main>
    );
}
