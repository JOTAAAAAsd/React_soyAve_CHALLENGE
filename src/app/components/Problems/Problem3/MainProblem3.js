import { useState } from "react";
import { strongValidator } from "../../../_Helpers/strongValidator";
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

export const MainProblem3 = () => {

    const [usePasswordValue, setPasswordValue] = useState("");
    const [useArrMsgInput, setArrMsgInput] = useState([]);

    const onChangeInputValue = (e) => {
        let value = e.target.value;
        setPasswordValue(value);
        // setArrMsgInput(strongValidator(value));
    }

    const onValidateNow = () => {
        setArrMsgInput(strongValidator(usePasswordValue));
    }

    return <>
        <Row>
            <Col md={4} className="card_form_inputs_content">
                <Form.Group className="mb-3">
                    <p style={{ color: "black", textAlign: "center" }}><small>Item 5 incompleto</small> </p>
                    <Form.Control type="password" className="card_form_inputs_input_content" placeholder="Enter password" onChange={onChangeInputValue} value={usePasswordValue} />
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                    <Button onClick={onValidateNow} className="btn_send_data_ok">
                        Validate
                    </Button>
                </div>
            </Col>
            <Col md={8} >
                <Card className="card_result_data_container" style={{ fontSize: ".3em" }}>
                    <Card.Body>
                        <div className="card_result_data_content" style={{ textAlign: "left" }}>
                            {
                                useArrMsgInput.map((e, i) => <li key={i}>{e.message}</li>)
                            }
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </>;
}