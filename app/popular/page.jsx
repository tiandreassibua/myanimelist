"use client";

import { getAnimeResponse } from "@/actions";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Shared/pagination";
import HeaderMenu from "@/components/Shared/header-menu";
import { useState, useEffect } from "react";

export default function PopularPage() {
    const [page, setPage] = useState(1);
    const [popularAnime, setPopularAnime] = useState([]);

    const fetchData = async () => {
        const popularAnime = await getAnimeResponse(
            "top/anime",
            `page=${page}`
        );
        setPopularAnime(popularAnime);
    };
    
    useEffect(() => {
        fetchData();
    }, [page]);

    return (
        <>
            <section className="mt-10">
                <HeaderMenu title={`Anime Terpopuler #${page}`} />
                <AnimeList data={popularAnime.data} />
                <Pagination
                    page={page}
                    setPage={setPage}
                    lastPage={popularAnime.pagination?.last_visible_page}
                />
            </section>
        </>
    );
}
