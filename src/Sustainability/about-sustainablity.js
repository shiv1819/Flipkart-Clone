import './about-sustainability.css';
function AboutSustainability() {
return (
<div class="about-sustainability-main  text-center">
    <div class="about-sustainability-title">
        Sustainability
    </div>
    <div class="bg-main">
        <div class="bg">
        </div>
        <img src={require('../images/article.jpg')} alt="..."></img>
    </div>
    <div class="article-content">
        <div class="">
            The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key
            areas of our operations, our commitment is embedded in our vision to create a positive impact, for the
            planet and communities.
        </div>
        <div class="know-more-btn">
            <button>
                know more
            </button>
        </div>
    </div>
</div>
);
}

export default AboutSustainability;