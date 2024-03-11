import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header({ title, linkHref, linkLabel, className }) {
    return (
        <div className={`flex justify-between items-center ${className}`}>
            <h1 className="text-3xl font-semibold text-white">{title}</h1>
            {linkHref && linkLabel && (
                <Button variant="link" className="text-white hover:text-yellow-500">
                    <Link href={linkHref}>{linkLabel}</Link>
                </Button>
            )}
        </div>
    );
}
