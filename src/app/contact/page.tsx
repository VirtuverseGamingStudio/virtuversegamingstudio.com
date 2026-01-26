"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MotionWrapper } from "@/components/MotionWrapper";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Headphones } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Thank you! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f615_1px,transparent_1px),linear-gradient(to_bottom,#3b82f615_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <MotionWrapper>
                        <div className="max-w-4xl mx-auto text-center space-y-6">
                            <Badge className="bg-primary/10 text-primary border-primary/20">Get In Touch</Badge>
                            <h1 className="text-5xl md:text-6xl font-black text-gray-900">
                                Let's Create Something <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Amazing</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <MotionWrapper delay={0.1} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border-l-4 border-primary shadow-lg hover:shadow-xl text-center group transition-all duration-300">
                                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                    <MessageSquare className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Chat With Us</h3>
                                <p className="text-gray-600 text-sm mb-4">Quick responses via email</p>
                                <a href="mailto:virtuversegamingstudio@zohomail.in" className="text-primary font-semibold hover:underline">
                                    Send Email
                                </a>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.2} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border-l-4 border-emerald-600 shadow-lg hover:shadow-xl text-center group transition-all duration-300">
                                <div className="w-20 h-20 rounded-2xl bg-emerald-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                    <Phone className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                <p className="text-gray-600 text-sm mb-4">Mon-Fri, 9am-6pm IST</p>
                                <a href="tel:+918905042306" className="text-emerald-600 font-semibold hover:underline">
                                    +91-8905042306
                                </a>
                            </div>
                        </MotionWrapper>

                        <MotionWrapper delay={0.3} animation="scale">
                            <div className="p-8 rounded-2xl bg-white border-l-4 border-purple-600 shadow-lg hover:shadow-xl text-center group transition-all duration-300">
                                <div className="w-20 h-20 rounded-2xl bg-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                                    <Headphones className="w-10 h-10 text-white" strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                                <p className="text-gray-600 text-sm mb-4">24/7 assistance available</p>
                                <a href="/support" className="text-purple-600 font-semibold hover:underline">
                                    Visit Support
                                </a>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <MotionWrapper delay={0.1}>
                            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
                                <h2 className="text-3xl font-black text-gray-900 mb-2">Send us a Message</h2>
                                <p className="text-gray-600 mb-8">Fill out the form and we'll get back to you within 24 hours</p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name *</label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="h-12 border-gray-300 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address *</label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="h-12 border-gray-300 focus:border-primary"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-semibold text-gray-700">Subject *</label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="Project Inquiry"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="h-12 border-gray-300 focus:border-primary"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message *</label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="border-gray-300 focus:border-primary resize-none"
                                        />
                                    </div>
                                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 font-bold rounded-lg group">
                                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </MotionWrapper>

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <MotionWrapper delay={0.2}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
                                            <p className="text-gray-600 leading-relaxed">
                                                A-10 Madhav Mandir Society - 2,<br />
                                                Dabholi Road, Katargam,<br />
                                                India
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper delay={0.3}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                                            <a href="mailto:virtuversegamingstudio@zohomail.in" className="text-gray-600 hover:text-primary transition-colors">
                                                virtuversegamingstudio@zohomail.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper delay={0.4}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                                            <a href="tel:+918905042306" className="text-gray-600 hover:text-primary transition-colors block mb-1">
                                                +91-8905042306
                                            </a>
                                            <p className="text-sm text-gray-500">Mon - Fri, 9am - 6pm IST</p>
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>

                            <MotionWrapper delay={0.5}>
                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                                    <div className="flex items-start gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Business Hours</h3>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </MotionWrapper>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <MotionWrapper>
                        <div className="h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.564771746973!2d72.821!3d21.218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05123456789%3A0x123456abcdef!2sKatargam%2C%20Surat%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <Footer />
        </main>
    );
}
