import { HomePage } from "../components/Home/HomePage";
import { LayoutPublic } from "../components/AppLayout";
import { MainProblem1 } from "../components/Problems/Problem1/MainProblem1";
import { MainProblem2 } from "../components/Problems/Problem2/MainProblem2";
import { MainProblem3 } from "../components/Problems/Problem3/MainProblem3";
import { MainProblem4 } from "../components/Problems/Problem4/MainProblem4";
import { MainProblem5 } from "../components/Problems/Problem5/MainProblem5";
import { MainProblem6 } from "../components/Problems/Problem6/MainProblem6";
import { MainProblem7 } from "../components/Problems/Problem7/MainProblem7";
import { MainProblem8 } from "../components/Problems/Problem8/MainProblem8";


const COMPONENTS = [HomePage, MainProblem1, MainProblem2, MainProblem3, MainProblem4, MainProblem5,
    MainProblem6, MainProblem7, MainProblem8];

const PATHS = ["/", "/problems/p1", "/problems/p2", "/problems/p3", "/problems/p4", "/problems/p5",
    "/problems/p6", "/problems/p7", "/problems/p8"];

export const funcArrRoutes = () => {
    let arr = [];
    for (let i = 0; i < COMPONENTS.length; i++) {
        arr.push({
            path: PATHS[i],
            element: COMPONENTS[i],
            exact: true
        });
    }
    return arr;
}

export const ROUTES_APP = [
    {
        path: "/*",
        element: LayoutPublic,
        exact: false,
        routes: funcArrRoutes()
    }
];