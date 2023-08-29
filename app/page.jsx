import Link from "next/link";
import Pagination from "@/app/pagination";
import Image from 'next/image'
import Head from "next/head";

const getData = async (page = 1) => {
    //const res = await fetch(`http://localhost:3001/api/v1/posts?page=${page}`);
    const res = await fetch(`http://127.0.0.1:3001/api/v1/posts?page=${page}`);
    return await res.json();
}

export default async function Home(props) {
    const {data, meta} = await getData(props.searchParams.page);

    return (
        <>
            <meta name="google-site-verification" content="RSLgbDctd7SAhapzOTIUug1g-glFxjd0Q9C7k5bOofg" />
            <title>Another Gamer Blog | ClubGameFi2</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description"
                  content="Welcome ClubGameFi.com. ClubGameFi is a gamer blog. I play Pixel Gun 3d, Coin Master and other games"/>
            <link rel="icon" href="/favicon.ico"/>

            <main>
                <div className="main-search-form">
                    <div className="container">
                        <div className=" pt-50 pb-50 ">
                            <div className="row mb-20">
                                <div className="col-12 align-self-center main-search-form-cover m-auto">
                                    <p className="text-center"><span className="search-text-bg">Search</span></p>
                                    <form action="#" className="search-header">
                                        <div className="input-group w-100">
                                            <input type="text" className="form-control"
                                                   placeholder="Search stories, places and people"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-search bg-white" type="submit">
                                                    <i className="elegant-icon icon_search"/>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row mt-80 text-center">
                                <div className="col-12 font-small suggested-area">
                                    <h5 className="suggested font-heading mb-20 text-muted"><strong>Suggested
                                        keywords:</strong></h5>
                                    <ul className="list-inline d-inline-block">
                                        <li className="list-inline-item"><a href="#">World</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-80">
                                <div className="col-lg-4">
                                    <div
                                        className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                        <div
                                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                            <a className="color-white" href="#">
                                                <img src="assets/imgs/news/thumb-2.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6><a href="#">--</a></h6>
                                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                        <div
                                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                            <a className="color-white" href="#">
                                                <img src="assets/imgs/news/thumb-4.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6><a href="#">Lifestyle</a></h6>
                                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4  col-md-6">
                                    <div
                                        className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
                                        <div
                                            className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                            <a className="color-white" href="#">
                                                <img src="assets/imgs/news/thumb-3.jpg" alt=""/>
                                            </a>
                                        </div>
                                        <div className="post-content media-body">
                                            <h6><a href="#">Mobile Games</a></h6>
                                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="post-module-3">
                                    <div className="loop-list loop-list-style-1">
                                        {data && data?.map(c =>
                                            <article key={c.attributes.id}
                                                     className="hover-up-2 transition-normal wow fadeInUp animated">
                                                <div className="row mb-40 list-style-2">
                                                    <div className="col-md-4">
                                                        <div className="post-thumb position-relative border-radius-5">
                                                            <Link href={`post/${c.attributes.slug}`}>
                                                                <Image
                                                                    className="img-hover-slide border-radius-5 position-relative"
                                                                    src={ c.attributes.image }
                                                                    alt="Picture of the author"
                                                                    layout='fill'
                                                                    objectFit='contain'
                                                                />
                                                            </Link>

                                                            <ul className="social-share">
                                                                <li><a href="#"><i
                                                                    className="elegant-icon social_share"/></a></li>
                                                                <li><a className="fb" href="#" title="Share on Facebook"
                                                                       target="_blank"><i
                                                                    className="elegant-icon social_facebook"/></a></li>
                                                                <li><a className="tw" href="#" target="_blank"
                                                                       title="Tweet now"><i
                                                                    className="elegant-icon social_twitter"/></a></li>
                                                                <li><a className="pt" href="#" target="_blank"
                                                                       title="Pin it"><i
                                                                    className="elegant-icon social_pinterest"/></a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-8 align-self-center">
                                                        <div className="post-content">
                                                            <div className="entry-meta meta-0 font-small mb-10">
                                                                <Link href={`category/${c.attributes.category_slug}`}>
                                                                    <span
                                                                        className="post-cat text-primary">{c.attributes.category_name}</span>
                                                                </Link>
                                                            </div>
                                                            <h5 className="post-title font-weight-900 mb-20">
                                                                <Link
                                                                    href={`post/${c.attributes.slug}`}>{c.attributes.title}</Link>
                                                            </h5>
                                                            <div
                                                                className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                                <span
                                                                    className="post-on"> {c.attributes.updated_at} </span>
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
                                    <div
                                        className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                                        <img className="about-author-img mb-25" src="/imgs/authors/oguz.jpg"
                                             alt="author image"/>
                                        <h5 className="mb-20">Hello, I'm Oguz.</h5>
                                        <p className="font-medium text-muted">
                                            Hi, I'm Oğuz. I've been playing games in various genres for years. In this
                                            blog, I aim to share information and news about the games I play.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );

}
