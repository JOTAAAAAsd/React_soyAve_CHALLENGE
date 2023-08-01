import axios from "axios";

import { CgPokemon } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

export const P2Item6 = () => {

    const [useBuscarPokemonNumero, setBuscarPokemonNumero] = useState("");
    const [useBuscarPokemonTipo, setBuscarPokemonTipo] = useState("");

    const [useArrResultIdPokemon, setArrResultIdPokemon] = useState([]);
    const [useArrResultTypePokemon, setArrResultTypePokemon] = useState([]);
    const [useResultSearch, setResultSearch] = useState([]);

    const onChangeBuscarPokemonNumero = (e) => {
        setBuscarPokemonNumero(e.target.value)
    }

    const onChangeBuscarPokemonTipo = (e) => {
        setBuscarPokemonTipo(e.target.value)
    }

    useEffect(() => {
        if (useArrResultTypePokemon?.length > 0) {
            setResultSearch(useArrResultTypePokemon?.filter((e, i) => e.pokemon.name === useArrResultIdPokemon.name));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useArrResultTypePokemon])

    // PIDGEY=> 16 | normal
    const onBuscarExistencia = () => {
        const arrURL = ["https://pokeapi.co/api/v2/pokemon/" + useBuscarPokemonNumero, "https://pokeapi.co/api/v2/type/" + useBuscarPokemonTipo]
        axios.all(arrURL.map((e) => [axios.get(e)])).then(axios.spread((pokemon, type) => {
            pokemon.forEach((e, i) => {
                e.then((res) => {
                    // console.log(res.data);
                    setArrResultIdPokemon(res.data);
                }).catch((error) => {
                    // console.log(error.message);
                    alert("MSG FROM ID POKEMON: " + error.message);
                });
            });
            type.forEach((e, i) => {
                e.then((res) => {
                    // console.log(res.data.pokemon);
                    setArrResultTypePokemon(res.data.pokemon);
                }).catch((error) => {
                    // console.log(error.message);
                    alert("MSG FROM TYPE POKEMON: " + error.message);
                });
            });
        }));
    }

    return <Container>
        <Row>
            <Col md={4} className="card_form_inputs_content">
                <Form.Group className="mb-3">
                    <p style={{ color: "black", textAlign: "left", marginBottom: "1%" }}><small>Ej: 16</small> </p>
                    <Form.Control type="text" className="card_form_inputs_input_content" placeholder="Número del pokemon" value={useBuscarPokemonNumero} onChange={onChangeBuscarPokemonNumero} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <p style={{ color: "black", textAlign: "left", marginBottom: "1%" }}><small>Ej: normal</small> </p>
                    <Form.Control type="text" className="card_form_inputs_input_content" placeholder="Tipo del pokemon" value={useBuscarPokemonTipo} onChange={onChangeBuscarPokemonTipo} />
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                    <Button title="Search" onClick={onBuscarExistencia} className="btn_send_data_ok">
                        <CgPokemon style={{ transform: "scale(2)" }} />
                    </Button>
                </div>
            </Col>

            <Col md={8} >
                <Card className="card_result_data_container">
                    <Card.Body>
                        <div className="card_result_data_content">
                            <CardData data={useResultSearch} />
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>;
}

const CardData = ({ data }) => {
    return data.length === 0 ? "FALSE" : "TRUE";
}