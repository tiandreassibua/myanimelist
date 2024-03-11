import Link from "next/link";
import InputSearch from "@/components/Navbar/input-search";
import ActionButton from "@/components/Navbar/action-button";

export default function Navbar() {
    return (
        <div className="sticky top-0 md:top-2 md:rounded-lg mt-0 md:mt-5 py-5 container mx-auto bg-yellow-500 shadow-md z-50">
            <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-slate-800 text-center md:text-left"
                >
                    AnimeKu
                </Link>
                <div>
                    <InputSearch />
                </div>
                <ActionButton />
            </nav>
        </div>
    );
}
