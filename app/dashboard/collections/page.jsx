import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/Shared/back-button";
import { authUserSession } from "@/lib/auth";
import { db } from "@/lib/prisma";

export default async function Page() {
    const user = await authUserSession();
    const collections = await db.collection.findMany({
        where: {
            user_email: user?.email,
        },
    });

    return (
        <section>
            <div className="flex justify-between items-center">
                <BackButton />
                <h3 className="text-2xl font-bold text-white">Koleksi saya</h3>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {collections?.map((item) => (
                    <Link
                        key={item.id}
                        href={`/anime/${item.anime_mal_id}`}
                        className="border-2 border-yellow-500 bg-yellow-500"
                    >
                        <Image
                            src={
                                "https://cdn.myanimelist.net/images/anime/1015/138006.jpg"
                            }
                            alt=""
                            width={350}
                            height={350}
                            className="w-full"
                            priority
                        />
                        <div className="p-2 md:p-3">
                            <h5 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-1 text-center">
                                {item.anime_mal_id}
                            </h5>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
