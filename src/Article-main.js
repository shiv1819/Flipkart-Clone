import AboutNav from './About/about-nav';
import AutoPlay from './Sustainability/article-slider';
import Vision from './Sustainability/vision'
import AboutSustainability from './Sustainability/about-sustainablity';
import ArticleBanner from './Sustainability/article-banner'
import Footer from './footer';

function ArticleMain() {
    return (
        <div class="navigation">
            <AboutNav />
            <AutoPlay />
            <Vision />
            <ArticleBanner />
            <AboutSustainability />
            <Footer />
        </div>
    );
}
export default ArticleMain;