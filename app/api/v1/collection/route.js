import { db } from "@/lib/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email } = await request.json();

    const newCollection = await db.collection.create({
        data: {
            anime_mal_id,
            user_email,
        },
    });

    if (!newCollection) {
        return Response.json({ status: 500, success: false });
    }

    return Response.json({ status: 200, success: true });
}
