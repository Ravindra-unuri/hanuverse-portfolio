// ContactSection.jsx or .tsx (depending on your project setup)
import Image from "next/image";

export default function ContactSection() {
    const team = [
        {
            name: "Ravindrasingh Unuri",
            role: "Web developer – Logo & Visuals",
            experience:
                "Over 1 year of experience in building responsive websites and web platforms using PHP (Laravel), with expertise in logo design and digital business card creation.",
            mail: "ravindraunuri@gmail.com",
            contact: 74868923895,
            image: "/assets/ravindra_unuri.jpg",
        },
        {
            name: "Siddharth Shukla",
            role: "Web Developer & DBA",
            experience:
                "Over 1 year of experience in building responsive websites and web platforms using Node.js, with expertise in graphic design and data base management.",
            mail: "sidshukla2016@gmail.com",
            contact: 74868923895,
            image: "/assets/siddharth.png",
        },
        {
            name: "Nitesh Chaubey",
            role: "Quality Analist & It Expert",
            experience:
                "Over 1 year of experience in creating engaging reels and video marketing content focused on Instagram growth.",
            mail: "sagar@example.com",
            contact: 74868923895,
            image: "/assets/nitesh.png",
        },
    ];

    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-[#F5F5F5] via-[#FFFFFF] to-[#F5F5F5] py-20 px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4 tracking-wide">
                    Meet Our Team
                </h2>
                <p className="text-[#4A4A4A] mb-12 text-lg">
                    Passionate experts ready to bring your digital vision to life.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <div key={index} className="bg-[#CFCFCF] border-gray-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 hover:shadow-[0_6px_25px_rgba(0,0,0,0.08)] transition">
                            <div>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={128}
                                    height={128}
                                    className="rounded-full object-cover mb-4 border-4 border-[#D4AF37] mx-auto"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-[#1A1A1A] tracking-wide">
                                {member.name}
                            </h3>
                            <p className="text-[#A3874A] font-medium italic">
                                {member.role}
                            </p>
                            <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                                {member.experience}
                            </p>
                            {/* <p className="text-sm text-gray-700 mt-2">
                                 {member.contact}
                            </p> */}
                            <a href={`tel:${member.contact}`} className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline">
                                📞 {member.contact}
                            </a><br />
                            <a href={`mailto:${member.mail}`} className="mt-2 inline-block text-[#007BFF] hover:underline text-sm">
                                ✉ {member.mail}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
