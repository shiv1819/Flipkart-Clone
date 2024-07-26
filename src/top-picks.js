
import './top-picks.css'

function Toppicks() {
    return (
        <div class="picks-main">

            <div class="row picks-flex">
                <div class="col-md-5 top-picks-box">
                    <div class="picks-title">
                        Up to 40% off | Bestselling Monitors
                    </div>
                    <div class="bestselling-container">
                        <img src={require('./images/monitior.jpg')} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <div class="col-md-5 top-picks-box">
                    <div class="picks-title">
                        Up to 50% off | Laptop Cooling Pads
                    </div>
                    <div class="bestselling-container">
                        <img src={require('./images/zebronics.gif')} class="d-block w-100" alt="..."></img>
                    </div>
                </div>
                <div class="col-md-5 top-picks-box">
                    <div class="picks-title">
                        Appliances for your home | Up to 55% off
                    </div>
                    <div class="bestselling-container">
                        <div class="bestselling-flex">
                            <div class="">
                                <img src={require('./images/ac.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    Air Conditioners
                                </div>
                            </div>
                            <div class="">
                                <img src={require('./images/refrigerator.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    refrigerators
                                </div>
                            </div>
                        </div>
                        <div class="bestselling-flex">
                            <div class="">
                                <img src={require('./images/oven.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    microwaves
                                </div>
                            </div>

                            <div class="">
                                <img src={require('./images/washing-machine.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    washing machines
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-5 top-picks-box">
                    <div class="picks-title">
                        Top mobile accessories for your smartphone
                    </div>
                    <div class="bestselling-container">
                        <div class="bestselling-flex">
                            <div class="">
                                <img src={require('./images/headset.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    Headsets
                                </div>
                            </div>
                            <div class="">
                                <img src={require('./images/cable.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    cables & Chargers
                                </div>
                            </div>
                        </div>
                        <div class="bestselling-flex">
                            <div class="">
                                <img src={require('./images/case.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    cases & covers
                                </div>
                            </div>

                            <div class="">
                                <img src={require('./images/powerbank.jpg')} class="d-block w-100" alt="..."></img>
                                <div class="product-title">
                                    Powerbanks
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Toppicks;
