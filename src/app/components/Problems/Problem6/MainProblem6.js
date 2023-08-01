
import axios from "axios";

import { useState } from "react";
import { Row, Col, Form, Button, Card, Image, ListGroup } from "react-bootstrap";

export const MainProblem6 = () => {

    const [useSearchPokemon, setSearchPokemon] = useState("");
    const [useDataApi, setDataApi] = useState({
        data: [],
        isLoading: false,
        error: ""
    });

    const onSearchPokemon = () => {

        const URL = `https://pokeapi.co/api/v2/pokemon/${useSearchPokemon}`;

        axios.get(URL).then((data) => {

            setDataApi({
                data: data.data,
                isLoading: false,
                error: ""
            });

        }).catch((error) => {
            alert(error.message);
        });
    }

    return <Row>
        <Col md={4} className="card_form_inputs_content">
            <Form.Group className="mb-3">
                <p style={{ color: "black", textAlign: "center" }}><small>Ej: Name: pikachu | ID: 25</small> </p>
                <Form.Control className="card_form_inputs_input_content" type="text" placeholder="Search Pokémon" value={useSearchPokemon} onChange={(e) => setSearchPokemon(e.target.value)} />
            </Form.Group>

            <div style={{ textAlign: "center" }}>
                <Button onClick={onSearchPokemon} className="btn_send_data_ok">
                    Search
                </Button>
            </div>
        </Col>

        <Col md={8} >
            <Card className="card_result_data_container">
                <Card.Body style={{ textAlign: "center" }} >
                    {
                        useDataApi.isLoading ? "LOADING" : useDataApi.data.length === 0 ? null : <div >
                            <ListGroup>
                                <ListGroup.Item><b>ID: </b>{useDataApi.data.id} - <b>Name: </b>{useDataApi.data.name}</ListGroup.Item>
                                <ListGroup.Item><b>Height: </b>{useDataApi.data.height} - <b>Weight: </b>{useDataApi.data.weight}</ListGroup.Item>
                                <ListGroup.Item><b>Type: </b>{useDataApi.data.types && useDataApi.data.types[0].type.name}  <Image src={useDataApi.data.sprites?.front_default} /></ListGroup.Item>
                            </ListGroup>
                        </div>
                    }
                </Card.Body>
            </Card>
        </Col>
    </Row>;
}