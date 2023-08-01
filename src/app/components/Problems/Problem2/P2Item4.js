import { VscError } from "react-icons/vsc";
import { CgPokemon } from "react-icons/cg";
import { TbPokeballOff } from "react-icons/tb";
import { Container, Row, Col, Card, Form, Button, ListGroup } from "react-bootstrap";


import { SiPowerautomate } from "react-icons/si";
import { ImPower } from "react-icons/im";

export const P2Item4 = (props) => {

    const { data, searchPokemon, valueSearchReady, onSearchPokemon, onChangePokemon } = props;

    return <Container>
        <Row>
            <Col md={4} className="card_form_inputs_content">
                <Form.Group className="mb-3">
                    <p style={{ color: "black", textAlign: "center" }}><small>Ej: 35 | 55 | 322</small> </p>
                    <Form.Control type="text" className="card_form_inputs_input_content" placeholder="Buscar pokemón" value={searchPokemon} onChange={onChangePokemon} />
                </Form.Group>

                <div style={{ textAlign: "center" }}>
                    <Button title="Search" onClick={onSearchPokemon} className="btn_send_data_ok">
                        <CgPokemon style={{ transform: "scale(2)" }} />
                    </Button>
                </div>
            </Col>
            <Col md={8} >
                <Card className="card_result_data_container">
                    <Card.Body>
                        <div className="card_result_data_content">
                            {
                                data.isLoading ? "CARGANDO" : <CardData data={data.data} valueSearchReady={valueSearchReady} />
                            }
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>;
}

const CardData = ({ data, valueSearchReady }) => {

    return <>
        {
            !valueSearchReady ? <>
                <p style={{ fontSize: "0.5em", marginBottom: "-5%" }}>Enter Serch</p>
                <TbPokeballOff />
            </> : <>
                {
                    /^[0-9,$]*$/g.exec(valueSearchReady) === null ?
                        <div className="app_error_input_alert_content" style={{ fontSize: ".5em" }}><VscError /> Only numbers are allowed </div> : !data.isLoading && data.length === 0 ?
                            <div className="app_error_input_alert_content" style={{ fontSize: ".5em" }}>No results </div> : data.id ? <Card >
                                <Card.Body>
                                    <Card.Title> "There are results"</Card.Title>
                                    N° Pokémon: {data.id && data.id.toString().padStart(4, "0")}

                                    <Card.Text style={{ textAlign: "left", fontSize: ".3em" }}>

                                        <hr />
                                        <ListGroup as="ul">
                                            <ListGroup.Item as="li" active style={{ backgroundColor: "#95492b", border: "1px solid #5c2c19" }}>
                                                <ImPower /> STAT of {data.name} - {data.id && data.id.toString().padStart(4, "0")}
                                            </ListGroup.Item>
                                            {
                                                data.stats && data.stats.map((e, i) => <ListGroup.Item as="li" key={i} className="mb-3"
                                                    style={{ border: "1px solid #5c2c19" }}>
                                                    <b>{e.stat.name}</b> <SiPowerautomate style={{ color: "#d8aa33" }} /> {e.base_stat}
                                                </ListGroup.Item>)
                                            }
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card> : "CARGANDO"
                }
            </>
        }
    </>;
}