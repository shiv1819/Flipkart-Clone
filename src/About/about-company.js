import './about-company.css';
function Company() {
return (
<div class="about-company-main container">
    <div class="about-left">
        <div class="about-left-title">
            <img src={require('../images/about-logo.png')} alt="..."></img>
        </div>
        <div class="company-content">
            <p>The Flipkart Group is one of India’s leading digital commerce entities and includes group companies
                Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.

            </p>
            <p>
                Started in 2007, Flipkart has enabled millions of sellers, merchants, and small businesses to participate
            in India's digital commerce revolution. With a registered customer base of more than 500 million, Flipkart's
            marketplace offers over 150 million products across 80+ categories. Today, there are over 14 lakh sellers on
            the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering
            value through technology and innovation, Flipkart has created lakhs of jobs in the ecosystem while
            empowering generations of entrepreneurs and MSMEs. Flipkart is known for pioneering services such as Cash on
            Delivery, No Cost EMI and easy returns, which are customer-centric innovations that have made online
            shopping more accessible and affordable for millions of Indians.
            </p>
        </div>
    </div>
    <div class="about-right">
        <img src={require('../images/company-img.png')} alt="..."></img>
    </div>
</div>
);
}

export default Company;