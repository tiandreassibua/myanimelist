-- CreateTable
CREATE TABLE "collections" (
    "id" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,

    CONSTRAINT "collections_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collections_anime_mal_id_user_email_key" ON "collections"("anime_mal_id", "user_email");
