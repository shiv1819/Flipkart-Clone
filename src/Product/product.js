import React from 'react'
import "./product.css"
import { Container, Row } from 'react-bootstrap'
import { cloth, data } from '../data/data';
function Product() {


    return (
        <Container>

            <Row>
                {data.map((v, i) => {
                    return (
                        <CARD phone={v} />
                    )
                })}

            </Row>

        </Container>
    );
}

export default Product;

function CARD(props) {
    return (
        <div class="card-main mb-4 col-lg-3">
            <div class="card printed " >
                <img class="card-img-top" src={props.phone.image} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Flipkart &#174;</h5>
                    <p class="card-text">{props.phone.title}</p>
                    <h5 class="card-price"><span class="price">{props.phone.price} </span><del>{props.phone.oldPrice}</del> <span class="off">{props.phone.off}</span></h5>
                </div>
            </div>
        </div>
    )
}


export { CARD };