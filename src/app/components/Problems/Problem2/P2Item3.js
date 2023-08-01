import { CgPokemon } from "react-icons/cg";
import { TbPokeballOff } from "react-icons/tb";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";


export const P2Item3 = (props) => {

    const { data, searchPokemon, valueSearchReady, onSearchPokemon, onChangePokemon } = props;
    
    return <Container>
        <Row>
            <Col md={4} className="card_form_inputs_content">
                <Form.Group className="mb-3">
                    <p style={{ color: "black", textAlign: "center" }}><small>Ej: pikachu | jolteon | tropius</small> </p>
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
                    !data.isLoading && data.length === 0 ? "NO HAY RESULTADOS" : data.id ? <Card >
                        <Card.Body>
                            <Card.Title> "There are results"</Card.Title>
                            N° Pokémon: {data.id && data.id.toString().padStart(4, "0")}
                            <Card.Text>
                            </Card.Text>
                        </Card.Body>
                    </Card> : "CARGANDO"
                }
            </>
        }
    </>;
}