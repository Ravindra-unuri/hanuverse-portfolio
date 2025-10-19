import Head from "next/head";
import { motion } from "framer-motion";

export default function ServiceSection() {
    return (
        <section id="services" className="bg-white dark:bg-gray-950 py-20 px-6">
            {/* ✅ SEO Meta Tags */}
            <Head>
                <title>Our Services | Hanuverse Digital Marketing Agency</title>
                <meta
                    name="description"
                    content="Discover Hanuverse's professional digital services including website development, logo design, reel creation, and digital business card solutions to help your brand grow online."
                />
                <meta
                    name="keywords"
                    content="Hanuverse services, digital marketing, website development, logo design, reel creation, digital business cards, social media marketing"
                />
                <meta property="og:title" content="Our Services | Hanuverse Digital Marketing" />
                <meta
                    property="og:description"
                    content="We deliver creative, fast, and modern digital marketing services like website development, logo designing, and social media content creation."
                />
                <meta
                    property="og:image"
                    content="/Images/services-preview.png"
                />
                <meta property="og:type" content="website" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#0A192F] dark:text-white mb-4">Our Services</h2>
                <p className="text-[#2E2E2E] dark:text-gray-400 mb-12 text-lg">
                    Hanuverse delivers fast, modern, and creative digital solutions to help you shine online.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-5"
                >
                    {/* Website Development */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">💻</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Website Development
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Modern, responsive, and conversion-focused websites built for performance and growth.
                        </p>
                    </div>

                    {/* Logo Designing */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🎨</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Logo Designing
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Creative and memorable logos that reflect your brand&apos;s identity with a clean and professional look.
                        </p>
                    </div>

                    {/* Reel Creation */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🎥</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Reel Creation
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Eye-catching, trendy, and ready-to-upload reels to boost your social media engagement and brand presence.
                        </p>
                    </div>

                    {/* Digital Business Card Creation */}
                    <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-l-4 border-orange-500 shadow-md hover:shadow-lg hover:shadow-[#3AAFA950] transition-all duration-300">
                        <div className="text-5xl mb-4">🪪</div>
                        <h3 className="text-xl font-semibold mb-2 text-[#0A192F] dark:text-white">
                            Digital Business Cards
                        </h3>
                        <p className="text-[#2E2E2E] dark:text-gray-300">
                            Smart, scannable, and sleek digital business cards to represent your brand in the modern world.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
