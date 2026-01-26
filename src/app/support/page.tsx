import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SupportPageContent } from "@/components/SupportPageContent";

export const metadata = {
    title: "Support | Virtuverse Gaming Studio",
    description: "Get help for Teen Patti Retroverse and other games. Check our FAQs or contact our support team.",
};

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-background pt-24">
            <Navbar />
            <SupportPageContent />
            <Footer />
        </main>
    );
}
