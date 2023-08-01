import { Header } from "./UI/HeaderAndFooter";
import { ContentChallenge } from "./UI/ContentChallenge";
import { Row, Container, Card, Col } from "react-bootstrap";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

export const LayoutPublic = ({ routes }) => {

    const pathname = useLocation().pathname;

    return <>

        <Header pathname={pathname} />

        <Container>
            <ContentChallenge pathname={pathname}>
                <Row>
                    <Col md={8} className="mx-auto">
                        <Card body className="app_layout_card_content">

                            {
                                pathname === "/" ? null : <Card.Header className="app_layout_card_title_content">
                                    Problem {pathname.charAt(pathname.length - 1)}
                                </Card.Header>
                            }
                            <Routes>
                                {
                                    routes.map((route) => (
                                        <Route key={route.path} path={route.path}
                                            exact={route.exact} element={<route.element />} />
                                    ))
                                }
                                <Route path='*' element={<Navigate to='/' />} />
                            </Routes>
                        </Card>
                    </Col>
                </Row>
            </ContentChallenge>
        </Container>
    </>;
}

