"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, ChevronDown, Home, Info, Gamepad2, Briefcase, Mail, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "About", href: "/about", icon: Info },
        { name: "Games", href: "/games", icon: Gamepad2 },
        { name: "Services", href: "/services", icon: Briefcase },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white shadow-lg border-b border-gray-200"
                : "bg-white/95 backdrop-blur-md border-b border-gray-100"
                }`}
        >
            <div className="container mx-auto px-6 lg:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-10">
                        <div className="relative h-18 w-56 transition-transform duration-300 group-hover:scale-105">
                            <img
                                src="/logo 2.png"
                                alt="Virtuverse Gaming Studio"
                                className="w-full h-full object-contain object-left"
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-5 py-2 text-[15px] font-semibold text-gray-700 hover:text-primary transition-colors duration-200 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-11 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            {/* <Link href="/contact">
                                Get Started
                            </Link> */}
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="relative cursor-pointer hover:scale-110 hover:bg-primary/10 hover:text-primary transition-all duration-300 rounded-full">
                                    <Menu className="h-6 w-6 text-gray-700" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-white border-l border-gray-200">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <div className="flex flex-col gap-3 mt-12">
                                    {navItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="group relative flex items-center gap-4 px-4 py-3 text-lg font-semibold text-gray-700 hover:text-primary transition-all duration-300 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/20"
                                            >
                                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/10 to-blue-600/10 flex items-center justify-center group-hover:from-primary group-hover:to-blue-600 transition-all duration-300 group-hover:scale-110">
                                                    <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                                                </div>
                                                <span className="flex-1">{item.name}</span>
                                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                            </Link>
                                        );
                                    })}
                                    {/* <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 rounded-md mt-4">
                                        <Link href="/contact">Get Started</Link>
                                    </Button> */}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
}
