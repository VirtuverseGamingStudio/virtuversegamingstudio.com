import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
    title: "Privacy Policy | Virtuverse Gaming Studio",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <section className="container mx-auto px-4 max-w-4xl mb-20">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
                    <p>Effective Date: January 1, 2024</p>
                    <p>
                        Virtuverse Gaming Studio (OPC) Private Limited ("we", "our", "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or play our games.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We may collect information about you in a variety of ways. The information we may collect via the Application depends on the content and materials you use, and includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Personal Data:</strong> Demographics and other personally identifiable information (such as your name and email address) that you voluntarily give to us.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site/App, such as your IP address, browser type, operating system, and access times.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Application to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Create and manage your account.</li>
                        <li>Compile anonymous statistical data and analysis for use internally.</li>
                        <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you.</li>
                        <li>Email you regarding your account or order.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Disclosure of Your Information</h2>
                    <p>
                        We may share information we have collected about you in certain situations. Your information may be disclosed as follows: By Law or to Protect Rights, Third-Party Service Providers, Marketing Communications, etc.
                    </p>

                    <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us at:
                        <br /><br />
                        <strong>Virtuverse Gaming Studio</strong><br />
                        virtuversegamingstudio@zohomail.in
                    </p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
