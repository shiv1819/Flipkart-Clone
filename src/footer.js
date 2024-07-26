import { Link } from 'react-router-dom';
import './footer.css';
function Footer() {
    return (
        <div>
            <div class="footer">
                <div>
                    <div class="container-fluid">
                        <div class="row foot-row">
                            <div class="col-lg-3 col-12">
                                <div class="foot-col1">
                                    <div class="footer-logo">
                                    <Link to="/"> <img src={require('./images/footer-logo.png')} alt=""></img></Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="foot-col2">
                                    <b>About</b>
                                    <div class="foot-context">
                                        <div>Contact Us</div>
                                        <div><Link to="/About-main">About Us</Link></div>
                                        <div>Careers</div>
                                        <div>Flipkart Stories</div>
                                        <div>Press</div>
                                        <div>Corporate Information</div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="foot-col3">
                                    <b>Group compaines</b>
                                    <div class="foot-context">
                                        <div>Myntra</div>
                                        <div>flipkart wholesale</div>
                                        <div>cleartrip</div>
                                        <div>shopsy</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="foot-col4">
                                    <b>help</b>
                                    <div class="foot-context">
                                        <div>payments</div>
                                        <div>shipping</div>
                                        <div>cancellation & returns</div>
                                        <div>FAQ</div>
                                        <div>report infringement</div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-12">
                                <div class="foot-col4">
                                    <b>Consumer Policy</b>
                                    <div class="foot-context">
                                        <div>cancellation & returns</div>
                                        <div>Terms Of use </div>
                                        <div>security</div>
                                        <div>privacy</div>
                                        <div>sitemao</div>
                                        <div>grievance redressal</div>
                                        <div>EPR compliance</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer-end">
                            <div> © Flipkart 2024.</div>
                            <div class="footer-end-right" lang="color">
                                <div>Term & Condition</div>
                                <div>Policy</div>
                                <div>Privacy</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;
