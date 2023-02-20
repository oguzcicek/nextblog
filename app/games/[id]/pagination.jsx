'use client'
import ReactPaginate from "react-paginate";
import { useRouter } from 'next/navigation';
import {  usePathname ,useSearchParams } from 'next/navigation';

export default function Pagination({ meta }){
    const query = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const { total_pages } = meta['pagination']

    const pagginationHandler = (page) => {
        const currentQuery = query;
        currentQuery.page = page.selected + 1;
        router.push(pathname + `?page=${currentQuery.page}`)
    };

    return (
        <>
            <div className="pagination-area mb-30 wow fadeInUp animated">
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        previousLabel={<i className="elegant-icon arrow_left" />}
                        previousClassName={'page-link'}
                        nextLabel={<i className="elegant-icon arrow_right" />}
                        nextClassName={'page-link'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        activeClassName={'active'}
                        containerClassName={'pagination justify-content-start'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}

                        pageCount={ total_pages }
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={ pagginationHandler }
                    />
                </nav>
            </div>
        </>
    )
}