import Nav from './nav';
import Categories from './categories';
import Carousel from './carousel';
import MultipleItems from './slider-1';
import Toppicks from './top-picks';
import Responsive from './top-deals';
import Phone from './phones';
import Offer from './offer';
import FashionSlider from './fashion-slider';
import SimpleSlider from './fashion';
import Footer from './footer';

function Home(){
    return (
        <div class="navigation">
          <Nav />
          <div class='main'>
            <Categories />
            <SimpleSlider />
            <Carousel />
            <MultipleItems />
            <Toppicks />
            <Responsive />
            <Phone />
            <Offer />
            <FashionSlider />
          </div>
          <Footer />
          
        </div>
      );
}
export default Home;