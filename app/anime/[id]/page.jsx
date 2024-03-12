import Image from "next/image";
import { FaFilm, FaHashtag, FaStar, FaUsers } from "react-icons/fa";

import { getAnimeResponse } from "@/actions";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import VideoPlayer from "@/components/Shared/video-player";
import CollectionButton from "@/components/AnimeList/collection-button";
import { authUserSession } from "@/lib/auth";
import { db } from "@/lib/prisma";
import { CommentInput, Comments } from "@/components/AnimeList/comment";

export const metadata = {};

export default async function Page({ params: { id } }) {
    let anime = await getAnimeResponse(`anime/${id}`);
    anime = anime?.data;

    metadata.title = `MyAnimeList | ${anime.title}`;

    let animePics = await getAnimeResponse(`anime/${id}/pictures`);

    const user = await authUserSession();

    const collection = await db.collection.findFirst({
        where: {
            user_email: user?.email,
            anime_mal_id: id,
        },
    });

    const comments = await db.comment.findMany({
        where: {
            anime_mal_id: id,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <>
            <div className="mt-10">
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 sm:gap-x-5">
                        <div className="w-full">
                            <Image
                                src={anime.images.webp.image_url}
                                width={600}
                                height={600}
                                alt={anime.title}
                                className="w-full object-cover object-center"
                            />
                            <div className="w-full">
                                <VideoPlayer
                                    youtubeId={anime.trailer.youtube_id}
                                    width={432}
                                />
                            </div>
                        </div>
                        <div className="col-span-2 mt-10 md:m-0">
                            <div>
                                <h1 className="flex items-center justify-between sm:justify-normal text-2xl md:text-4xl font-bold text-white">
                                    <span>
                                        {anime.title}{" "}
                                        {anime.year && `(${anime.year})`}
                                    </span>
                                    <CollectionButton
                                        anime_mal_id={id}
                                        user_email={user?.email}
                                        anime_image={
                                            anime.images.webp.image_url
                                        }
                                        anime_title={anime.title}
                                        exist={collection ? true : false}
                                    />
                                </h1>
                                <p className="mt-1 text-neutral-500">
                                    {anime.rating}
                                </p>

                                <div className="mt-2 flex flex-wrap gap-3">
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-500"
                                    >
                                        <FaHashtag />
                                        <span className="ml-1">
                                            {anime.rank}
                                        </span>
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-500"
                                    >
                                        <FaStar />
                                        <span className="ml-1">
                                            {anime.score}
                                        </span>
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-500"
                                    >
                                        <FaUsers />
                                        <span className="ml-1">
                                            {anime.members}
                                        </span>
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-500"
                                    >
                                        <FaFilm />
                                        <span className="ml-1">
                                            {anime.episodes}
                                        </span>
                                    </Badge>
                                    <Badge
                                        variant="secondary"
                                        className="bg-yellow-500"
                                    >
                                        <span className="ml-1">
                                            {anime.rating}
                                        </span>
                                    </Badge>
                                </div>
                            </div>
                            <Separator className="mt-5 bg-neutral-700 h-1" />
                            <div className="mt-5">
                                <h2 className="text-xl md:text-3xl font-semibold text-white">
                                    Sinopsis
                                </h2>
                                <p className="text-white/50 font-light">
                                    {anime.synopsis}
                                </p>
                            </div>
                            <div className="mt-5">
                                <h2 className="text-xl md:text-3xl font-semibold text-white">
                                    Pictures
                                </h2>

                                <div className="w-full mt-5 px-12">
                                    <Carousel>
                                        <CarouselContent className="px-5">
                                            {animePics.data?.map(
                                                (item, index) => (
                                                    <CarouselItem
                                                        key={index}
                                                        className="w-full basis-1/2 md:basis-1/3 lg:basis-1/4"
                                                    >
                                                        <div className="h-full rounded-md overflow-hidden shadow">
                                                            <Image
                                                                src={
                                                                    item.jpg
                                                                        .image_url
                                                                }
                                                                width={100}
                                                                height={100}
                                                                alt={
                                                                    item.jpg
                                                                        .image_url
                                                                }
                                                                priority={true}
                                                                className="w-full h-full object-cover hover:scale-105 transition-all duration-200"
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                )
                                            )}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>
                            </div>
                            <div className="mt-10 max-w-xl">
                                <h2 className="mb-5 text-xl md:text-3xl font-semibold text-white">
                                    Komentar
                                </h2>
                                {user && (
                                    <CommentInput
                                        anime_mal_id={id}
                                        anime_title={anime.title}
                                        user={user}
                                    />
                                )}
                                <Comments comments={comments} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
