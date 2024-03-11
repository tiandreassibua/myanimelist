import Image from "next/image";

import { authUserSession } from "@/lib/auth";

export default async function Page() {
    const user = await authUserSession();
    return (
        <div className="flex items-center gap-5">
            <Image
                src={user?.image}
                alt="profile image"
                width={100}
                height={100}
                className="rounded-full"
            />
            <h2 className="text-white text-xl">{user?.name}</h2>
        </div>
    );
}
