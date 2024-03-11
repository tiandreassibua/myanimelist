"use client";

import { Button } from "@/components/ui/button";
import { FaChevronUp } from "react-icons/fa";
import { scrollTop } from "@/lib/utils";

export default function ButtonScroll() {
    return (
        <Button
            size="icon"
            className="fixed rounded-full z-50 bottom-5 right-5"
            onClick={scrollTop}
        >
            <FaChevronUp className="text-yellow-500" />
        </Button>
    );
}
