"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = ["/assets/1.png", "/assets/3.png", "/assets/4.png"];

export default function DoodleCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto h-[400px] overflow-hidden">
            {images.map((src, index) => (
                <Image
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    width={400}
                    height={400}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-2000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                />
            ))}
        </div>
    );
}
