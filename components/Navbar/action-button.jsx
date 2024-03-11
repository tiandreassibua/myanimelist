import Link from "next/link";

import { Button } from "@/components/ui/button";

import { authUserSession } from "@/lib/auth";

export default async function ActionButton() {
    const user = await authUserSession();
    const actionLabel = user ? "SIGN OUT" : "SIGN IN";
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <div className={`flex items-center gap-5 ${user ? "justify-between" : "justify-end"}`}>
            {user && (
                <Link
                    href="/dashboard"
                    className="font-semibold hover:underline text-lg text-neutral-800"
                >
                    Dashboard
                </Link>
            )}
            <Button className="bg-neutral-800" asChild>
                <Link href={actionUrl}>{actionLabel}</Link>
            </Button>
        </div>
    );
}
