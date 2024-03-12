import { Gabarito } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import ButtonScroll from "@/components/Shared/button-scroll";
import { Toaster } from "@/components/ui/toaster";

const gabarito = Gabarito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
    title: "AnimeKu"
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${gabarito.className} bg-neutral-800 md:px-2`}>
                <Navbar />
                <div className="container mx-auto my-10 relative">
                    {children}
                    <ButtonScroll />
                    <Toaster />
                </div>
            </body>
        </html>
    );
}
