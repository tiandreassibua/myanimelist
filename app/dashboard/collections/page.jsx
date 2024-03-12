import Link from "next/link";
import Image from "next/image";
import { authUserSession } from "@/lib/auth";
import { db } from "@/lib/prisma";
import Header from "@/components/Dashboard/header";

export default async function Page() {
    const user = await authUserSession();
    const collections = await db.collection.findMany({
        where: {
            user_email: user?.email,
        },
    });

    return (
        <section>
            <Header title="Koleksi saya" className="mb-5" />
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {collections?.map((item) => (
                    <Link
                        key={item.id}
                        href={`/anime/${item.anime_mal_id}`}
                        className="border-2 border-yellow-500 bg-yellow-500"
                    >
                        <div className="overflow-hidden">
                            <Image
                                src={item.anime_image}
                                alt=""
                                width={350}
                                height={350}
                                className="w-full hover:scale-105 transition-all ease-in-out duration-200"
                                priority
                            />
                        </div>
                        <div className="p-2 md:p-3">
                            <h5 className="text-sm sm:text-base md:text-lg font-semibold line-clamp-1 text-center">
                                {item.anime_title}
                            </h5>
                        </div>
                    </Link>
                ))}
            </div>
            {collections.length === 0 && (
                <p className="text-white">
                    Kamu belum punya koleksi anime nih!
                </p>
            )}
        </section>
    );
}
