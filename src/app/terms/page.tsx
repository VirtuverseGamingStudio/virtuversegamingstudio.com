import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Terms & Conditions | Virtuverse Gaming Studio",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <section className="container mx-auto px-4 max-w-4xl mb-20">
                <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Last Updated: January 1, 2024</p>
                    <p>
                        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website operated by Virtuverse Gaming Studio (OPC) Private Limited ("us", "we", or "our").
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                    <p>
                        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Virtuverse Gaming Studio and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Links To Other Web Sites</h2>
                    <p>
                        Our Service may contain links to third-party web sites or services that are not owned or controlled by Virtuverse Gaming Studio. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Termination</h2>
                    <p>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at virtuversegamingstudio@zohomail.in.
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
