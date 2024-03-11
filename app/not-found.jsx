import Link from "next/link";

import { CircleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="h-96 relative">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center gap-y-4 text-yellow-500">
                    <CircleAlert size={50} />
                    <h2 className="text-lg font-semibold">404 | Halaman Tidak ditemukan</h2>
                </div>
                <Button variant="link" asChild className="mt-5 text-white">
                    <Link href="/">Kembali ke beranda</Link>
                </Button>
            </div>
        </div>
    );
}
