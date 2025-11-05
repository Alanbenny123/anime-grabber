import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl,
}: PaginationProps) {
  // Generate array of page numbers to show
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // If total pages is less than max, show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // If near start, show first 5 pages
        for (let i = 2; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // If near end, show last 5 pages
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // If in middle, show current page and neighbors
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="mt-12 flex justify-center">
      <div className="inline-flex items-center gap-1">
        {/* Previous button */}
        <Link
          href={currentPage > 1 ? `${baseUrl}/${currentPage - 1}` : baseUrl}
          className={`px-4 py-2 rounded-l-md font-medium transition-colors ${
            currentPage === 1
              ? "bg-[#1f2937] text-gray-500 cursor-not-allowed"
              : "bg-[#1f2937] text-white hover:bg-[#374151]"
          }`}
          aria-disabled={currentPage === 1}
        >
          Previous
        </Link>

        {/* Page numbers */}
        {pageNumbers.map((pageNum, index) =>
          pageNum === -1 ? (
            <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-500">
              ...
            </span>
          ) : (
            <Link
              key={pageNum}
              href={pageNum === 1 ? baseUrl : `${baseUrl}/${pageNum}`}
              className={`px-4 py-2 font-medium transition-colors ${
                currentPage === pageNum
                  ? "bg-blue-600 text-white"
                  : "bg-[#1f2937] text-white hover:bg-[#374151]"
              }`}
            >
              {pageNum}
            </Link>
          )
        )}

        {/* Next button */}
        <Link
          href={`${baseUrl}/${currentPage + 1}`}
          className={`px-4 py-2 rounded-r-md font-medium transition-colors ${
            currentPage === totalPages
              ? "bg-[#1f2937] text-gray-500 cursor-not-allowed"
              : "bg-[#1f2937] text-white hover:bg-[#374151]"
          }`}
          aria-disabled={currentPage === totalPages}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
