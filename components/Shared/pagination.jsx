import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pagination({ page, setPage, lastPage }) {
    const handleNextPage = () => {
        if (page < lastPage) {
            setPage((prev) => prev + 1);
        }

        return;
    };
    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
        }

        return;
    };

    return (
        <div className="flex items-center justify-center gap-4 my-10 mt-5">
            <Button
                onClick={handlePrevPage}
                variant="link"
                disabled={page === 1}
                className="text-white hover:text-yellow-500"
            >
                <ChevronLeft />
                prev
            </Button>
            <p className="text-white">
                {page} of{" "}
                <span
                    className="hover:cursor-pointer hover:text-yellow-500"
                    onClick={() => setPage(lastPage)}
                >
                    {lastPage}
                </span>
            </p>
            <Button
                onClick={handleNextPage}
                variant="link"
                disabled={page === lastPage}
                className="text-white hover:text-yellow-500"
            >
                next
                <ChevronRight />
            </Button>
        </div>
    );
}
