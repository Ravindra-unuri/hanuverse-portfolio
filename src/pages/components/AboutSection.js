import DoodleCarousel from "./DoodleCarousel";

export default function AboutSection() {
    return (
        <section id="about" className="bg-white-100 dark:bg-gray-900 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-navi-blue mb-6">About Hanuverse</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    Hanuverse Digital Marketing is your creative partner in the digital world. We help brands shine online with viral-ready reels, captivating logos, and conversion-driven websites.
                </p>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-6">
                    Born out of passion and creativity, Hanuverse is here to deliver smart, trendy, and effective digital content. Whether you&apos;re a startup, creator, or business, we design to elevate your brand digitally and visually.
                </p>
                <div className="mt-8">
                    <p className="text-base font-medium text-navi-blue">
                        🚀 Let’s turn your digital vision into a powerful brand with Hanuverse.
                    </p>
                </div>
            </div>
        </section>
    );
}
