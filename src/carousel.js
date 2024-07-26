import './carousel.css';
function Carousel() {
    return (
        <div class="hero-main">
            
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active " aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" class="slide 4" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={require('./images/hero-1.png')} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./images/img-2.jpg')} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./images/img-3.jpg')} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./images/img-4.jpg')} class="d-block w-100" alt="..."></img>
                    </div>
                    <div class="carousel-item">
                        <img src={require('./images/hero-1.jpg')} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <button class="carousel-control-prev btn-left" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="visually-hidden">Previous</span>
                    <span class="material-symbols-outlined hero-prev">expand_more</span>
                </button>
                <button class="carousel-control-next btn-right" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="visually-hidden">Next</span>
                    <span class="material-symbols-outlined hero-next">expand_less</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
