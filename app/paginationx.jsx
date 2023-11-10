'use client'
import ReactPaginate from "react-paginate";
import { useRouter } from 'next/navigation';
import { usePathname  , useSearchParams } from 'next/navigation';


export default function Pagination({meta }){
    //const pathname = usePathname();
    const query = useSearchParams();
    const router = useRouter();

    const { current_page, total_count } = meta['pagination']

    const pagginationHandler = (page) => {
        //const currentPath = pathname;
        const currentQuery = query;
        //console.log(page.selected)
        //alert(page.selected)
        currentQuery.page = page.selected + 1;
        //alert(currentQuery.page)
        if (currentQuery.page != 0 ){
            router.push(`?page=${currentQuery.page}`)

        } 

        //router.push(currentPath, { query: currentQuery.page  });
        //router.push(currentPath, { query: currentQuery.page  });
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

                        initialPage={ current_page - 1}
                        pageCount={ total_count }
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={ pagginationHandler }
                    />
                </nav>
            </div>
        </>
    )
}