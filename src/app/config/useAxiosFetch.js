import axios from "axios";

import { ENDPOINT } from "./VARIABLE";
import { useState, useEffect } from "react";

export const useAxiosFetch = (itemURL = "", isOpenModal = false) => {

    const [useDataApi, setDataApi] = useState({
        data: [],
        isLoading: true,
        error: ""
    });

    const [useDataApiExtra, setDataApiExtra] = useState({
        data: [],
        isLoading: true
    });

    const [useSearchInputChange, setSearchInputChange] = useState("");
    const [useSearchPokemon, setSearchPokemon] = useState("");

    useEffect(() => {
        const controller = new AbortController()
        const { signal } = controller

        if (isOpenModal) {
            const URL = ENDPOINT(itemURL, useSearchPokemon);

            axios.get(URL, { signal }).then((data) => {

                setDataApi({
                    data: data.data,
                    isLoading: false,
                    error: ""
                });

            }).catch((error) => {
                setDataApi({
                    data: [],
                    isLoading: false,
                    error: error.message
                });
            });
        } else {
            onCleanState();
        }

        return () => controller.abort()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpenModal, useSearchPokemon]);


    const axiosFetchMultiple = (dataFather = [], arrURL = []) => {

        let arrRes = [];

        if (isOpenModal) {
            axios.all(arrURL.map((e) => [axios.get(e)])).then(axios.spread((...extra) => {
                if (extra.length > 0) {
                    for (let i = 0; i < dataFather.length; i++) {
                        extra[i][0].then((res) => {
                            arrRes.push(res.data);
                            setDataApiExtra({
                                data: arrRes,
                                isLoading: false
                            });
                        });
                    }
                }
            }));
        }
    }

    const onChangeSearchPokemon = (e) => {
        setSearchInputChange(e.target.value);
    }

    const onSearchPokemon = () => {
        setSearchPokemon(useSearchInputChange);
    }

    const onCleanState = () => {
        setDataApi({
            data: [],
            isLoading: true,
            error: ""
        });

        setDataApiExtra({
            data: [],
            isLoading: true
        });
        setSearchInputChange("");
        setSearchPokemon("");
    }

    return {
        useDataApi,
        useDataApiExtra,
        useSearchInputChange,
        useSearchPokemon,
        setDataApiExtra,
        setSearchInputChange,
        axiosFetchMultiple,
        onSearchPokemon,
        onChangeSearchPokemon,
    }
}