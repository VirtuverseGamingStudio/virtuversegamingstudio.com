import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    return (
        <Card className="bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-8 flex flex-col items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center">
                    <Icon className="w-7 h-7" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}
