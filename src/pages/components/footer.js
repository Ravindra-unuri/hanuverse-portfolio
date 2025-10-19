"use client";
import Link from "next/link";
import {
    Instagram,
    Mail,
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
    Phone
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const navLinks = ["Home", "About", "Services", "Contact"];

    return (
        <footer className="w-full bg-[#0A192F] text-white">
            {/* --- Main Footer Section --- */}
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">

                {/* --- Left: Logo + About --- */}
                <div>
                    <div className="flex flex-col items-start mb-4">
                        <Image
                            src="/assets/LOGO.png"
                            alt="Hanuverse Logo"
                            className="w-14 h-14 rounded-full object-cover mb-2"
                        />
                        <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-orange-500 to-[#ffffff] bg-clip-text text-transparent">
                            Hanuverse
                        </h1>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-300">
                        We are a creative digital marketing agency helping businesses grow online
                        through innovative strategies, impactful design, and powerful branding.
                    </p>
                </div>

                {/* --- Center (Optional Spacer or Services) --- */}
                <div className="hidden sm:block"></div>

                {/* --- Right: Quick Links --- */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4 border-b border-gray-500 pb-1 w-fit">
                        Quick Links
                    </h3>

                    <ul className="space-y-2 text-gray-300">
                        {navLinks.map((item) => (
                            <li key={item}>
                                <Link
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-orange-400 transition-colors"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* --- Bottom Section --- */}
            <div className="border-t border-gray-700">
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} Hanuverse Digital. All rights reserved.</p>

                    {/* --- Social Media Icons --- */}
                    <div className="flex gap-5 mt-3 sm:mt-0">
                        <Link
                            href="tel:+918485932058"
                            aria-label="Phone"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Phone className="w-5 h-5" />
                        </Link>

                        <Link
                            href="mailto:hanuversedigitalmarketing@gmail.com"
                            aria-label="Email"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://www.instagram.com/hanuversedigital?igsh=a2YwNnN0OHV0dmFq"
                            target="_blank"
                            aria-label="Instagram"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://www.facebook.com/share/1Bej4qcunX/"
                            target="_blank"
                            aria-label="Facebook"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/in/hanuverse-digital-49317538a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            aria-label="LinkedIn"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://x.com/hanuverse88235?s=09"
                            target="_blank"
                            aria-label="Twitter"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </Link>

                        <Link
                            href="https://youtube.com/@hanuversedigitalmarketing?si=lfSdYm6RvePK6VYe"
                            target="_blank"
                            aria-label="YouTube"
                            className="hover:text-orange-400 transition-colors"
                        >
                            <Youtube className="w-5 h-5" />
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}
