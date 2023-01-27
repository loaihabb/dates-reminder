import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const DatesAction = ({deleteData, viewData}) => {
    return (
        <Row className="justify-content-center my-2 ">
            <Col sm="8" className="d-flex justify-content-between">
                <Button onClick={deleteData} className="btn-style p-2">Delete all</Button>
                <Button onClick={viewData} className="btn-style p-2">Show data</Button>

            </Col>
        </Row>
    )
}

export default DatesAction
