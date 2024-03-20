interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
  currentPage: number;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const visiblePages = Array.from({ length: Math.min(totalPages, 10) });

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => onPageChange(currentPage - 1)}
            className={`page-link ${currentPage <= 1 ? "disabled" : ""}`}
            href="#"
          >
            Previous
          </a>
        </li>
        {Array.from({ length: totalPages }).map((_, index) => (
          <li
            key={index}
            className={`page-item ${currentPage == index + 1 ? "active" : ""}`}
          >
            <a
              onClick={() => onPageChange(index + 1)}
              className="page-link"
              href="#"
            >
              {index + 1}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            onClick={() => onPageChange(currentPage + 1)}
            className={`page-link ${
              currentPage >= visiblePages.length ? "disabled" : ""
            }`}
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
