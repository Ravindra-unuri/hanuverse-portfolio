import DoodleCarousel from "./DoodleCarousel";

export default function HeroSection() {
    return (
        <section id="home" className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 hero-content">
                <div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-6">
                        Grow Your Brand with <span className="text-orange-500">Hanuverse</span>
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
    );
}
