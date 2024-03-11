"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function InputSearch() {
    const searchRef = useRef();
    const router = useRouter();

    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            e.preventDefault();
            const keyword = searchRef.current.value;

            if (keyword.trim()) {
                return router.push(`/search/${keyword}`);
            }

            return;
        }

        return;
    };

    return (
        <div className="w-full relative">
            <Input
                placeholder="Search anime..."
                className="pr-12"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button
                className="absolute p-[6px] top-[1px] right-2 hover:cursor-pointer text-gray-500 hover:text-gray-800 duration-200"
                onClick={handleSearch}
            >
                <Search className="w-5" />
            </button>
        </div>
    );
}
