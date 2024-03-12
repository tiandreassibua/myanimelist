import { db } from "@/lib/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, user_name, body, anime_title } =
        await request.json();

    const comment = await db.comment.create({
        data: {
            anime_mal_id,
            user_email,
            user_name,
            body,
            anime_title,
        },
    });

    if (!comment) {
        return Response.json({ status: 500, success: false });
    }

    return Response.json({ status: 200, success: true });
}
