import { problem4 } from "../../../_Helpers/problem4";
import { Row, Col, ListGroup } from "react-bootstrap";

export const MainProblem4 = () => {

    const { totalItems, parPercentage, imparPercentage, numMax, numMin, numMax1000Percentage } = problem4();

    return <Row>
        <Col md={6} className="card_form_inputs_content mx-auto">
            <ListGroup>
                <ListGroup.Item><b>Total items: </b>{totalItems}</ListGroup.Item>
                <ListGroup.Item><b>Par percentage:</b> {parPercentage}</ListGroup.Item>
                <ListGroup.Item><b>Impar percentage:</b> {imparPercentage}</ListGroup.Item>
                <ListGroup.Item><b>Max number:</b> {numMax}</ListGroup.Item>
                <ListGroup.Item><b>Min number:</b> {numMin}</ListGroup.Item>
                <ListGroup.Item><b>Num Max 1000 number:</b> {numMax1000Percentage}</ListGroup.Item>
            </ListGroup>
        </Col>
    </Row>;
}