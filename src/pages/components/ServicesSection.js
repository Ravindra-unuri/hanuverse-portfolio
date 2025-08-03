export default function ServiceSection() {
    return (
        <section id="services" className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#0A192F] dark:text-white mb-4">Our Services</h2>
                <p className="text-[#2E2E2E] dark:text-gray-400 mb-12 text-lg">
                    Hanuverse delivers fast, modern, and creative digital solutions to help you shine online.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                
                    {/* Website Development */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-[#D4AF37] shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">💻</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Website Development
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Modern, responsive, and conversion-focused websites built for performance and growth.
                        </p>
                    </div>

                    {/* Logo Designing */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-[#D4AF37] shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Logo Designing
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Creative and memorable logos that reflect your brand’s identity with a clean and professional look.
                        </p>
                    </div>

                    {/* Reel Creation */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-[#D4AF37] shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🎥</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Reel Creation
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Eye-catching, trendy, and ready-to-upload reels to boost your social media engagement and brand presence.
                        </p>
                    </div>

                    {/* Digital Business Card Creation */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-[#D4AF37] shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🪪</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Digital Business Cards
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Smart, scannable, and sleek digital business cards to represent your brand in the modern world.
                        </p>
                    </div>

                </div>
            </div>

            {/* Optional: Add a soft pattern background to this section using a div or background SVG */}
        </section>
    );
}
