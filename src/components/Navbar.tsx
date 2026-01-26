"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
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
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Games", href: "/games" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
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
                        <div className="relative h-18 w-52 transition-transform duration-300 group-hover:scale-105">
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
                                <Button variant="ghost" size="icon" className="relative">
                                    <Menu className="h-6 w-6 text-gray-700" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-white border-l border-gray-200">
                                <div className="flex flex-col gap-6 mt-12">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="text-lg font-semibold text-gray-700 hover:text-primary transition-colors py-2"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
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
