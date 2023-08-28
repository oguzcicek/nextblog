import Image from 'next/image'
import AddComment from "./add-comment";
import MyAdsense from "@/components/MyAdsense";

export async function getStaticPaths() {
    const res = await fetch('http://127.0.0.1:3001/api/v1/posts');
    const { data } = await res.json();

    return {
        paths: data.map((post) => ({ params: { id: post.attributes?.slug } })),
        fallback: false
    }
}

const getData = async (id) => {
    //const res = await fetch('http://localhost:3001/api/v1/posts/' + postId);
    const res = await fetch('http://127.0.0.1:3001/api/v1/posts/' + id);
    return res.json();
}

export default async function PostPage(context) {
    const { data } = await getData(context.params?.id);
    const comments = JSON.parse(data.attributes?.comments);

    return(
      <>
          <title>{ data.attributes.title }</title>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Welcome ClubGameFi.com. ClubGameFi is a gamer blog. I play Pixel Gun 3d and other games" />
          <link rel="icon" href="/public/favicon.ico" />

          <main className="bg-grey pt-50 pb-50">
              <div className="pb-50">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8">
                              <div className="single-content2">
                                  <div className="entry-header entry-header-style-1 mb-50">
                                      <h1 className="entry-title mb-30 font-weight-900">
                                          { data.attributes.title }
                                      </h1>
                                      <div className="row">
                                          <div className="col-md-6">
                                              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                                  <p className="mb-5">
                                                      <a className="author-avatar" href="@/app/post/page#"><img className="img-circle" src="/imgs/authors/oguz.jpg" alt="" /></a>
                                                      By <a href="@/app/post/page#">
                                                      <span className="author-name font-weight-bold">
                                                      Oguz</span></a>
                                                  </p>
                                                  <span className="mr-10">{ data.attributes.created_at }</span>
                                                  <span className="has-dot font-weight-bold"> { data.attributes.category_name }</span>
                                                  <span className="has-dot font-weight-bold"> { data.attributes.game_name } ASDSADa</span>
                                              </div>
                                          </div>
                                          <div className="col-md-6 text-right d-none d-md-inline">
                                              <ul className="header-social-network d-inline-block list-inline mr-15">
                                                  <li className="list-inline-item text-muted"><span>Share this: </span></li>
                                                  <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_facebook" /></a></li>
                                                  <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_twitter " /></a></li>
                                                  <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_pinterest " /></a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                  {/*end single header*/}
                                  <figure className="image mb-30 m-auto text-center border-radius-10">
                                      <Image
                                          className="border-radius-10"
                                          src={ data.attributes.image }
                                          alt="Picture of the author"
                                          width={700}
                                          height={420}
                                      />
                                  </figure>
                                  {/*figure*/}
                                  <article className="entry-wraper mb-50">
                                      <p className="font-medium"> <span className="font-weight-bold">This article updated on:</span> { data.attributes.updated_at }</p>
                                      <div className="entry-main-content wow fadeIn animated">
                                          <div dangerouslySetInnerHTML={{__html: data.attributes.content  }}>
                                          </div>
                                          <hr className="wp-block-separator is-style-wide" />
                                      </div>

                                      <div className="single-social-share clearfix wow fadeIn animated">
                                          { comments &&
                                              <div className="entry-meta meta-1 font-small color-grey float-left mt-10">
                                                  <span className="hit-count mr-15"><i className="elegant-icon icon_comment_alt mr-5" />
                                                      { comments.length } comments
                                                  </span>
                                              </div>
                                          }

                                          <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                                              <li className="list-inline-item text-muted"><span>Share this: </span></li>
                                              <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_facebook" /></a></li>
                                              <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_twitter " /></a></li>
                                              <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="@/app/post/page#"><i className="elegant-icon social_pinterest " /></a></li>
                                          </ul>
                                      </div>
                                      {/*author box*/}
                                      <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                                          <div className="author-image mb-30">
                                              <a href="@/app/post/page#"><img src="/imgs/authors/oguz.jpg" alt="" className="avatar" /></a>
                                          </div>
                                          <div className="author-info">
                                              <h4 className="font-weight-bold mb-20"><span className="vcard author"><span className="fn"><a href="@/app/post/page#" title="Posted by Barbara Cartland" rel="author">Oguz</a></span></span>
                                              </h4>
                                              <h5 className="text-muted">About author</h5>
                                              <div className="author-description text-muted">
                                                  Hi, I'm Oğuz. I've been playing games in various genres for years. In this blog, I aim to share information and news about the games I play.
                                              </div>
                                          </div>
                                      </div>

                                      { comments &&
                                          <div className="widget-header-2 position-relative mb-30">
                                              <h5 className="mt-5 mb-30">Comments</h5>
                                          </div>
                                      }

                                      { comments && comments.map( (comment,index) =>

                                          <div className="comments-area">

                                              <div className="comment-list wow fadeIn animated">
                                                  <div className="single-comment justify-content-between d-flex">
                                                      <div className="user justify-content-between d-flex">
                                                          <div className="thumb">
                                                              <img src="assets/imgs/authors/author-4.jpg" alt="" />
                                                          </div>
                                                          <div className="desc">
                                                              <p className="comment" key={index}>
                                                                  { comment.attributes.comment }
                                                              </p>
                                                              <div className="d-flex justify-content-between">
                                                                  <div className="d-flex align-items-center">
                                                                      <h5>
                                                                          <a href="@/app/post/page#">  { comment.attributes.name } </a>
                                                                      </h5>
                                                                      <p className="date"> { comment.attributes.created_at } </p>
                                                                  </div>
                                                                  <div className="reply-btn">
                                                                      <a href="@/app/post/page#" className="btn-reply"> Reply</a>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>

                                              </div>
                                          </div>

                                      )}


                                      <AddComment postId={data.attributes.id} />

                                  </article>
                              </div>
                          </div>
                          <div className="col-lg-4 primary-sidebar sticky-sidebar">
                              <div className="widget-area">
                                  <div className="sidebar-widget widget-about mb-50 pt-30 pr-30 pb-30 pl-30 bg-white border-radius-5 has-border  wow fadeInUp animated">
                                      <MyAdsense />
                                  </div>
                                  <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
                                      <div className="widget-header-1 position-relative mb-30">
                                          <h5 className="mt-5 mb-30">Other Posts</h5>
                                      </div>
                                      {/*
                                      <div className="post-block-list post-module-1">
                                          <ul className="list-post">
                                              <li className="mb-30 wow fadeInUp animated">
                                                  <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                                      <div className="post-content media-body">
                                                          <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="#">Spending Some Quality Time with Kids? It’s Possible</a></h6>
                                                          <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                              <span className="post-on">05 August</span>
                                                              <span className="post-by has-dot">150 views</span>
                                                          </div>
                                                      </div>
                                                      <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                                          <a className="color-white" href="#">
                                                              <img src="assets/imgs/news/thumb-6.jpg" alt="" />
                                                          </a>
                                                      </div>
                                                  </div>
                                              </li>
                                          </ul>
                                      </div> */}

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