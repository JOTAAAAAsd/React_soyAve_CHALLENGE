/*
    ENDPOINTS:  
        - https://pokeapi.co/api/v2
        - https://pokeapi.co/api/v2/type/ <-- get tipos de pokemones
        - https://pokeapi.co/api/v2/type/2/ <-- get total de pokemones perteneciente a ese tipi (ver el campo pokemon)
        - https://pokeapi.co/api/v2/pokemon/pikachu <-- buscar pokemon

        // NOOOO- OBTENGA https://pokeapi.co/api/v2/pokemon-shape/{id o nombre}/ <-- get tipo pokemon
*/

const BASE = "https://pokeapi.co/api/v2";

export const VARIABLE = {
    type_pokemon: `${BASE}/type`,
    search_pokemon: `${BASE}/pokemon`,
};

export const ENDPOINT = (itemURL = "", querySearch = "") => {

    let uri = "";

    switch (itemURL) {
        case 1:
            uri = VARIABLE.type_pokemon;
            break;
        case 2:
            uri = VARIABLE.type_pokemon;
            break;
        case 3:
            uri = VARIABLE.search_pokemon + `/${querySearch.toLowerCase()}`;
            break;
        case 4:
            uri = VARIABLE.search_pokemon + `/${querySearch.toLowerCase()}`;
            break;
        case 5:
            uri = VARIABLE.search_pokemon + `/${querySearch.toLowerCase()}`;
            break;
        case 6:
            uri = VARIABLE.search_pokemon + `/${querySearch.toLowerCase()}`;
            // uri = VARIABLE.type_pokemon;
            break;
        default:
            break;
    }

    return uri;

}