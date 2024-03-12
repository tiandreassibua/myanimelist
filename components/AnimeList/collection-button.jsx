"use client";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function CollectionButton({ anime_mal_id, user_email, exist }) {
    const { toast } = useToast();
    const router = useRouter();

    const handleCollection = async (e) => {
        e.preventDefault();

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify({ anime_mal_id, user_email }),
        });

        const collection = await response.json();
        if (collection.status === 200) {
            toast({
                description: "Berhasil ditambahkan ke koleksi saya.",
                variant: "default",
            });

            router.refresh();
        }
    };

    return (
        <Button
            variant="secondary"
            size="icon"
            className="rounded-full ml-5"
            title="Tambahkan ke koleksi"
            onClick={handleCollection}
            disabled={exist}
        >
            {exist ? (
                <IoBookmark size={22} className="text-neutral-900" />
            ) : (
                <IoBookmarkOutline size={22} className="text-neutral-900" />
            )}
        </Button>
    );
}
