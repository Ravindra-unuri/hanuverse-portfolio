import { motion } from "framer-motion";

export default function PricingSection() {
    return (
        <section id="pricing" className="bg-white dark:bg-gray-950 py-20 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#10294b] dark:text-white mb-4">Our Pricing</h2>
                <p className="text-[#2E2E2E] dark:text-gray-400 mb-8 text-lg">
                    Affordable, transparent, and designed to grow with your business.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 p-10 min-h-screen font-sans"
                >

                    {/* Left Column: 2x2 Grid of Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                    >
                        {/* Top Rectangular Card */}
                        <div className="sm:col-span-2 border border-orange-500 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center">
                            <h3 className="text-xl font-bold text-[#10294b] mb-2">Reel Creation & Video Editing</h3>
                            <p className="text-gray-600 mb-1">Starts at</p>
                            <div className="text-3xl font-semibold text-orange-500 mb-3">₹3,499 / 2 reels</div>
                            <p className="text-sm text-gray-500">Scroll-stopping reels, optimized for social platforms.</p>
                        </div>

                        {/* Card 1 */}
                        <div className="bg-white border border-orange-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-bold text-[#10294b] mb-2">Digital Business Card</h3>
                            <p className="text-gray-600 mb-1">Starts at</p>
                            <div className="text-3xl font-semibold text-orange-500 mb-3">₹499</div>
                            <p className="text-sm text-gray-500">Scannable, shareable, and beautifully branded.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white border border-orange-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-bold text-[#10294b] mb-2">Logo Designing</h3>
                            <p className="text-gray-600 mb-1">Starts at</p>
                            <div className="text-3xl font-semibold text-orange-500 mb-3">₹999</div>
                            <p className="text-sm text-gray-500">Modern, clean, and brand-aligned design.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white border border-orange-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-bold text-[#10294b] mb-2">Website Development</h3>
                            <p className="text-gray-600 mb-1">Starts at</p>
                            <div className="text-3xl font-semibold text-orange-500 mb-3">₹6,999</div>
                            <p className="text-sm text-gray-500">Single-page design with responsive layout.</p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-white border border-orange-500 rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-bold text-[#10294b] mb-2">Ready to upload posts</h3>
                            <p className="text-gray-600 mb-1">Starts at</p>
                            <div className="text-3xl font-semibold text-orange-500 mb-3">₹1,999 / 2 posts</div>
                            <p className="text-sm text-gray-500">Professionally designed posts ready to upload and boost engagement.</p>
                        </div>
                    </motion.div>

                    {/* Right Column: Brand Boost Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white border border-[#10294b] rounded-2xl shadow-lg p-8 flex flex-col justify-center hover:shadow-2xl transition duration-300"
                    >
                        <h3 className="text-3xl font-bold text-[#10294b] mb-6 text-center">Social Media Growth Plan</h3>

                        <ul className="text-gray-700 text-base leading-relaxed space-y-3 mb-6">
                            <li>• 8 Ready-to-Post Posts (According to your company brand)</li>
                            <li>• 4 professional reels (for Instagram/ Youtube Short)</li>
                            <li>• Caption + Hashtag support</li>
                        </ul>

                        <div className="text-center">
                            <h1 className="text-2xl font-extrabold text-orange-500 mb-6">
                                <span className="line-through">
                                    ₹16,000 / month
                                </span>
                                <span>
                                    &nbsp;&nbsp;₹14,000 / month
                                </span>
                            </h1>
                        </div>

                    </motion.div>
                </motion.div>
            </div>
        </section >
    );
}
