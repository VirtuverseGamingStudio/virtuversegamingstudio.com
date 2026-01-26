"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface GameCardProps {
    title: string;
    description: string;
    image: string;
    status: "Live" | "Coming Soon";
    link?: string;
    className?: string;
}

export function GameCard({ title: gameTitle, description, image, status, link, className }: GameCardProps) {
    return (
        <Card className={cn("overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm group hover:border-primary/50 transition-all duration-300", className)}>
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={image}
                    alt={gameTitle}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-10">
                    <Badge variant={status === "Live" ? "default" : "secondary"} className={cn("text-xs font-bold uppercase tracking-wider", status === "Live" ? "bg-green-500 hover:bg-green-600" : "bg-purple-500 hover:bg-purple-600 text-white")}>
                        {status}
                    </Badge>
                </div>
            </div>
            <CardContent className="p-6 relative">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{gameTitle}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{description}</p>

                {status === "Live" && link ? (
                    <Button asChild className="w-full bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/20 transition-all duration-300">
                        <Link href={link} target="_blank">
                            Play Now <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                ) : (
                    <Button disabled className="w-full bg-secondary text-muted-foreground border border-border">
                        Coming Soon <Lock className="ml-2 w-4 h-4" />
                    </Button>
                )}
            </CardContent>
        </Card>
    );
}
