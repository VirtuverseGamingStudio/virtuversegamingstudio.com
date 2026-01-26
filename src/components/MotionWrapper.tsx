"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    animation?: "fade" | "slideUp" | "slideRight" | "scale";
}

export function MotionWrapper({ children, delay = 0, className = "", animation = "slideUp" }: MotionWrapperProps) {
    const animations: Record<string, Variants> = {
        fade: {
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay } }
        },
        slideUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
        },
        slideRight: {
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease: "easeOut" } }
        },
        scale: {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay } }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={animations[animation]}
            className={className}
        >
            {children}
        </motion.div>
    );
}
