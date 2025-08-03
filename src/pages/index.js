import ContentBody from "./components/ContentBody";
import NavBar from "./components/NavigationHeader";
import Footer from "./components/footer";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <ContentBody />
      </main>
      <Footer />
    </div>
  )
}
