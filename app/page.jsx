import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

import { getAnimeResponse, getNestedAnimeResponse } from "@/actions";

export default async function Home() {
    const topAnime = await getAnimeResponse("top/anime","limit=10&filter=bypopularity");
    const upcomingAnime = await getAnimeResponse("top/anime","limit=10&filter=upcoming");
    
    let recommendedAnime = await getNestedAnimeResponse("recommendations/anime","entry");
    recommendedAnime = recommendedAnime.sort(() => Math.random() - 0.5).slice(0, 10);
    
    return (
        <>
            <section className="">
                <Header
                    title="Paling Populer"
                    linkHref="/popular"
                    linkLabel="Lihat semua"
                />
                <AnimeList data={topAnime.data} />
            </section>
            <section className="mt-10">
                <Header
                    title="Upcoming"
                    linkHref="/upcoming"
                    linkLabel="Lihat semua"
                />
                <AnimeList data={upcomingAnime.data} />
            </section>
            <section className="mt-10">
                <Header title="Rekomendasi" />
                <AnimeList data={recommendedAnime} />
            </section>
        </>
    );
}
