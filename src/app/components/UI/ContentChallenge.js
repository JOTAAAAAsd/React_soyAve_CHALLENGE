import { STATEMENT } from "../../assets/data-map/statement";
import { useEffect, useState } from "react";
import { FaCircleQuestion, FaGear } from "react-icons/fa6";
import { Alert, ButtonGroup, Button } from "react-bootstrap";



export const ContentChallenge = ({ children, pathname }) => {

    const [useIsSelectedResult, setIsSelectedResult] = useState(true);

    useEffect(() => {
        setIsSelectedResult(false);
    }, [pathname]);

    return <>

        <Alert className="alert_custom_content">

            {
                pathname === "/" ? children : <div style={{ textAlign: "right", marginBottom: "1%" }}>
                    <ButtonGroup aria-label="Basic example">
                        <Button className={`${!useIsSelectedResult ? "btn_challenge_p_active" : "btn_challenge_p"}`} onClick={() => setIsSelectedResult(false)} onMouseDown={(e) => e.preventDefault()}><FaCircleQuestion /> Statement</Button>
                        <Button className={`${useIsSelectedResult ? "btn_challenge_p_active" : "btn_challenge_p"}`} onClick={() => setIsSelectedResult(true)} onMouseDown={(e) => e.preventDefault()}><FaGear /> Result</Button>
                    </ButtonGroup>
                </div>
            }

            {
                !useIsSelectedResult ? STATEMENT.map((e, i) => <div key={i}>
                    {
                        pathname.includes((i + 1).toString()) && <>
                            <div className="title">
                                {e.title}
                            </div>

                            <div className="content">
                                <div>
                                    {e.description}
                                </div>

                                <div className="items">
                                    {
                                        e.items.length > 0 && <ul>
                                            {
                                                e.items.map((e, i) => <li key={i}> {e}</li>)
                                            }
                                        </ul>
                                    }
                                </div>
                            </div>
                        </>
                    }
                </div>) : children
            }

        </Alert >
    </>;
}