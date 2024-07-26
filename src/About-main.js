import AboutNav from './About/about-nav';
import AboutHero from './About/about-hero';
import CEO from './About/about-ceo';
import Company from './About/about-company';
import Fade from './About/about-article'
import Footer from './footer';

function AboutMain() {
    return (
        <div class="navigation">
            <AboutNav />
            <AboutHero />
            <CEO />
            <Company />
            <Fade />
            <Footer />
        </div>
    );
}
export default AboutMain;