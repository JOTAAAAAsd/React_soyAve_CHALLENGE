import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export const P2Item1 = (props) => {

    const { data, dataExtra, fetchMultiple } = props;

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
    }, [data.isLoading, data.data.results]);

    return <Container>
        <Row>
            {
                data.isLoading ? "LOADING" : <CardData data={data.data.results} dataExtra={dataExtra} />
            }
        </Row>
    </Container>;
}


const CardData = ({ data, dataExtra }) => {

    return data !== undefined ? data.map((e, i) => <Col md={3} className="mb-3" key={i}>
        <Card style={{ height: "100%", border: "2px solid #255766", backgroundColor: "#5b96a5", color: "black", borderRadius: "0" }}>
            <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>
                    {
                        !dataExtra.isLoading && dataExtra.data.length > 0 ? <>
                            {
                                dataExtra.data.map((j, i) => j.name === e.name && <ul key={i}>
                                    {
                                        j.pokemon.map((e, i) => <li
                                            key={i} style={{ listStyle: "none" }}>
                                            {e.pokemon.name}
                                        </li>)
                                    }
                                </ul>)
                            }
                        </> : "LOADING"
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>) : null
}