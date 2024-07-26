import React from 'react';
import "./product.css";
import { Container, Row } from 'react-bootstrap';
import { cloth } from '../data/data';
import {CARD} from './product'
function Clothes() {


    return (
        <>
            <Container>

                <Row>

                    {cloth.map((v, i) => {
                        return (
                            <CARD phone={v} />
                        )
                    })}
                </Row>

            </Container>
        </>
    );
}

export default Clothes;