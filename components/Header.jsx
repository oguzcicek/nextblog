import Link from 'next/link'

const Header = () => {

	return <div>
		<div className="scroll-progress primary-bg"></div>
		<header className="main-header header-style-1 font-heading">
			<div className="header-top">
				<div className="container">
					<div className="row pt-20 pb-20">
						<div className="col-md-3 col-xs-6">
							<Link href={'/'}>
								<img className="logo" src="/logo3.png" alt="" width={108} height={39} />
							</Link>
						</div>
						<div className="col-md-9 col-xs-6 text-right header-top-right ">
							<button className="search-icon d-none d-md-inline"><span
								className="mr-15 text-muted font-small"><i
								className="elegant-icon icon_search mr-5"></i>Search</span></button>
						</div>
					</div>
				</div>
			</div>
			<div className="header-sticky">
				<div className="container align-self-center">
 					<div className="main-nav d-none d-lg-block float-left">
						<nav>
							<ul className="main-menu d-none d-lg-inline font-small">
								<li>
									<Link href={'/'}>
										<i className="elegant-icon icon_house_alt mr-5"></i> Home
									</Link>
								</li>
								<li>
									<Link href={'games/pixel-gun-3d'}>
										Pixel Gun 3D
									</Link>
								</li>
							</ul>
							<ul id="mobile-menu" className="d-block d-lg-none text-muted">
								<li>
									<a href="index.html.htm">Home</a>
								</li>
								<li className="menu-item-has-children"><a href="#">Pages</a>
									<ul className="sub-menu font-small">
										<li><a href="page-about.html.htm">Pixel Gun 3D</a></li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
					<div className="float-right header-tools text-muted font-small">
						<ul className="header-social-network d-inline-block list-inline mr-15">
							<li className="list-inline-item">
								<a className="social-icon fb text-xs-center" target="_blank" href="#">
									<i className="elegant-icon social_facebook"></i></a></li>
							<li className="list-inline-item">
								<a className="social-icon tw text-xs-center" target="_blank" href="#">
									<i  className="elegant-icon social_twitter "></i></a></li>
							<li className="list-inline-item">
								<a className="social-icon pt text-xs-center" target="_blank" href="#">
									<i className="elegant-icon social_pinterest "></i></a></li>
						</ul>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</header>
		<div className="main-search-form">
			<div className="container">
				<div className=" pt-50 pb-50 ">
					<div className="row mb-20">
						<div className="col-12 align-self-center main-search-form-cover m-auto">
							<p className="text-center"><span className="search-text-bg">Search</span></p>
							<form action="#" className="search-header">
								<div className="input-group w-100">
									<input type="text" className="form-control" placeholder="Search stories, places and people" />
										<div className="input-group-append">
											<button className="btn btn-search bg-white" type="submit">
												<i className="elegant-icon icon_search"></i>
											</button>
										</div>
								</div>
							</form>
						</div>
					</div>
					<div className="row mt-80 text-center">
						<div className="col-12 font-small suggested-area">
							<h5 className="suggested font-heading mb-20 text-muted"><strong>Suggested keywords:</strong>
							</h5>
							<ul className="list-inline d-inline-block">
								<li className="list-inline-item"><a href="category.html.htm">World</a></li>
								<li className="list-inline-item"><a href="category.html.htm">American</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Opinion</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Tech</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Science</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Books</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Travel</a></li>
								<li className="list-inline-item"><a href="category.html.htm">Business</a></li>
							</ul>
						</div>
					</div>
					<div className="row mt-80">
						<div className="col-lg-4">
							<div
								className="d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5 mb-30">
								<div
									className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
									<a className="color-white" href="single.html.htm">
										<img src="assets/imgs/news/thumb-2.jpg" alt="" />
									</a>
								</div>
								<div className="post-content media-body">
									<h6><a href="category.html.htm">Travel Tips</a></h6>
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
									<a className="color-white" href="single.html.htm">
										<img src="assets/imgs/news/thumb-4.jpg" alt="" />
									</a>
								</div>
								<div className="post-content media-body">
									<h6><a href="category.html.htm">Lifestyle</a></h6>
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
									<a className="color-white" href="single.html.htm">
										<img src="assets/imgs/news/thumb-3.jpg" alt="" />
									</a>
								</div>
								<div className="post-content media-body">
									<h6><a href="category.html.htm">Hotel Review</a></h6>
									<p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur
										adipiscing elit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
};

export default Header;