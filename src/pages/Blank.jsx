import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Button, Container, NavDropdown,NavbarBrand } from 'react-bootstrap';

const Blank = () => {
    return (
        <div className="complain">
    <Container>
        <Row>
            <Col className = "text-center mt-5 mb-2  ">
                <Button class="btn btn-dark">
                    Add Complain
                </Button>
            </Col>
        </Row>

        <Row>
            <Col className = "text-center mb-2  ">
                <div>Total Complaints: 30</div>
                <div>Pending Complaints: 5</div>
            </Col>
        </Row>

        <Row>
            <Col className = "mt-5">
               Recently Added Complaints
            </Col>
        </Row>
        <hr />

        <Row>
            <Col className = "recent-complaints">
                
                {/* <ComplaintTable /> */}
            </Col>
        </Row>


        
    </Container>

    </div>
    )
}

export default Blank



