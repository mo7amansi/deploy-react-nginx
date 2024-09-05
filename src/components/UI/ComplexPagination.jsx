import {
  redirect,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";

/**
 * Renders a pagination component.
 * @returns {JSX.Element} The pagination component.
 */
const complexPagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePaginate = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPaginationButtons = ({ paginationNumber, activeClass }) => {
    return (
      <button
        key={paginationNumber}
        className={`btn join-item ${
          activeClass ? "bg-base-300 border border-base-300" : ""
        }`}
        onClick={() => handlePaginate(paginationNumber)}
      >
        {paginationNumber}
      </button>
    );
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];

    // FIRST BUTTON
    paginationButtons.push(
      addPaginationButtons({ paginationNumber: 1, activeClass: page === 1 })
    );

    // DOTS BETWEEN THE FIRST AND THE CURRENT BUTTON
    if (page > 2) {
      paginationButtons.push(
        <button key="dots-1" className="btn join-item">
          ...
        </button>
      );
    }

    // CURRENT / ACTIVE BUTTON
    if (page !== 1 && page !== pageCount) {
      paginationButtons.push(
        addPaginationButtons({ paginationNumber: page, activeClass: true })
      );
    }

    // DOTS BETWEEN THE CURRENT BUTTON AND THE LAST ONE
    if (page < pageCount - 1) {
      paginationButtons.push(
        <button key="dots-2" className="btn join-item">
          ...
        </button>
      );
    }

    // LAST BUTTON
    paginationButtons.push(
      addPaginationButtons({
        paginationNumber: pageCount,
        activeClass: page === pageCount,
      })
    );

    return paginationButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="justify-end w-full mt-12 mb-6 join">
      <button
        className="uppercase join-item btn"
        onClick={() => {
          let prev = page - 1;
          if (prev < 1) prev = pageCount;
          handlePaginate(prev);
        }}
      >
        Prev
      </button>
      {renderPaginationButtons()}
      <button
        className="uppercase join-item btn"
        onClick={() => {
          let next = page + 1;
          if (next > pageCount) next = 1;
          handlePaginate(next);
        }}
      >
        next
      </button>
    </div>
  );
};

export default complexPagination;
