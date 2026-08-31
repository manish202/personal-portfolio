import { type InitialStateType, type HandlePaginationType } from "./constantsAndTypes";

type PaginationPropsType = {
    state: InitialStateType,
    handlePagination: HandlePaginationType
}

const Pagination = ({state,handlePagination}:PaginationPropsType) => {
    const totalPages = Math.ceil(state.totalRecords / state.limit);
    return (
        <ul className="pagination justify-content-center mb-0 my-4">
            {state.page > 1 && (
                <li className="page-item">
                    <button className="page-link" onClick={() => handlePagination('prev')}>Previous</button>
                </li>
            )}
            <li className="page-item disabled">
                <a className="page-link" href="#">
                    Total Records {state.totalRecords} | Page {state.page}/{totalPages}
                </a>
            </li>
            {state.page < totalPages && (
                <li className="page-item">
                    <button className="page-link" onClick={() => handlePagination('next')}>Next</button>
                </li>
            )}
        </ul>
    )
}

export default Pagination;