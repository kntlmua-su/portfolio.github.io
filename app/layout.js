import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Fahmi Aditya",
  description:
    "My name is Fahmi Aditya. I am a dedicated multimedia student passionate about digital creation and visual storytelling. I am currently studying at SMKN 1 SOOKO, where I explore various aspects of multimedia technology. I love to learn and adapt to new creative tools and technologies in the digital world. My interests span across graphic design, video editing, photography, and web development. I am eager to transform ideas into engaging visual content and am enthusiastic about pursuing opportunities in the multimedia industry. I am open to collaborations and projects that align with my creative skills and multimedia expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
