import { BiFastForward } from "react-icons/bi";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, ListGroup } from "react-bootstrap";

export const P2Item5 = (props) => {

    const { data, dataExtra, fetchMultiple } = props;

    const [useResultOrderBy, setResultOrderBy] = useState([]);

    useEffect(() => {
        if (!data.isLoading) {
            if (data.data.results !== undefined) {
                if (data.data.results.length > 0) {
                    let arrURL = data.data.results.map((e) => e.url);
                    fetchMultiple(data.data.results, arrURL);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.isLoading, data.data.results, useResultOrderBy]);


    const onChangeSelectOption = (e) => {
        if (e.target.value === "DEFAULT") {
            setResultOrderBy(dataExtra.data);
        } else if (e.target.value === "ASC") {
            // eslint-disable-next-line array-callback-return
            setResultOrderBy(dataExtra.data.sort((a, b) => { if (a.name < b.name) { return -1 } }));
        } else if (e.target.value === "DESC") {
            // eslint-disable-next-line array-callback-return
            setResultOrderBy(dataExtra.data.sort((a, b) => { if (a.name > b.name) { return -1 } }));
        }
    }

    return <Container>
        <Row>
            <Col md={4} className="card_form_inputs_content">
                <Form.Group className="mb-3">
                    <Form.Select onChange={onChangeSelectOption} className="card_form_inputs_input_content">
                        <option value="DEFAULT" >Default</option>
                        <option value="ASC" >ASC</option>
                        <option value="DESC" >DESC</option>
                    </Form.Select>
                </Form.Group>
            </Col>
            <Col md={8} >
                <Card className="card_result_data_container">
                    <Card.Body>
                        <div className="card_result_data_content">
                            <Card >
                                <Card.Body>
                                    {
                                        data.isLoading ? "CARGANDO" : <CardData dataExtra={dataExtra} useResultOrderBy={useResultOrderBy} />
                                    }
                                </Card.Body>
                            </Card>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row >
    </Container>;
}

const CardData = ({ dataExtra, useResultOrderBy }) => {

    return <Card.Text style={{ textAlign: "left", fontSize: ".3em" }}>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active style={{ backgroundColor: "#414f56", border: "1px solid #1d2428" }}>
                POKÉMONS
            </ListGroup.Item>
            {
                useResultOrderBy.length > 1 ? useResultOrderBy.map((e, i) => <ListGroup.Item as="li" key={i} className="mb-3"
                    style={{ border: "1px solid #5c2c19" }}>
                    <b>Name: </b> {e.name} <BiFastForward /> <b>ID:</b> id: {e.id} <BiFastForward /> <b>Weight:</b> {e.weight}
                </ListGroup.Item>) : !dataExtra.isLoading && dataExtra.data?.length > 0 ? <>
                    {
                        dataExtra.data.map((e, i) => <ListGroup.Item as="li" key={i} className="mb-3"
                            style={{ border: "1px solid #5c2c19" }}>
                            <b>Name: </b> {e.name} <BiFastForward /> <b>ID:</b> id: {e.id} <BiFastForward /> <b>Weight:</b> {e.weight}
                        </ListGroup.Item>)
                    }
                </> : "LOADING"
            }
        </ListGroup>
    </Card.Text>;
}