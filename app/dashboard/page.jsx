import Image from "next/image";
import Link from "next/link";

import { authUserSession } from "@/lib/auth";
import { Button } from "@/components/ui/button";

export default async function Page() {
    const user = await authUserSession();
    return (
        <div className="max-w-md p-10 mx-auto rounded-xl shadow-lg bg-neutral-900/20">
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-lg text-white">
                    Selamat datang,{" "}
                    <span className="text-yellow-500">{user.name}</span>
                </h1>
                <Image
                    src={user?.image}
                    alt="profile image"
                    width={200}
                    height={200}
                    className="rounded-full shadow-md shadow-neutral-900"
                    priority
                />
                <div className="mt-8 space-x-4">
                    <Button
                        className="bg-yellow-500 text-neutral-800 hover:bg-yellow-500/90 font-semibold"
                        asChild
                    >
                        <Link href="/dashboard/collections">Koleksi saya</Link>
                    </Button>
                    <Button
                        className="bg-yellow-500 text-neutral-800 hover:bg-yellow-500/90 font-semibold"
                        asChild
                    >
                        <Link href="/dashboard/comments">Komentar saya</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
