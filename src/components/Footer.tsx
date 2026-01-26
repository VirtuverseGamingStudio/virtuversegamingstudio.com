import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <div className="relative h-16 w-44">
                                <img src="/logo 2.png" alt="Virtuverse Logo" className="w-full h-full object-contain object-left" />
                            </div>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Pioneering the future of gaming with immersive experiences and cutting-edge technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/games" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Our Games
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                    A-10 Madhav Mandir Society - 2, Dabholi Road, Katargam, India
                                </span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <a href="mailto:virtuversegamingstudio@zohomail.in" className="text-muted-foreground hover:text-primary transition-colors">
                                    virtuversegamingstudio@zohomail.in
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <a href="tel:+918905042306" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91-8905042306
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Virtuverse Gaming Studio (OPC) Private Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
