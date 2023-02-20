import Link from 'next/link'

const Footer = () => {
	return <>
		<footer className="pt-50 pb-20 bg-grey">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6">
						<div className="sidebar-widget wow fadeInUp animated mb-30">
							<div className="widget-header-2 position-relative mb-30">
								<h5 className="mt-5 mb-30">About me</h5>
							</div>
							<div className="textwidget">
								<p>
									Gaming and coding
								</p>
								<p><strong className="color-black">Address: </strong>
								Metaverse </p>
								<strong className="color-black">Follow us </strong>
									<ul className="header-social-network d-inline-block list-inline color-white mb-20">
										<li className="list-inline-item">
											<a className="fb" href="#" target="_blank" title="Facebook">
											<i  className="elegant-icon social_facebook"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="tw" href="#" target="_blank" title="Tweet now">
												<i className="elegant-icon social_twitter"></i>
											</a>
										</li>
										<li className="list-inline-item">
											<a className="pt" href="#" target="_blank"  title="Pin it">
												<i className="elegant-icon social_pinterest"></i>
											</a>
										</li>
									</ul>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-6">
						<div className="sidebar-widget widget_categories wow fadeInUp animated mb-30"
							 data-wow-delay="0.1s">
							<div className="widget-header-2 position-relative mb-30">
								<h5 className="mt-5 mb-30">Quick links</h5>
							</div>
							<ul className="font-small">
								<li className="cat-item cat-item-2"><a href="#">About me</a></li>
								<li className="cat-item cat-item-7"><a href="#">info@clubgamefi.com</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
					<p className="float-md-left font-small text-muted">© Clubgamefi.com </p>
					<p className="float-md-right font-small text-muted">
						Coded by <a href="#" target="_blank">Oguz</a> with Ruby on Rails & NextJs | All rights reserved
					</p>
				</div>
			</div>
		</footer>
	</>
};

export default Footer;