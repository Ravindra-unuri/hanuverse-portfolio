import Head from "next/head";

export default function AboutSection() {
    return (
        <section id="about" className="bg-white py-16 px-6">
            <Head>
                <title>About Hanuverse | Digital Marketing Agency</title>
                <meta
                    name="description"
                    content="Learn about Hanuverse — a creative digital marketing agency helping brands grow online with viral reels, designs, and websites."
                />
                <meta
                    name="keywords"
                    content="Hanuverse, digital marketing, social media, branding, website design"
                />
                <meta property="og:title" content="About Hanuverse" />
                <meta
                    property="og:description"
                    content="We help businesses grow digitally with creative marketing strategies and visual branding."
                />
                <meta property="og:type" content="website" />
            </Head>

            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl text-black font-bold mb-6">About Hanuverse</h2>
                <p className="text-lg text-gray-400 mb-6">
                    Hanuverse Digital Marketing is your creative partner in the digital world. We help brands shine online with viral-ready reels, captivating logos, and conversion-driven websites.
                </p>
                <p className="text-md text-gray-400 mb-6">
                    Born out of passion and creativity, Hanuverse is here to deliver smart, trendy, and effective digital content. Whether you're a startup, creator, or business, we design to elevate your brand digitally and visually.
                </p>
                <div className="mt-8">
                    <p className="text-base text-black font-medium">
                        🚀 Let’s turn your digital vision into a powerful brand with Hanuverse.
                    </p>
                </div>
            </div>
        </section>
    );
}
