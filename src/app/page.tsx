import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { GameCard } from "@/components/GameCard";
import { ServiceCard } from "@/components/ServiceCard";
import { MotionWrapper } from "@/components/MotionWrapper";
import { Button } from "@/components/ui/button";
import { Gamepad2, Smartphone, Code, Palette, ArrowRight, CheckCircle2, Sparkles, Zap, Target, Award, Users2, Clock, Play, Lock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      {/* Featured Games Section */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <MotionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Gamepad2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Featured Games</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Explore Our <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Gaming Universe</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Immersive experiences that have captivated thousands of players worldwide
              </p>
            </div>
          </MotionWrapper>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Teen Patti Retroverse - Enhanced Card */}
            <MotionWrapper delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-white border-2 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10 relative z-10">
                  {/* Left: Content */}
                  <div className="flex flex-col justify-center space-y-6">
                    {/* Badges */}
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 bg-green-500 text-white text-xs font-bold uppercase rounded-full shadow-lg animate-pulse">Live Now</span>
                      <span className="text-sm text-gray-600 font-medium">Multiplayer Card Game</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Teen Patti Retroverse
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      Experience the classic Indian card game like never before. Set in a neon-drenched cyberpunk future, Teen Patti Retroverse brings traditional gameplay to a modern, high-tech world.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-medium">Real-time multiplayer action</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-medium">Stunning 3D environments</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="font-medium">Daily rewards and tournaments</span>
                      </li>
                    </ul>

                    {/* Button */}
                    <Button
                      asChild
                      size="lg"
                      className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white font-bold h-14 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit group/btn"
                    >
                      <Link href="https://www.teenpattiretroverse.com/" target="_blank" className="flex items-center gap-2">
                        <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                        Play Now
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>

                  {/* Right: Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/10 group-hover:ring-primary/20 transition-all">
                    <img
                      src="/teen-patti.png"
                      alt="Teen Patti Retroverse"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            </MotionWrapper>

            {/* Premium Poker - Enhanced Card */}
            <MotionWrapper delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-purple-50/50 to-white border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-10 relative z-10">
                  {/* Left: Image */}
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 ring-4 ring-purple-500/10 group-hover:ring-purple-500/20 transition-all order-2 lg:order-1">
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
                      <span className="px-4 py-1.5 bg-purple-500 text-white text-xs font-bold uppercase rounded-full shadow-lg">Coming Soon</span>
                      <span className="text-sm text-gray-600 font-medium">High-Stakes Poker</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Premium Poker
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      An elegant, high-stakes poker experience designed for the modern player. Featuring realistic physics and social tables for serious players.
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="font-medium">Realistic card physics</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="font-medium">Social tables & chat</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700 group/item">
                        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                          <CheckCircle2 className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="font-medium">Cross-platform play</span>
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
          </div>

          <MotionWrapper delay={0.3}>
            <div className="text-center mt-16">
              <Button variant="outline" size="lg" asChild className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 font-semibold group">
                <Link href="/games" className="flex items-center gap-2">
                  Explore All Games
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Services Section - Enhanced */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <MotionWrapper>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                What We Do Best
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive game development solutions powered by cutting-edge technology
              </p>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <MotionWrapper delay={0.1} animation="scale">
              <ServiceCard
                icon={Gamepad2}
                title="Game Development"
                description="Full-cycle development for PC, console, and mobile platforms using industry-leading engines."
              />
            </MotionWrapper>
            <MotionWrapper delay={0.2} animation="scale">
              <ServiceCard
                icon={Smartphone}
                title="Mobile Games"
                description="Native iOS and Android games optimized for performance and user engagement."
              />
            </MotionWrapper>
            <MotionWrapper delay={0.3} animation="scale">
              <ServiceCard
                icon={Code}
                title="Web Games"
                description="Instant-play HTML5 games that run smoothly across all browsers and devices."
              />
            </MotionWrapper>
            <MotionWrapper delay={0.4} animation="scale">
              <ServiceCard
                icon={Palette}
                title="UI/UX Design"
                description="Immersive interfaces designed to enhance player experience and retention."
              />
            </MotionWrapper>
          </div>

          {/* Additional Value Props */}
          <MotionWrapper delay={0.5}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">2+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Players</div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-6xl mx-auto">
            <MotionWrapper>
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Why Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  Why Choose Virtuverse?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We combine creativity, technology, and passion to deliver exceptional gaming experiences
                </p>
              </div>
            </MotionWrapper>

            <div className="grid md:grid-cols-2 gap-6">
              <MotionWrapper delay={0.1} animation="slideRight">
                <div className="flex gap-4 p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Target className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Expert Team</h3>
                    <p className="text-gray-600 leading-relaxed">Experienced developers, designers, and artists passionate about creating unforgettable gaming experiences.</p>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2} animation="slideRight">
                <div className="flex gap-4 p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Quality First</h3>
                    <p className="text-gray-600 leading-relaxed">Rigorous testing and optimization ensure flawless gameplay and exceptional performance across all platforms.</p>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3} animation="slideRight">
                <div className="flex gap-4 p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Users2 className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">Player-Centric</h3>
                    <p className="text-gray-600 leading-relaxed">Every decision is made with the player experience at the forefront, ensuring engaging and memorable gameplay.</p>
                  </div>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.4} animation="slideRight">
                <div className="flex gap-4 p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">On-Time Delivery</h3>
                    <p className="text-gray-600 leading-relaxed">We respect deadlines and deliver polished, production-ready games on schedule, every time.</p>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-32 bg-gradient-to-br from-primary via-blue-600 to-indigo-700 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <MotionWrapper>
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-4">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Let's Collaborate</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Transform your gaming vision into reality with our expert team. Let's create the next big hit together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <Button
                  size="lg"
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 text-lg rounded-lg shadow-2xl hover:shadow-xl transition-all duration-300 group border-2 border-primary"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-white hover:bg-gray-50 text-primary font-bold px-10 h-14 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white"
                >
                  <Link href="/games">
                    View Portfolio
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/20">
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="text-sm text-blue-100">Free Consultation</div>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="text-sm text-blue-100">Flexible Pricing</div>
                </div>
                <div className="text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-white" />
                  <div className="text-sm text-blue-100">Expert Support</div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <Footer />
    </main >
  );
}
