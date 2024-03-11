import Link from "next/link";

import InputSearch from "@/components/Navbar/input-search";
import { Button } from "../ui/button";
import { LuGithub } from "react-icons/lu";

export default function Navbar() {
    return (
        <div className="sticky top-0 md:top-2 md:rounded-lg mt-0 md:mt-5 py-5 container mx-auto bg-yellow-500 shadow-md z-50">
            <nav className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                <div className="w-full md:w-0 flex justify-between items-center">
                    <Link
                        href="/"
                        className="text-2xl md:text-3xl font-bold text-slate-800"
                    >
                        MyAnimeList
                    </Link>
                    <Button className="md:hidden">
                        <LuGithub className="mr-1" size={15} />
                        SIGN IN
                    </Button>
                </div>
                <div>
                    <InputSearch />
                </div>
                <Button className="hidden md:flex">
                    <LuGithub className="mr-1" size={15} />
                    SIGN IN
                </Button>
            </nav>
        </div>
    );
}
