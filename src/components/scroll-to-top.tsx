"use client";

import { useState, useEffect } from "react";
import { Button } from "@heroui/button";

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <Button
                    isIconOnly
                    className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#B76E79] to-[#D48E98] text-white shadow-xl shadow-[#B76E79]/40 hover:shadow-2xl hover:shadow-[#B76E79]/60 transition-all hover:scale-110"
                    radius="full"
                    size="lg"
                    onPress={scrollToTop}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </Button>
            )}
        </>
    );
};
