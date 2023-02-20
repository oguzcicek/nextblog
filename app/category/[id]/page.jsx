import Link from "next/link";
import Pagination from './pagination'

const getCategoryData = async (categorySlug, page) => {
    const res = await fetch(`http://localhost:3001/api/v1/get_by_category/` + categorySlug + `?page=${page}` );
    return res.json();
}

export default async function Home(props) {
  const { data , meta  } = await getCategoryData(props.params.id, props.searchParams.page );
  return(
      <main>
          <div className="pb-50">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                          <div className="post-module-3">
                              <div className="loop-list loop-list-style-1">
                                  {data && data?.map( c =>
                                      <article key={c.attributes.id} className="hover-up-2 transition-normal wow fadeInUp animated">
                                          <div className="row mb-40 list-style-2">
                                              <div className="col-md-4">
                                                  <div className="post-thumb position-relative border-radius-5">
                                                      <div className="img-hover-slide border-radius-5 position-relative" style={{backgroundImage: "url(" + c.attributes.image + ")" }} >
                                                          <Link  className="img-link"  href={`post/${c.attributes.slug}`}></Link>
                                                      </div>
                                                      <ul className="social-share">
                                                          <li><a href="#"><i className="elegant-icon social_share" /></a></li>
                                                          <li><a className="fb" href="#" title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook" /></a></li>
                                                          <li><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter" /></a></li>
                                                          <li><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest" /></a></li>
                                                      </ul>
                                                  </div>
                                              </div>
                                              <div className="col-md-8 align-self-center">
                                                  <div className="post-content">
                                                      <div className="entry-meta meta-0 font-small mb-10">
                                                          <Link href={`category/${c.attributes.category_slug}`}>
                                                              <span className="post-cat text-primary">{c.attributes.category_name}</span>
                                                          </Link>
                                                      </div>
                                                      <h5 className="post-title font-weight-900 mb-20">
                                                          <Link href={`post/${c.attributes.slug}`}>{c.attributes.title}</Link>
                                                      </h5>
                                                      <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                          <span className="post-on"> { c.attributes.created_at } </span>
                                                          <span className="post-by has-dot">by Oguz</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </article>
                                  )}

                              </div>
                          </div>
                          <Pagination meta={meta}/>
                      </div>
                      <div className="col-lg-4">
                          <div className="widget-area">
                              <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                                  <h5 className="mb-20">ADS HERE</h5>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    );

}
