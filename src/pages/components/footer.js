import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full border-t mt-10">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Hanuverse Digital. All rights reserved.</p>
                <div className="flex gap-4 mt-4 sm:mt-0">
                    <Link href="mailto:ravindraunuri@gmail.com" aria-label="Email">
                        <Mail className="w-5 h-5 hover:text-black" />
                    </Link>
                    <Link href="https://www.instagram.com/hanuverse_digital_marketing?igsh=MWpzeXI4amswMDg1YQ==" target="_blank" aria-label="Instagram">
                        <Instagram className="w-5 h-5 hover:text-black" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
