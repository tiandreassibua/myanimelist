import Header from "@/components/Dashboard/header";
import { authUserSession } from "@/lib/auth";
import { db } from "@/lib/prisma";
import moment from "moment";
import Link from "next/link";

export default async function Page() {
    const user = await authUserSession();
    const comments = await db.comment.findMany({
        where: {
            user_email: user.email,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <div className="w-full">
            <Header title={"Komentar saya"} className="mb-5" />
            {comments?.length > 0 ? (
                comments?.map((comment) => (
                    <Link
                        key={comment.id}
                        href={`/anime/${comment.anime_mal_id}`}
                        className="w-full flex flex-col bg-neutral-900/30 mb-3 py-2 px-4"
                    >
                        <div className="flex justify-between items-center">
                            <h5 className="text-yellow-500 text-lg font-semibold underline">
                                {comment.anime_title}
                            </h5>
                            <span className="text-gray-500">
                                {moment(comment.createdAt).fromNow()}
                            </span>
                        </div>
                        <p className="text-white mt-2 italic font-sans">
                            {comment.body}
                        </p>
                    </Link>
                ))
            ) : (
                <p className="text-white">Belum ada komentar!</p>
            )}
        </div>
    );
}
