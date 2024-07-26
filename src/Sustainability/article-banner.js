import './article-banner.css'


function ArticleBanner() {

return (
<div class="article-banner">
    <img src={require('../images/sustainablity.png')} alt="..." class="phone-none"></img>
    <img src={require('../images/report.jpg')} alt="..." class="phone-show"></img>
    <img src={require('../images/article-ceo.png')} alt="..."></img>

</div>
);
}

export default ArticleBanner;