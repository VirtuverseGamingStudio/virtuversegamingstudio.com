"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, FileQuestion } from "lucide-react";
import Link from "next/link";

export function SupportPageContent() {
    const faqs = [
        {
            question: "I lost my account access in Teen Patti Retroverse. How can I recover it?",
            answer: "If you linked your account to Facebook or Google, simply log in with that method. If you played as a Guest, unless you noted down your Player ID, recovery might be difficult. Please contact support with your Player ID if you have it."
        },
        {
            question: "How do I report a bug or glitch?",
            answer: "You can report bugs directly from the game settings menu under 'Report Issue', or email us at support@virtuverse.com with screenshots/videos and a detailed description."
        },
        {
            question: "Are your games free to play?",
            answer: "Yes! All our games are free to download and play. We offer optional in-app purchases for cosmetic items and currency, but they are not required to enjoy the full game experience."
        },
        {
            question: "How can I contact business support?",
            answer: "For partnership inquiries, please visit our Contact page or email virtuversegamingstudio@zohomail.in directly."
        }
    ];

    return (
        <section className="container mx-auto px-4 mb-20">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">Player Support</h1>
                <p className="text-xl text-muted-foreground">
                    We're here to help you get back in the game.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <Card className="bg-card/50 border-primary/20 hover:border-primary transition-colors text-center">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <FileQuestion className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">FAQs</h3>
                        <p className="text-muted-foreground text-sm mb-6">Find answers to common questions about our games.</p>
                        <Button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
                            View FAQs
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary transition-colors text-center">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <Mail className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Email Support</h3>
                        <p className="text-muted-foreground text-sm mb-6">Send us a detailed message and we'll reply within 24h.</p>
                        <Button asChild>
                            <Link href="mailto:virtuversegamingstudio@zohomail.in">Email Us</Link>
                        </Button>
                    </CardContent>
                </Card>

                <Card className="bg-card/50 border-primary/20 hover:border-primary transition-colors text-center">
                    <CardContent className="p-8 flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Community</h3>
                        <p className="text-muted-foreground text-sm mb-6">Join our Discord or Socials to get help from other players.</p>
                        <Button variant="outline">Coming Soon</Button>
                    </CardContent>
                </Card>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
