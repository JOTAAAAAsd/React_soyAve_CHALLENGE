import { strongValidator } from "../../../_Helpers/strongValidator";
import { useEffect, useState } from "react";
import { Form, Row, Col, Card } from 'react-bootstrap';

export const MainProblem5 = () => {

    const [usePasswordValue, setPasswordValue] = useState("");
    const [useArrStatusInput, setArrStatusInput] = useState([]);

    useEffect(() => {
        setArrStatusInput(strongValidator(""));
    }, []);

    const onChangeInputValue = (e) => {
        let value = e.target.value;
        setPasswordValue(value);
        setArrStatusInput(strongValidator(value));
    }

    return <Row>
        <Col md={4} className="card_form_inputs_content">
            <Form.Group className="mb-3">
                <p style={{ color: "black", textAlign: "center" }}><small>Item 5 incompleto</small> </p>
                <Form.Control type="password" className="card_form_inputs_input_content" placeholder="Enter password" onChange={onChangeInputValue} value={usePasswordValue} />
            </Form.Group>
        </Col>
        <Col md={8} >
            <Card className="card_result_data_container">
                <Card.Body>
                    <div className="" style={{ textAlign: "left" }}>
                        {
                            useArrStatusInput.map((e, i) => <li key={i} style={{ color: e.error ? "red" : "green" }} >
                                {e.message}
                            </li>)
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </Row>;
}