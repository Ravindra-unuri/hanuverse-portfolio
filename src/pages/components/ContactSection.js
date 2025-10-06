import { IoPersonSharp } from "react-icons/io5";

export default function ContactSection() {
    const team = [
        {
            name: "Ravindrasingh Unuri",
            role: "Web developer – Logo & Visuals",
            experience:
                "Over 1 year of experience in building responsive websites and web platforms using PHP (Laravel) & NextJs, with expertise in logo design and digital business card creation.",
            image: "/assets/nitesh.png",
        },
        {
            name: "Siddharth Shukla",
            role: "Web Developer & DBA",
            experience:
                "Over 1 year of experience in building responsive websites and web platforms using Node.js, with expertise in graphic design and data base management.",
            image: "/assets/siddharth.png",
        },
        {
            name: "Nitesh Chaubey",
            role: "Quality Analist & It Expert",
            experience:
                "Over a year of solid QA engineering experience and experience in building responsive websites and web platforms using PHP (Laravel).",
            image: "/assets/nitesh.png",
        },
        {
            name: "Abhishek Ganvir",
            role: "Video Editor",
            experience:
                "Over 1 year of experience in creating engaging reels and video marketing content focused on Instagram growth.",
            image: "/assets/nitesh.png",
        },
    ];

    return (
        <section
            id="contact"
            className="bg-white py-20 px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 tracking-wide">
                    Meet Our Team
                </h2>
                <p className="text-[#4A4A4A] mb-12 text-lg">
                    Passionate experts ready to bring your digital vision to life.
                </p>

                <div className="grid md:grid-cols-4 gap-5">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white border border-gray-200 dark:border-gray-800 rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)] transition">
                            <div>
                                <IoPersonSharp
                                    className="rounded-full h-25 w-25 text-[#10294b] object-cover mb-4 border-4 border-orange-500 mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-[#10294b] tracking-wide">
                                {member.name}
                            </h3>
                            <p className="text-orange-500 font-medium italic">
                                {member.role}
                            </p>
                            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                                {member.experience}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
