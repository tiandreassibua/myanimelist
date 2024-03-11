import { getServerSession } from "next-auth";
import { OPTIONS } from "@/app/api/auth/[[...nextauth]]/route";

export const authUserSession = async () => {
    const session = await getServerSession(OPTIONS);
    return session?.user;
};
