"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import moment from "moment";

export function CommentInput({ anime_mal_id, anime_title, user }) {
    const [comment, setComment] = useState("");
    const router = useRouter();
    const handleClick = async (e) => {
        e.preventDefault();
        if (comment.trim() !== "" && comment.trim().length >= 3) {
            const response = await fetch("/api/v1/comments", {
                method: "POST",
                body: JSON.stringify({
                    body: comment,
                    anime_mal_id,
                    user_name: user.name,
                    user_email: user.email,
                    anime_title,
                }),
            });

            const res = await response.json();

            if (res.status === 200) {
                toast({
                    description: "Komentar berhasil diposting",
                });
                setComment("");
                router.refresh();
            }
        }
        return;
    };
    return (
        <div className="space-y-3">
            <Textarea
                placeholder="Ayooo ramekan kolom komentar, minmal 3 karakter"
                onChange={(e) => setComment(e.target.value)}
            />
            <Button
                className="w-full md:w-fit bg-yellow-500 text-neutral-800 font-semibold hover:bg-yellow-500/90"
                onClick={handleClick}
                disabled={comment.trim().length < 3}
            >
                Posting komentar
            </Button>
        </div>
    );
}

export function Comments({ comments }) {
    return (
        <div className="w-full pb-10 mt-5">
            {comments?.length > 0 ? (
                comments?.map((comment) => (
                    <div
                        key={comment.id}
                        className="bg-neutral-900/30 mb-3 py-2 px-4"
                    >
                        <div className="flex justify-between items-center">
                            <h5 className="text-yellow-500 text-lg font-semibold underline">
                                {comment.user_name}
                            </h5>
                            <span className="text-gray-500">
                                {moment(comment.createdAt).fromNow()}
                            </span>
                        </div>
                        <p className="text-white mt-2 italic font-sans">
                            {comment.body}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-white">Belum ada komentar!</p>
            )}
        </div>
    );
}
