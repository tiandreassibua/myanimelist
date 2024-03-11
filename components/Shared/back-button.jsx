"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LuChevronLeft } from "react-icons/lu";

export default function BackButton() {
    const router = useRouter();

    return (
        <Button variant="secondary" size="icon" onClick={() => router.back()}>
            <LuChevronLeft size={20} />
        </Button>
    );
}
