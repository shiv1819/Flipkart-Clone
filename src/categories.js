import './categories.css';
import { Link } from 'react-router-dom';
function Categories() {
    return (
        <div class="text-center categories">
            <div class="row container categories-flex">
                <div class="col-1 categories-box">
                    <div class="categories-main">
                        <div class="categories-img">
                            <img src={require('./images/grocery.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            Grocery
                        </div>
                    </div>
                </div>
                <div class="col-1 categories-box"  >
                    <Link to="/Product-Main">
                        <div class="categories-main">
                            <div class="categories-img">
                                <img src={require('./images/phones.jpg')} alt=''></img>
                            </div>
                            <div class="categories-title">
                                Phones
                            </div>
                        </div>
                    </Link>
                </div>
                <div class="col-1 categories-box">
                  <Link to="/clothes-main">
                    <div class="categories-main category-hov">
                        <div class="categories-img">
                            <img src={require('./images/fashion.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title fashion-title">
                            <span>Fashion</span><span class="material-symbols-outlined categories-arrow">expand_more</span>
                        </div>
                        <div class="fashion-overlay-main">
                            <div class="fashion-overlay">
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Men's Top Wear</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Men's Top Wear</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men's T-shirts</div>
                                        <div class="overlay-2-item">Men's Casual Shirts</div>
                                        <div class="overlay-2-item">Men's Formal Shirts</div>
                                        <div class="overlay-2-item">Men's Kurtas</div>
                                        <div class="overlay-2-item">Men's Ethnic Sets</div>
                                        <div class="overlay-2-item">Men's Blazers</div>
                                        <div class="overlay-2-item">Men's Raincoat</div>
                                        <div class="overlay-2-item">Men's Windcheaters</div>
                                        <div class="overlay-2-item">Men's Suits</div>
                                        <div class="overlay-2-item">Men's Fabrics</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Men's Bottom Wear</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Bottom Top Wear</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men's Jeans</div>
                                        <div class="overlay-2-item">Men's Trousers</div>
                                        <div class="overlay-2-item">Men's Trackpants</div>
                                        <div class="overlay-2-item">Men's Shorts</div>
                                        <div class="overlay-2-item">Men's Cargos</div>
                                        <div class="overlay-2-item">Men's Threefourths</div>
                                        <div class="overlay-2-item">Men's Pyjamas & Loungepants</div>
                                        <div class="overlay-2-item">Men's Dhoti</div>
                                        <div class="overlay-2-item">Men's Ethnic Pyjama</div>
                                        <div class="overlay-2-item">Men's Fabrics</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Women Ethnic</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Bottom Top Wear</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Women Sarees</div>
                                        <div class="overlay-2-item">Women Kurtas & Kurtis</div>
                                        <div class="overlay-2-item">Women Kurtas Sets & Salwar Suits</div>
                                        <div class="overlay-2-item">Ethnic Dresses</div>
                                        <div class="overlay-2-item">Women Dress Materials</div>
                                        <div class="overlay-2-item">Women Gowns</div>
                                        <div class="overlay-2-item">Women Lehenga Cholis</div>
                                        <div class="overlay-2-item">Women Leggins & Patialas</div>
                                        <div class="overlay-2-item">Women Plazzos & Shararas</div>
                                        <div class="overlay-2-item">Women Blouse</div>
                                        <div class="overlay-2-item">Women Dupatta</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Women Western</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Women Western</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Women Tops</div>
                                        <div class="overlay-2-item">Women Dresses</div>
                                        <div class="overlay-2-item">Women T-Shirts & Polo T-Shirts</div>
                                        <div class="overlay-2-item">Women Jeans</div>
                                        <div class="overlay-2-item">Women Nighties & Nights Dresses</div>
                                        <div class="overlay-2-item">Women Nightsuits</div>
                                        <div class="overlay-2-item">Women Track Pants</div>
                                        <div class="overlay-2-item">Women Trouser</div>
                                        <div class="overlay-2-item">Women Jumpsuits</div>
                                        <div class="overlay-2-item">Women Shapewear</div>
                                        <div class="overlay-2-item">Women Sports Bra</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Men Footwear</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Men Footwear</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men's Sports Shoes</div>
                                        <div class="overlay-2-item">Men's Casual Shoes</div>
                                        <div class="overlay-2-item">Men's Sandals & Floaters</div>
                                        <div class="overlay-2-item">Men's Slippers & Flip Flops</div>
                                        <div class="overlay-2-item">Men's Formal Shoes</div>
                                        <div class="overlay-2-item">Men's Ethnic Shoes</div>
                                        <div class="overlay-2-item">Men's Shoe Care</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Women Footwear</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Men Footwear</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Women Flats</div>
                                        <div class="overlay-2-item">Women Heels</div>
                                        <div class="overlay-2-item">Women Wedges</div>
                                        <div class="overlay-2-item">Women Slippers Flip Flops</div>
                                        <div class="overlay-2-item">Women Casual Shoes</div>
                                        <div class="overlay-2-item">Women Sports Shoes</div>
                                        <div class="overlay-2-item">Women Ballerinas</div>
                                        <div class="overlay-2-item">Women Ethnic Shoes</div>
                                        <div class="overlay-2-item">Women Sneakers</div>
                                        <div class="overlay-2-item">Women Walking Shoes</div>
                                        <div class="overlay-2-item">Women Boots</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Watches & Accessories</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Watches & Accessories</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men & Women Watches</div>
                                        <div class="overlay-2-item">Men & Women Sunglasses</div>
                                        <div class="overlay-2-item">Wallets</div>
                                        <div class="overlay-2-item">Men & Women Belts</div>
                                        <div class="overlay-2-item">Men Fashion Jewellery</div>
                                        <div class="overlay-2-item">Precious Articles</div>
                                        <div class="overlay-2-item"> Kids Accessories</div>
                                        <div class="overlay-2-item">Women Fashion Jewellery</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Bags, Suitcases & Luggage</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Bags, Suitcases & Luggage</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Bags & Bagpacks</div>
                                        <div class="overlay-2-item">Suitcase & Trolleys</div>
                                        <div class="overlay-2-item">Dufflebags</div>
                                        <div class="overlay-2-item">Rucksacks</div>
                                        <div class="overlay-2-item">Handbags</div>
                                        <div class="overlay-2-item">Slingbags</div>
                                        <div class="overlay-2-item"> Women clutches & Wallets</div>
                                        <div class="overlay-2-item">Messenger Bags</div>
                                        <div class="overlay-2-item">Travel Accessories</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Kids</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Kids</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Girls Dresses</div>
                                        <div class="overlay-2-item">Boys & Girls T-shirts</div>
                                        <div class="overlay-2-item">Boys & Girls Combosets</div>
                                        <div class="overlay-2-item">Boys & Girls Ethnic Wear</div>
                                        <div class="overlay-2-item">Boys & Girls Jeans</div>
                                        <div class="overlay-2-item">Boys & Girls Shorts</div>
                                        <div class="overlay-2-item">Boys & Girls Trackpants</div>
                                        <div class="overlay-2-item">Boys & Girls Innerwear</div>
                                        <div class="overlay-2-item">Infant Wear</div>
                                        <div class="overlay-2-item">Kids Slippers Flip Flops</div>
                                        <div class="overlay-2-item">Kids Sports Shoes</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Essentials</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Essentials</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men's Briefs & Trunks</div>
                                        <div class="overlay-2-item">Men's Vests</div>
                                        <div class="overlay-2-item">Men's Boxers</div>
                                        <div class="overlay-2-item">Women Lingerie Sets</div>
                                        <div class="overlay-2-item">Women Bra</div>
                                        <div class="overlay-2-item">Women Panty</div>
                                        <div class="overlay-2-item">Women Sarees</div>
                                        <div class="overlay-2-item">Women Kurtas</div>
                                        <div class="overlay-2-item">Women Kurtas Sets & Salwar Suits</div>

                                        <div class="overlay-2-item">Boys Innerwear</div>
                                        <div class="overlay-2-item">Girls Innerwear</div>
                                        <div class="overlay-2-item">Women Slippers Flip Flops</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Winter</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Winter</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Men's Jackets</div>
                                        <div class="overlay-2-item">Men's Sweatshirts</div>
                                        <div class="overlay-2-item">Men's Sweaters</div>
                                        <div class="overlay-2-item">Men's Thermals</div>
                                        <div class="overlay-2-item">Women Jackets</div>
                                        <div class="overlay-2-item">Women Sweatshirts</div>
                                        <div class="overlay-2-item">Women Sweaters & Cargigans</div>
                                        <div class="overlay-2-item">Women Shrugs</div>
                                        <div class="overlay-2-item">Kids Sweatshirts</div>
                                        <div class="overlay-2-item">Boys Innerwear</div>
                                        <div class="overlay-2-item">Girls Innerwear</div>
                                        <div class="overlay-2-item">Kids Jackets</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                  </Link>

                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main category-hov">
                        <div class="categories-img">
                            <img src={require('./images/electronics.png')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            <span>Electronics</span><span class="material-symbols-outlined categories-arrow">expand_more</span>
                        </div>
                        <div class="fashion-overlay-main">
                            <div class="fashion-overlay">
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Audio</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Audio</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Bluetooth Head Phone</div>
                                        <div class="overlay-2-item">Wired Headphones</div>
                                        <div class="overlay-2-item">True Wireless earbuds</div>
                                        <div class="overlay-2-item">bluetooth speakers</div>
                                        <div class="overlay-2-item">soundbars</div>
                                        <div class="overlay-2-item">home theatres</div>
                                        <div class="overlay-2-item">TV streaming device</div>
                                        <div class="overlay-2-item">remote control</div>
                                        <div class="overlay-2-item">DTH setup box</div>
                                        <div class="overlay-2-item">headphone pouch & case covers</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Electronics GST Store</div>
                                    <div class="arrow-right"></div>

                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Camera & Accessories</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Camera & Accessories</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">DSLR & Mirrorless</div>
                                        <div class="overlay-2-item">sports & action</div>
                                        <div class="overlay-2-item">points & shoot</div>
                                        <div class="overlay-2-item">instant cameras</div>
                                        <div class="overlay-2-item">camcoders</div>
                                        <div class="overlay-2-item">camera tripods</div>
                                        <div class="overlay-2-item">camera lenses</div>
                                        <div class="overlay-2-item">drone</div>
                                        <div class="overlay-2-item">flashes</div>
                                        <div class="overlay-2-item">gimbals</div>
                                        <div class="overlay-2-item">binoculars</div>
                                        <div class="overlay-2-item">Other camera Accessories</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Computer Peripherials</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in  Computer Peripherials</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Printers</div>
                                        <div class="overlay-2-item">monitors</div>
                                        <div class="overlay-2-item">projectors</div>
                                        <div class="overlay-2-item">portables projectors</div>
                                        <div class="overlay-2-item">ink cartridges</div>
                                        <div class="overlay-2-item">ink bottles</div>
                                        <div class="overlay-2-item">receipt printers</div>
                                        <div class="overlay-2-item">lamination machines</div>
                                        <div class="overlay-2-item">note counting machines</div>
                                        <div class="overlay-2-item">barcode scanners</div>
                                        <div class="overlay-2-item">currency dectectors</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Gaming</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Gaming</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">gaming consoles</div>
                                        <div class="overlay-2-item">gaming mouse</div>
                                        <div class="overlay-2-item">gaming keyboard</div>
                                        <div class="overlay-2-item">gamepads</div>
                                        <div class="overlay-2-item">games</div>
                                        <div class="overlay-2-item">accessory kits</div>
                                        <div class="overlay-2-item">gaming Accessories combo</div>
                                        <div class="overlay-2-item">gaming mousepads</div>
                                        <div class="overlay-2-item">membership cards</div>
                                        <div class="overlay-2-item">controllers</div>
                                        <div class="overlay-2-item">other gaming Accessories</div>
                                        <div class="overlay-2-item">gaming components</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Health & Personal care</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Health & Personal care</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">trimmers</div>
                                        <div class="overlay-2-item">shavers</div>
                                        <div class="overlay-2-item">hair straightners</div>
                                        <div class="overlay-2-item">hair dryers</div>
                                        <div class="overlay-2-item">epilators</div>
                                        <div class="overlay-2-item">glucometers and Accessories</div>
                                        <div class="overlay-2-item">blood pressure monitors</div>
                                        <div class="overlay-2-item">digital thermometers</div>
                                        <div class="overlay-2-item">weighing scales</div>
                                        <div class="overlay-2-item">massagers</div>
                                        <div class="overlay-2-item">nebulizers</div>
                                        <div class="overlay-2-item">vapourizers</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">laptop Accessories</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in laptop Accessories</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">mouse </div>
                                        <div class="overlay-2-item">laptop keybords</div>
                                        <div class="overlay-2-item">router</div>
                                        <div class="overlay-2-item">data cards</div>
                                        <div class="overlay-2-item">UPS </div>
                                        <div class="overlay-2-item">USB gadgets</div>
                                        <div class="overlay-2-item"> Security software</div>
                                        <div class="overlay-2-item">laptop battery</div>
                                        <div class="overlay-2-item">laptop adapter</div>
                                        <div class="overlay-2-item">wireless USB adapter</div>
                                        <div class="overlay-2-item">processor</div>
                                        <div class="overlay-2-item">other Accessories</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">laptop & desktop</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in laptop & desktop</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">laptops </div>
                                        <div class="overlay-2-item">gaming laptops</div>
                                        <div class="overlay-2-item">desktop PCs</div>
                                        <div class="overlay-2-item">all in one PCs</div>
                                        <div class="overlay-2-item">mini PCs</div>
                                        <div class="overlay-2-item">tower PCs</div>
                                        <div class="overlay-2-item"> PC finder</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Mobile Accessories</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Mobile Accessories</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">plain cases</div>
                                        <div class="overlay-2-item">designer cases</div>
                                        <div class="overlay-2-item">screen gaurds</div>
                                        <div class="overlay-2-item">camera lens proctectors</div>
                                        <div class="overlay-2-item">tablet Accessories</div>
                                        <div class="overlay-2-item">MobileCable</div>
                                        <div class="overlay-2-item">Mobile Charger</div>
                                        <div class="overlay-2-item">mobile pouches</div>
                                        <div class="overlay-2-item">mobile flashes</div>
                                        <div class="overlay-2-item">mobile holder</div>
                                        <div class="overlay-2-item">mobile USB Gadgets</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">powerbank</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in powerbank</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">powerbank</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">smart home automation</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in smart home automation</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">smart assistants</div>
                                        <div class="overlay-2-item">smart lights</div>
                                        <div class="overlay-2-item">smart cameras</div>
                                        <div class="overlay-2-item">Smart switches</div>
                                        <div class="overlay-2-item">smart door locks</div>
                                        <div class="overlay-2-item">sensors alarms</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">smart Wearables</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Smart Wearables</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">smart bands</div>
                                        <div class="overlay-2-item">smart glasses</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">storage</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in Storage</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Mobile Memory cars</div>
                                        <div class="overlay-2-item">computer pendrive</div>
                                        <div class="overlay-2-item">mobile pendrive</div>
                                        <div class="overlay-2-item">external harddrive</div>
                                        <div class="overlay-2-item">internal hardrive</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">tablets</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in tablets</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">Tablets with Call facility</div>
                                        <div class="overlay-2-item">Tablets without Call facility</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main category-hov">
                        <div class="categories-img">
                            <img src={require('./images/home.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            <span>Home & Furniture</span> <span
                                class="material-symbols-outlined categories-arrow">expand_more</span>
                        </div>
                        <div class="fashion-overlay-main">
                            <div class="fashion-overlay">
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">home furnishings</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in  furnishings</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">bed linens</div>
                                        <div class="overlay-2-item">bedsheets</div>
                                        <div class="overlay-2-item">blankets</div>
                                        <div class="overlay-2-item">curtains & Accessories</div>
                                        <div class="overlay-2-item">bath linen</div>
                                        <div class="overlay-2-item">floor coverings</div>
                                        <div class="overlay-2-item">covers & proctectors</div>
                                        <div class="overlay-2-item">cushions & pillows</div>
                                        <div class="overlay-2-item">kitchen linen sets</div>
                                        <div class="overlay-2-item">table linen sets</div>
                                        <div class="overlay-2-item">sofa & curtains fabrics</div>
                                        <div class="overlay-2-item">branded collections</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Furniture studio</div>
                                    <div class="arrow-right"></div>

                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">living room Furniture</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in living room Furniture</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">sofas sets & sectionals</div>
                                        <div class="overlay-2-item">TV units</div>
                                        <div class="overlay-2-item">dining sets</div>
                                        <div class="overlay-2-item">sofa beds</div>
                                        <div class="overlay-2-item">recliners</div>
                                        <div class="overlay-2-item">living room chairs</div>
                                        <div class="overlay-2-item">cabinet drawers </div>
                                        <div class="overlay-2-item">bookshelves</div>
                                        <div class="overlay-2-item">shoe racks</div>
                                        <div class="overlay-2-item">gimbals</div>
                                        <div class="overlay-2-item">binoculars</div>
                                        <div class="overlay-2-item">Other camera Accessories</div>

                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">kitchen and dining</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in  kitchen and dining</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">cookware</div>
                                        <div class="overlay-2-item">knife, choppers & cutters</div>
                                        <div class="overlay-2-item">gas stoves & Accessories</div>
                                        <div class="overlay-2-item">kitchen tools</div>
                                        <div class="overlay-2-item">tableware & dinnerware</div>
                                        <div class="overlay-2-item">containers & kitchen storage</div>
                                        <div class="overlay-2-item">barware</div>
                                        <div class="overlay-2-item">bakeware</div>
                                        <div class="overlay-2-item">handjuicers & grinders</div>
                                        <div class="overlay-2-item">disposable supplies</div>
                                        <div class="overlay-2-item">outdoor cooking</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">bedroom Furniture</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in bedroom Furniture</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">matresses</div>
                                        <div class="overlay-2-item">beds</div>
                                        <div class="overlay-2-item">wardrobes</div>
                                        <div class="overlay-2-item">side tables</div>
                                        <div class="overlay-2-item">TV units</div>
                                        <div class="overlay-2-item">office tables</div>
                                        <div class="overlay-2-item">bookshelves</div>
                                        <div class="overlay-2-item">bar cabinets</div>
                                        <div class="overlay-2-item">bar stools</div>
                                        <div class="overlay-2-item">rocking chairs</div>
                                        <div class="overlay-2-item">benches</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Space saving  furniture</div>
                                    <div class="arrow-right"></div>

                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">home decor</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in home decor</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">lightings</div>
                                        <div class="overlay-2-item">stickers & wallpapers</div>
                                        <div class="overlay-2-item">painting & posters</div>
                                        <div class="overlay-2-item">clocks</div>
                                        <div class="overlay-2-item">showpieces & decoratives</div>
                                        <div class="overlay-2-item">wall decor</div>
                                        <div class="overlay-2-item"> flower & vases</div>
                                        <div class="overlay-2-item">home frangances</div>
                                        <div class="overlay-2-item">windchimes & dreamcatchers</div>
                                        <div class="overlay-2-item">photo frames & albums</div>
                                        <div class="overlay-2-item">diyas, candles & holders</div>
                                        <div class="overlay-2-item">festive & gifting</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">tools & utility</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in tools & uitlity</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">hand tools</div>
                                        <div class="overlay-2-item">power tools</div>
                                        <div class="overlay-2-item">measuring tools</div>
                                        <div class="overlay-2-item">home storage & organizers</div>
                                        <div class="overlay-2-item">umbrellas</div>
                                        <div class="overlay-2-item">appliance trolley & stands</div>
                                        <div class="overlay-2-item"> cloth dryer stand</div>
                                        <div class="overlay-2-item">laundry organization</div>
                                        <div class="overlay-2-item">lock & security</div>
                                        <div class="overlay-2-item"> fire & personal care</div>
                                        <div class="overlay-2-item"> paint supplies & equipments</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">work space furniture</div>
                                    <div class="arrow-right"></div>

                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">kids furniture</div>
                                    <div class="arrow-right"></div>

                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">lightings and electricals</div>
                                    <div class="arrow-right"><span class="material-symbols-outlined">
                                        chevron_right
                                    </span></div>
                                    <div class="overlay-common overlay-2">
                                        <div class="overlay-2-title">More in lightings & electricals</div>
                                        <div class="overlay-2-item">All</div>
                                        <div class="overlay-2-item">bulbs</div>
                                        <div class="overlay-2-item">emergency lights</div>
                                        <div class="overlay-2-item">torches</div>
                                        <div class="overlay-2-item">tubelights</div>
                                        <div class="overlay-2-item">extension cords</div>
                                        <div class="overlay-2-item">outdoor lamps</div>
                                    </div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">cleaning & bath</div>
                                    <div class="arrow-right"></div>
                                </div>
                                <div class="fashion-overlay-item fashion-item">
                                    <div class="overlaytitle">Pet & gardening</div>
                                    <div class="arrow-right"></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main">
                        <div class="categories-img">
                            <img src={require('./images/appliances.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            Appliances
                        </div>
                    </div>
                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main">
                        <div class="categories-img">
                            <img src={require('./images/travel.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            Travel
                        </div>
                    </div>
                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main category-hov">
                        <div class="categories-img">
                            <img src={require('./images/toys.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            <span>Beauty,Toys & More</span>
                        </div>

                    </div>
                </div>
                <div class="col-1 categories-box">
                    <div class="categories-main vehicle">
                        <div class="categories-img">
                            <img src={require('./images/bike.jpg')} alt=''></img>
                        </div>
                        <div class="categories-title">
                            <span>Two Wheelers</span><span class="material-symbols-outlined categories-arrow">expand_more</span>
                        </div>
                        <div class="vehicle-overlay">
                            <div class="categories-title vehicle-title">
                                Petrol Vehicles
                            </div>
                            <div class="categories-title vehicle-title">
                                Electric Vehicles
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Categories;