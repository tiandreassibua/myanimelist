import Link from "next/link";

import { Button } from "@/components/ui/button";

import { authUserSession } from "@/lib/auth";

export default async function ActionButton() {
    const user = await authUserSession();
    const actionLabel = user ? "SIGN OUT" : "SIGN IN";
    const actionUrl = user ? "/api/auth/signout" : "/api/auth/signin";
    return (
        <div className="flex items-center justify-between gap-5">
            {user && (
                <Link
                    href="/dashboard"
                    className="font-semibold hover:underline text-lg text-neutral-800"
                >
                    Dashboard
                </Link>
            )}
            <Button asChild>
                <Link href={actionUrl}>{actionLabel}</Link>
            </Button>
        </div>
    );
}
