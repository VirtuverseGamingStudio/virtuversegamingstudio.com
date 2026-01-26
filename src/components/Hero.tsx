"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Trophy, Zap } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-20">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(99,102,241,0.06),transparent_50%)]" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mt-5 rounded-full bg-primary/10 border border-primary/20"
                        >
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm font-semibold text-primary">Next-Gen Gaming Studio</span>
                        </motion.div>

                        {/* Headline */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                            <span className="block text-gray-900">Building the Future of</span>
                            <span className="block bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Interactive Entertainment
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            We create immersive gaming experiences that captivate millions of players worldwide.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                            <Button
                                size="lg"
                                asChild
                                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-lg rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <Link href="/games" className="flex items-center gap-2">
                                    <Play className="w-5 h-5" />
                                    Explore Our Games
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                asChild
                                className="border-2 border-gray-300 hover:border-primary hover:bg-primary/5 text-gray-700 hover:text-primary font-semibold px-8 h-14 text-lg rounded-md"
                            >
                                <Link href="/about">
                                    Learn More
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-black text-primary mb-2">2+</div>
                                <div className="text-sm text-gray-600 font-medium">Games Live</div>
                            </div>
                            <div className="text-center border-x border-gray-200">
                                <div className="text-4xl font-black text-primary mb-2">10K+</div>
                                <div className="text-sm text-gray-600 font-medium">Active Players</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-black text-primary mb-2">5★</div>
                                <div className="text-sm text-gray-600 font-medium">Rating</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
