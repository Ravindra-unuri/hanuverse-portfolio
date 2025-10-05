export default function PricingSection() {
    return (
        <section id="pricing" className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#0A192F] dark:text-white mb-4">Our Pricing</h2>
                <p className="text-[#2E2E2E] dark:text-gray-400 mb-12 text-lg">
                    Affordable, transparent, and designed to grow with your business.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Website Development */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-2">Website Development</h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300 mb-4">Starts at</p>
                        <div className="text-3xl font-semibold text-[#D4AF37] mb-4">₹4,999</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Single-page design with responsive layout.</p>
                    </div>

                    {/* Logo Designing */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-2">Logo Designing</h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300 mb-4">Starts at</p>
                        <div className="text-3xl font-semibold text-[#D4AF37] mb-4">₹799</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Modern, clean, and brand-aligned design.</p>
                    </div>

                    {/* Reel Creation */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-2">Reel Creation & Video Editing</h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300 mb-4">Starts at</p>
                        <div className="text-3xl font-semibold text-[#D4AF37] mb-4">₹4,999/2 reel editing</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Scroll-stopping reels, optimized for platforms.</p>
                    </div>

                    {/* Digital Business Card */}
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-[#0A192F] dark:text-white mb-2">Digital Business Card</h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300 mb-4">Starts at</p>
                        <div className="text-3xl font-semibold text-[#D4AF37] mb-4">₹299</div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Scannable, shareable, and beautifully branded.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
