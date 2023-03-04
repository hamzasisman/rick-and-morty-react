
const Pagination = ({ totalCount, limit, start, setStart, currentPage, setCurrentPage, setLoading, loadScreen = false }) => {

    const strings = useLocalization();

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            {pageNumbers.length > 1 && (
                <div>
                    <ul className="flex gap-1 justify-end mt-4">
                        <li>
                            <button type="button" className="button hover-effect h-9 w-14 cursor-pointer hover:bg-card focus:bg-primary focus:text-white"
                                onClick={() => {
                                    if (currentPage !== 1) {
                                        setStart(start - limit);
                                        setCurrentPage(currentPage - 1);
                                        loadScreen && setLoading(true);
                                    }
                                }}>Geri</button>
                        </li>
                        {pageNumbers && pageNumbers.map((num, index) => (
                            <li key={index}>
                                <a className={`button hover-effect h-9 w-5 hover:bg-card cursor-pointer shadow-none focus:bg-primary focus:text-white ${currentPage === num && "active-button"}`}
                                    onClick={() => {
                                        if (pageNumbers.length > 1) {
                                            setStart((limit * num) - limit)
                                            setCurrentPage(num);
                                            loadScreen && setLoading(true);
                                        }
                                    }
                                    }>{num}</a>
                            </li>
                        ))}

                        <li>
                            <button type="button" className="button hover-effect h-9 w-14 cursor-pointer hover:bg-card focus:bg-blue focus:text-white"
                                onClick={() => {
                                    if (currentPage !== Math.ceil(totalCount / limit)) {
                                        setStart(start + limit);
                                        setCurrentPage(currentPage + 1);
                                        loadScreen && setLoading(true);
                                    }
                                }}>İleri</button>
                        </li>
                    </ul>
                </div>
            )
            }
        </>
    )
}

export default Pagination