import { useState } from "react";
import { VscError } from "react-icons/vsc";
import { Form, Col, Row, Button, Card } from "react-bootstrap";

export const MainProblem1 = () => {

    const [useValuesInputs, setValuesInputs] = useState({
        num1: "",
        num2: ""
    });

    const { num1, num2 } = useValuesInputs;

    const [useResultMultiply, setResultMultiply] = useState(0);

    const [useIsErrorMsg, setIsErrorMsg] = useState("");


    const onChangeInputsValues = (e) => {
        setValuesInputs({
            ...useValuesInputs,
            [e.target.name]: e.target.value
        });
    }

    const onMultiply = () => {

        var reg_num1 = /^[0-9,$]*$/g;
        var reg_num2 = /^[0-9,$]*$/g;

        if (reg_num1.exec(num1) !== null && reg_num2.exec(num2) !== null) {
            var value = 0;

            for (let i = 1; i <= parseInt(num1); i++) {
                value = value + parseInt(num2);
            }

            setResultMultiply(value);
            setIsErrorMsg("");

        } else {
            setIsErrorMsg("No se pudo multiplicar. No has ingresado un número")
        }

        setValuesInputs({
            num1: "",
            num2: ""
        });
    }

    return <Row>
        <Col md={4} className="card_form_inputs_content">
            <Form.Group className="mb-3">
                <Form.Control className="card_form_inputs_input_content" type="text" placeholder="Enter numer 1" name="num1" value={num1} onChange={onChangeInputsValues} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control className="card_form_inputs_input_content" type="text" placeholder="Enter numer 2" name="num2" value={num2} onChange={onChangeInputsValues} />
            </Form.Group>
            <div style={{ textAlign: "center" }}>
                <Button onClick={onMultiply} className="btn_send_data_ok">
                    Multiply
                </Button>
            </div>
        </Col>

        <Col md={8} >
            <Card className="card_result_data_container">
                <Card.Body>
                    {
                        useIsErrorMsg ? <div className="app_error_input_alert_content"><VscError /> {useIsErrorMsg} </div> : <div className="card_result_data_content">
                            <span>{useResultMultiply}</span>
                        </div>
                    }
                </Card.Body>
            </Card>
        </Col>
    </Row>;
}