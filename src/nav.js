import { useState } from 'react';
import './nav.css';
// import { slide as Menu } from 'react-burger-menu';
// const CustomBurgerIcon = () =>  <img src={require('./images/hamburger.png')} alt=''></img>;
function Nav() {
    const [isActive, setIsActive] = useState('false')
    const ToggleClass = () => {
        setIsActive(!isActive)
    }

    return (
        <div className="nav-main">
            <div class="hamburger">
                {/* <Menu customBurgerIcon={<CustomBurgerIcon />}> */}
                <div onClick={ToggleClass}>
                    <img src={require('./images/hamburger.png')} />
                </div>
                <div class={isActive ? 'nav-right active' : 'nav-right'}>
                    <div class="nav-item login"><span class="material-symbols-outlined">account_circle</span> <span
                        class="item-name">Login</span> <span class="material-symbols-outlined arrow">expand_more</span>
                        <div class="login-overlay">
                            <div class="login-item signup">
                                <div class="signup-flex">
                                    <div class="">New Customer</div>
                                    <div class="higlight-blue">Sign Up</div>
                                </div>
                            </div>
                            <div class="login-item"><span class="material-symbols-outlined">account_circle</span> <span
                                class="item-name">My Profile</span> </div>
                            <div class="login-item">
                                <span>
                                    <svg width="20" height="auto" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.9116 6.41093C16.9116 6.41093 19.4188 7.65737 20.6557 8.1864C21.8592 8.69995 21.9955 10.6251 20.6711 11.2754C19.3468 11.9257 18.9817 12.0315 18.9817 12.0315C18.9817 12.0315 19.19 11.4922 19.1617 10.9709C19.0768 10.0419 16.3407 9.28834 14.5278 8.84189C14.5278 8.84189 13.1366 4.45998 12.5066 3.23934C11.874 2.01096 10.5908 1.5 10.5908 1.5L13.6226 1.54128C13.6226 1.54128 14.6667 1.48968 15.1295 2.61483C15.5898 3.73999 16.9116 6.41093 16.9116 6.41093Z"
                                            fill="#212121" />
                                        <path
                                            d="M17.6095 16.891C17.6095 16.891 16.3804 19.3788 15.8403 20.651C15.326 21.8588 13.3691 21.9955 12.7237 20.6665C12.0757 19.3375 12.0088 19.1001 12.0088 19.1001C12.0088 19.1001 12.3997 19.1775 13.022 19.1491C13.9477 19.0639 14.7423 16.3181 15.1872 14.4988C15.1872 14.4988 19.5536 13.1001 20.7699 12.4704C21.994 11.8356 22.5006 10.5479 22.5006 10.5479L22.4594 14.0446C22.4594 14.0446 22.5108 14.6407 21.3897 15.1053C20.271 15.5672 17.6095 16.891 17.6095 16.891Z"
                                            fill="#212121" />
                                        <path
                                            d="M7.08599 17.5788C7.08599 17.5788 4.59163 16.3401 3.3393 15.8033C2.13584 15.2898 1.99955 13.3621 3.32387 12.7143C4.6482 12.064 5.18051 11.9453 5.18051 11.9453C5.18051 11.9453 4.83593 12.4976 4.92079 13.1195C5.00822 14.0511 7.65687 14.7014 9.46464 15.1479C9.46464 15.1479 10.9098 19.504 11.4858 20.7504C12.1904 22.2678 13.3579 22.5001 13.3579 22.5001L9.9198 22.4485C9.9198 22.4485 9.32577 22.5001 8.8629 21.3775C8.40517 20.2498 7.08599 17.5788 7.08599 17.5788Z"
                                            fill="#212121" />
                                        <path
                                            d="M6.41672 7.09875C6.41672 7.09875 7.65105 4.59812 8.18592 3.33877C8.69765 2.13103 10.616 1.99684 11.264 3.32329C11.912 4.65231 11.9738 4.89231 11.9738 4.89231C11.9738 4.89231 11.4852 4.90006 10.9683 4.92844C10.04 5.01619 9.28396 7.67423 8.84166 9.49099C8.84166 9.49099 4.49067 10.9181 3.25892 11.5194C1.56429 12.3452 1.5 13.4032 1.5 13.4032L1.56944 9.94775C1.56944 9.94775 1.518 9.35163 2.6366 8.88712C3.75521 8.42261 6.41672 7.09875 6.41672 7.09875Z"
                                            fill="#212121" />
                                    </svg>
                                </span>
                                <span>
                                    Flipkart Plus Zone
                                </span>
                            </div>
                            <div class="login-item"><span class="material-symbols-outlined">orders</span> <span>Orders</span></div>
                            <div class="login-item"><span class="material-symbols-outlined">favorite</span> <span>Wishlist</span>
                            </div>
                            <div class="login-item"><span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
                                <span>Rewards</span></div>
                            <div class="login-item">
                                <span>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.3125 4.99902H2.3125C1.9644 4.99902 1.63056 5.1373 1.38442 5.38345C1.13828 5.62959 1 5.96343 1 6.31152V18.3115C1 18.6596 1.13828 18.9935 1.38442 19.2396C1.63056 19.4857 1.9644 19.624 2.3125 19.624H20.3125C20.6606 19.624 20.9944 19.4857 21.2406 19.2396C21.4867 18.9935 21.625 18.6596 21.625 18.3115V6.31152C21.625 5.96343 21.4867 5.62959 21.2406 5.38345C20.9944 5.1373 20.6606 4.99902 20.3125 4.99902ZM2.3125 6.12402H20.3125C20.3622 6.12402 20.4099 6.14378 20.4451 6.17894C20.4802 6.2141 20.5 6.2618 20.5 6.31152V8.31152H2.125V6.31152C2.125 6.2618 2.14475 6.2141 2.17992 6.17894C2.21508 6.14378 2.26277 6.12402 2.3125 6.12402ZM20.3125 18.499H2.3125C2.26277 18.499 2.21508 18.4793 2.17992 18.4441C2.14475 18.4089 2.125 18.3613 2.125 18.3115V9.43652H20.5V18.3115C20.5 18.3613 20.4802 18.4089 20.4451 18.4441C20.4099 18.4793 20.3622 18.499 20.3125 18.499Z"
                                            fill="#212121" />
                                        <path d="M4.00391 10.8779H8.42225" stroke="#212121" stroke-linecap="round" />
                                        <path d="M4.00391 12.6709H8.42225" stroke="#212121" stroke-linecap="round" />
                                        <path
                                            d="M4.00391 10.8774C4.95069 10.8561 7.15987 10.8774 7.15987 12.771C7.15987 14.6646 4.95069 14.6432 4.00391 14.6646"
                                            stroke="#212121" stroke-linecap="round" />
                                        <path
                                            d="M7.15884 17.8924C7.37257 18.0672 7.68758 18.0357 7.86244 17.822C8.03731 17.6083 8.00581 17.2933 7.79208 17.1184L7.15884 17.8924ZM3.68729 15.052L7.15884 17.8924L7.79208 17.1184L4.32053 14.2781L3.68729 15.052Z"
                                            fill="#212121" />
                                    </svg>
                                </span>
                                <span>Giftcards</span>
                            </div>
                            <div class="login-item"></div>
                        </div>
                    </div>
                    <div class="nav-item cart"><span class="material-symbols-outlined">shopping_cart</span><span
                        class="item-name ">Cart</span></div>
                    <div class="nav-item seller"><span class="material-symbols-outlined">local_convenience_store</span>Become a
                        Seller
                    </div>
                    <div class="nav-item menu"><span class="material-symbols-outlined">format_list_bulleted</span></div>
                </div>
                {/* </Menu> */}
            </div>
            <div class="nav-logo">
                <img src={require('./images/logo.jpg')} alt=''></img>
            </div>
            <div class="search-box">
                <div class="search"><i class="fa-solid fa-magnifying-glass"></i></div>
                <div class="input-box">
                    <input type="text" placeholder="Search for Products, Brands and More"></input>
                </div>
            </div>
            <div class="nav-right">
                <div class="nav-item login"><span class="material-symbols-outlined">account_circle</span> <span
                    class="item-name">Login</span> <span class="material-symbols-outlined arrow">expand_more</span>
                    <div class="login-overlay">
                        <div class="login-item signup">
                            <div class="signup-flex">
                                <div class="">New Customer</div>
                                <div class="higlight-blue">Sign Up</div>
                            </div>
                        </div>
                        <div class="login-item"><span class="material-symbols-outlined">account_circle</span> <span
                            class="item-name">My Profile</span> </div>
                        <div class="login-item">
                            <span>
                                <svg width="20" height="auto" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.9116 6.41093C16.9116 6.41093 19.4188 7.65737 20.6557 8.1864C21.8592 8.69995 21.9955 10.6251 20.6711 11.2754C19.3468 11.9257 18.9817 12.0315 18.9817 12.0315C18.9817 12.0315 19.19 11.4922 19.1617 10.9709C19.0768 10.0419 16.3407 9.28834 14.5278 8.84189C14.5278 8.84189 13.1366 4.45998 12.5066 3.23934C11.874 2.01096 10.5908 1.5 10.5908 1.5L13.6226 1.54128C13.6226 1.54128 14.6667 1.48968 15.1295 2.61483C15.5898 3.73999 16.9116 6.41093 16.9116 6.41093Z"
                                        fill="#212121" />
                                    <path
                                        d="M17.6095 16.891C17.6095 16.891 16.3804 19.3788 15.8403 20.651C15.326 21.8588 13.3691 21.9955 12.7237 20.6665C12.0757 19.3375 12.0088 19.1001 12.0088 19.1001C12.0088 19.1001 12.3997 19.1775 13.022 19.1491C13.9477 19.0639 14.7423 16.3181 15.1872 14.4988C15.1872 14.4988 19.5536 13.1001 20.7699 12.4704C21.994 11.8356 22.5006 10.5479 22.5006 10.5479L22.4594 14.0446C22.4594 14.0446 22.5108 14.6407 21.3897 15.1053C20.271 15.5672 17.6095 16.891 17.6095 16.891Z"
                                        fill="#212121" />
                                    <path
                                        d="M7.08599 17.5788C7.08599 17.5788 4.59163 16.3401 3.3393 15.8033C2.13584 15.2898 1.99955 13.3621 3.32387 12.7143C4.6482 12.064 5.18051 11.9453 5.18051 11.9453C5.18051 11.9453 4.83593 12.4976 4.92079 13.1195C5.00822 14.0511 7.65687 14.7014 9.46464 15.1479C9.46464 15.1479 10.9098 19.504 11.4858 20.7504C12.1904 22.2678 13.3579 22.5001 13.3579 22.5001L9.9198 22.4485C9.9198 22.4485 9.32577 22.5001 8.8629 21.3775C8.40517 20.2498 7.08599 17.5788 7.08599 17.5788Z"
                                        fill="#212121" />
                                    <path
                                        d="M6.41672 7.09875C6.41672 7.09875 7.65105 4.59812 8.18592 3.33877C8.69765 2.13103 10.616 1.99684 11.264 3.32329C11.912 4.65231 11.9738 4.89231 11.9738 4.89231C11.9738 4.89231 11.4852 4.90006 10.9683 4.92844C10.04 5.01619 9.28396 7.67423 8.84166 9.49099C8.84166 9.49099 4.49067 10.9181 3.25892 11.5194C1.56429 12.3452 1.5 13.4032 1.5 13.4032L1.56944 9.94775C1.56944 9.94775 1.518 9.35163 2.6366 8.88712C3.75521 8.42261 6.41672 7.09875 6.41672 7.09875Z"
                                        fill="#212121" />
                                </svg>
                            </span>
                            <span>
                                Flipkart Plus Zone
                            </span>
                        </div>
                        <div class="login-item"><span class="material-symbols-outlined">orders</span> <span>Orders</span></div>
                        <div class="login-item"><span class="material-symbols-outlined">favorite</span> <span>Wishlist</span>
                        </div>
                        <div class="login-item"><span class="material-symbols-outlined">featured_seasonal_and_gifts</span>
                            <span>Rewards</span></div>
                        <div class="login-item">
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M20.3125 4.99902H2.3125C1.9644 4.99902 1.63056 5.1373 1.38442 5.38345C1.13828 5.62959 1 5.96343 1 6.31152V18.3115C1 18.6596 1.13828 18.9935 1.38442 19.2396C1.63056 19.4857 1.9644 19.624 2.3125 19.624H20.3125C20.6606 19.624 20.9944 19.4857 21.2406 19.2396C21.4867 18.9935 21.625 18.6596 21.625 18.3115V6.31152C21.625 5.96343 21.4867 5.62959 21.2406 5.38345C20.9944 5.1373 20.6606 4.99902 20.3125 4.99902ZM2.3125 6.12402H20.3125C20.3622 6.12402 20.4099 6.14378 20.4451 6.17894C20.4802 6.2141 20.5 6.2618 20.5 6.31152V8.31152H2.125V6.31152C2.125 6.2618 2.14475 6.2141 2.17992 6.17894C2.21508 6.14378 2.26277 6.12402 2.3125 6.12402ZM20.3125 18.499H2.3125C2.26277 18.499 2.21508 18.4793 2.17992 18.4441C2.14475 18.4089 2.125 18.3613 2.125 18.3115V9.43652H20.5V18.3115C20.5 18.3613 20.4802 18.4089 20.4451 18.4441C20.4099 18.4793 20.3622 18.499 20.3125 18.499Z"
                                        fill="#212121" />
                                    <path d="M4.00391 10.8779H8.42225" stroke="#212121" stroke-linecap="round" />
                                    <path d="M4.00391 12.6709H8.42225" stroke="#212121" stroke-linecap="round" />
                                    <path
                                        d="M4.00391 10.8774C4.95069 10.8561 7.15987 10.8774 7.15987 12.771C7.15987 14.6646 4.95069 14.6432 4.00391 14.6646"
                                        stroke="#212121" stroke-linecap="round" />
                                    <path
                                        d="M7.15884 17.8924C7.37257 18.0672 7.68758 18.0357 7.86244 17.822C8.03731 17.6083 8.00581 17.2933 7.79208 17.1184L7.15884 17.8924ZM3.68729 15.052L7.15884 17.8924L7.79208 17.1184L4.32053 14.2781L3.68729 15.052Z"
                                        fill="#212121" />
                                </svg>
                            </span>
                            <span>Giftcards</span>
                        </div>
                        <div class="login-item"></div>
                    </div>
                </div>
                <div class="nav-item cart"><span class="material-symbols-outlined">shopping_cart</span><span
                    class="item-name ">Cart</span></div>
                <div class="nav-item seller"><span class="material-symbols-outlined">local_convenience_store</span>Become a
                    Seller
                </div>
                <div class="nav-item menu"><span class="material-symbols-outlined">format_list_bulleted</span></div>
            </div>
        </div>
    );
}

export default Nav;