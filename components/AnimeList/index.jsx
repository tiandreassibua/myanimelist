import Image from "next/image";
import Link from "next/link";

export default async function dataCard({ data }) {
    return (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data?.map((anime) => (
                <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`}>
                    <div className="overflow-hidden rounded-xl h-64 sm:h-72 md:h-80 lg:h-96">
                        <Image
                            src={anime.images.webp.image_url}
                            width={600}
                            height={400}
                            alt={anime.title}
                            className="w-full h-full object-cover hover:scale-105 transition-all"
                            priority
                        />
                    </div>
                    <div className="py-2 text-yellow-500">
                        <h2
                            className="font-semibold lg:text-lg line-clamp-1"
                            title={anime.title}
                        >
                            {anime.title}
                        </h2>
                        <p className="text-slate-500 text-sm lg:text-lg">
                            {anime.year && anime.year}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
