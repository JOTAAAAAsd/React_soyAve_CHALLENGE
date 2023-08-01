import ave from "../../assets/imgs/ave_challenge_logo.png";

import { funcArrRoutes } from "../../config/routes_app";
import { Link, NavLink } from "react-router-dom";
import { Image, Container, Nav, Navbar } from "react-bootstrap";


const NAVIGATION = () => {
    let arr = [];
    let names = ["HOME", "P 1", "P 2", "P 3", "P 4", "P 5", "P 6", "P 7", "P 8"];

    funcArrRoutes().forEach((e, i) => {
        e.element = names[i];
        arr.push(e);
    });
    return arr;
}

export const Header = ({ pathname }) => {

    return <Navbar expand="lg" className="mb-5 header_navbar_custom">
        <Container>
            <Navbar.Brand>
                <Link to="/">
                    <Image src={ave} width={150} />
                </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0" navbarScroll >
                    {
                        NAVIGATION().map((e, i) => <NavLink key={i} to={e.path} id="section_home_active" exact={e.exact.toString()} className={`${pathname === e.path ? "header_navbar_custom_li_item_active" : ""}
                         header_navbar_custom_li_items`} >
                            {e.element}
                        </NavLink>)

                    }
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>;
}