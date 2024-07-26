import './about-hero.css';
function AboutHero() {
    return (
        <div class="about-hero-main">
           <div class="hero-video">
            <video muted aria-controls="video" autoplay="true" loop>
                <source src={require('../images/video.mp4')} type="video/mp4"/>
               </video>
           </div>
        </div>
    );
}

export default AboutHero;
