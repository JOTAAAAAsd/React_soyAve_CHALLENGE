import { Button } from "react-bootstrap";
import { P2Item1 } from "./P2Item1";
import { P2Item2 } from "./P2Item2";
import { P2Item3 } from "./P2Item3";
import { P2Item4 } from "./P2Item4";
import { P2Item5 } from "./P2Item5";
import { P2Item6 } from "./P2Item6";
import { useState } from "react";
import { ModalApp } from "../../UI/ModalApp";
import { STATEMENT } from "../../../assets/data-map/statement";
import { PiGearBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";
import { useAxiosFetch } from "../../../config/useAxiosFetch";

export const MainProblem2 = () => {

    const pathname = useLocation().pathname;

    const INDEX = parseInt(pathname.charAt(pathname.length - 1) - 1);

    const [useOpenModal, setModalApp] = useState(false);

    const [useItemSelectedData, setItemSelectedData] = useState({});

    const { useDataApi, useDataApiExtra, useSearchInputChange, useSearchPokemon,
        axiosFetchMultiple, onSearchPokemon, onChangeSearchPokemon
    } = useAxiosFetch(useItemSelectedData.item, useOpenModal);


    const onExecuteAction = (description, item) => {
        setModalApp(true);
        setItemSelectedData({
            item: item + 1,
            description: description
        });
    }

    return <>
        <div style={{ textAlign: STATEMENT[INDEX] ? "center" : "" }}>
            {
                STATEMENT[INDEX].items.length > 1 ? STATEMENT[INDEX].items.map((e, i) => <Button key={i}
                    className="main_problem_btn_item_open_modal" onClick={() => onExecuteAction(e, i)} onMouseDown={(e) => e.preventDefault()}>
                    <div>
                        <PiGearBold style={{ color: "black", transform: "scale(1.5)", marginRight: "3%" }} />
                    </div>
                    Item {i + 1}
                </Button>) : null
            }

            <div>
                <ModalApp openModal={useOpenModal} closeModal={() => setModalApp(false)}
                    pathname={pathname} itemSelected={useItemSelectedData}>

                    {
                        (useItemSelectedData.item === 1 && <P2Item1 data={useDataApi} dataExtra={useDataApiExtra}
                            fetchMultiple={axiosFetchMultiple} />) ||

                        (useItemSelectedData.item === 2 &&
                            <P2Item2 data={useDataApi} dataExtra={useDataApiExtra}
                                fetchMultiple={axiosFetchMultiple} />) ||


                        (useItemSelectedData.item === 3 &&
                            <P2Item3 data={useDataApi} dataExtra={useDataApiExtra} searchPokemon={useSearchInputChange} valueSearchReady={useSearchPokemon}
                                onChangePokemon={onChangeSearchPokemon}
                                onSearchPokemon={onSearchPokemon} />) ||


                        (useItemSelectedData.item === 4 &&
                            <P2Item4 data={useDataApi} searchPokemon={useSearchInputChange} valueSearchReady={useSearchPokemon}
                                onChangePokemon={onChangeSearchPokemon} onSearchPokemon={onSearchPokemon} />) ||

                        (useItemSelectedData.item === 5 &&
                            <P2Item5 data={useDataApi} dataExtra={useDataApiExtra}
                                fetchMultiple={axiosFetchMultiple} onSearchPokemon={onSearchPokemon} />) ||

                        (useItemSelectedData.item === 6 &&
                            <P2Item6 />)
                    }
                </ModalApp>
            </div>
        </div>
    </>;
}