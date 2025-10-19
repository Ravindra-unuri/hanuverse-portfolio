import Head from "next/head";
import DoodleCarousel from "./DoodleCarousel";

export default function HeroSection() {
    return (
        <>
            <Head>
                <title>Grow Your Brand with Hanuverse | Digital Marketing & Design Agency</title>
                <meta
                    name="description"
                    content="Hanuverse helps your business grow digitally with powerful marketing, branding, and creative design solutions. Scale your business with us today!"
                />
                <meta
                    name="keywords"
                    content="Hanuverse, digital marketing agency, branding, web design, social media marketing, business growth, online marketing, creative agency"
                />
                <meta name="author" content="Hanuverse Digital Agency" />
                <meta property="og:title" content="Grow Your Brand with Hanuverse" />
                <meta
                    property="og:description"
                    content="We create digital experiences that help your business scale — from marketing to design, all in one place."
                />
                <meta property="og:image" content="/Images/og-image-hanuverse.jpg" />
                <meta property="og:url" content="https://www.hanuverse.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Grow Your Brand with Hanuverse" />
                <meta
                    name="twitter:description"
                    content="Hanuverse helps your business grow digitally with powerful marketing and design solutions."
                />
                <meta name="twitter:image" content="/Images/og-image-hanuverse.jpg" />
                <link rel="canonical" href="https://www.hanuverse.com" />
            </Head>

            <section id="home" className="bg-white py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 hero-content">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-6">
                            Grow Your Brand with{" "}
                            <span className="text-orange-500">Hanuverse</span>
                        </h1>
                        <p className="text-lg text-gray-700 mb-6">
                            We create digital experiences that help your business scale — from marketing to design, all in one place.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-orange-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-[#0A192F] hover:text-white transition"
                        >
                            Submit Proposal
                        </a>
                    </div>
                    <DoodleCarousel />
                </div>
            </section>
        </>
    );
}
