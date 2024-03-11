import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const scrollTop = () => {
    scrollTo({
        behavior: "smooth",
        top: 0,
    });
};
