import { PrismaClient } from "@prisma/client";

var prisma;

export const db = prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
    prisma = db;
}
