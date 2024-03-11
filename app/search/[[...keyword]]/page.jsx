import { getAnimeResponse } from "@/actions";
import Header from "@/components/AnimeList/header";
import AnimeList from "@/components/AnimeList";

export default async function Page({ params }) {
    let { keyword } = params;

    keyword = decodeURI(keyword);

    const result = await getAnimeResponse("anime", `q=${keyword}&limit=15`);
    const popular = await getAnimeResponse("top/anime", "limit=10");
    
    return (
        <>
            <section className="mt-16">
                <Header
                    title={`Pencarian anda: ${keyword ? `"${keyword}"` : ""}`}
                />
                {!result.data.length > 0 && (
                    <>
                        <p className="mt-2 text-red-500">
                            Pencarian &quot;{keyword}&quot; tidak ditemukan
                        </p>
                    </>
                )}

                {result.data.length > 1 && <AnimeList data={result.data} />}
            </section>
            <section className="mt-16">
                <Header title={`Paling Populer saat ini`} />
                <AnimeList data={popular.data} />
            </section>
        </>
    );
}
