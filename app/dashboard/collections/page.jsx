import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/Shared/back-button";

export default function Page() {
    return (
        <section>
            <div className="flex justify-between items-center">
                <BackButton />
                <h3 className="text-2xl font-bold text-white">Koleksi saya</h3>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
                <Link
                    href="/"
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
                    <div className="py-2 md:py-3">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-center">
                            Judul anime disini
                        </h5>
                    </div>
                </Link>
                <Link
                    href="/"
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
                    <div className="py-2 md:py-3">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-center">
                            Judul anime disini
                        </h5>
                    </div>
                </Link>
                <Link
                    href="/"
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
                    <div className="py-2 md:py-3">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-center">
                            Judul anime disini
                        </h5>
                    </div>
                </Link>
                <Link
                    href="/"
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
                    <div className="py-2 md:py-3">
                        <h5 className="text-sm sm:text-base md:text-lg font-semibold text-center">
                            Judul anime disini
                        </h5>
                    </div>
                </Link>
            </div>
        </section>
    );
}
