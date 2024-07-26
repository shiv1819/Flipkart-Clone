import './about-nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AboutNav() {
    const [isActive, setIsActive] = useState('true')
    const ToggleClass = () => {
        setIsActive(!isActive)
    }
    return (
        <div class="about-nav-main">
            <div class="hamburger">
                <div onClick={ToggleClass}>
                    <i class="fa fa-bars"></i>
                </div>
                <div class={!isActive ? 'aboout-nav-right active' : 'about-nav-right'}>
                    <div class="about-nav-item"><Link to="/About-main">About Us</Link></div>
                    <div class="about-nav-item">Ethics</div>
                    <div class="about-nav-item">culture</div>
                    <div class="about-nav-item">technology</div>
                    <div class="about-nav-item"><Link to="/Article-main">Sustainability</Link></div>
                    <div class="about-nav-item">stories</div>
                </div>
            </div>
            <div class="about-nav-left">
                <Link to="/"><img src={require('../images/nav-logo.png')} alt="..."></img></Link>
            </div>
            <div class="about-nav-right">
                <div class="about-nav-item"><Link to="/About-main">About Us</Link></div>
                <div class="about-nav-item">Ethics</div>
                <div class="about-nav-item">culture</div>
                <div class="about-nav-item">technology</div>
                <div class="about-nav-item"><Link to="/Article-main">Sustainability</Link></div>
                <div class="about-nav-item">stories</div>
            </div>
        </div>
    );
}

export default AboutNav;
