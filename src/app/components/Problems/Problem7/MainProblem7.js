
import { AiFillEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { BsFillEyeFill, BsFillTrash3Fill } from "react-icons/bs";
import { Row, Col, Form, Button, Card, Table, ButtonGroup } from "react-bootstrap";


export const MainProblem7 = () => {

    const [useInputValueTodo, setInputValueTodo] = useState({
        name: "",
        date: "",
        priority: "",
        description: ""
    });

    const { name, date, priority, description } = useInputValueTodo;

    const [useArrDataTodo, setArrDataTodo] = useState([]);
    const [useDataToEdit, setDataToEdit] = useState({});

    useEffect(() => {

        if (Object.keys(useDataToEdit).length > 0) {
            setInputValueTodo({
                name: useDataToEdit.name,
                date: useDataToEdit.date,
                priority: useDataToEdit.priority,
                description: useDataToEdit.description
            });
        } else {
            setInputValueTodo({
                name: "",
                date: "",
                priority: "",
                description: ""
            });
        }
    }, [useDataToEdit]);



    const onChangeInputValueTodo = (e) => {
        setInputValueTodo({
            ...useInputValueTodo,
            [e.target.name]: e.target.value,
        });
    }

    const onAddData = () => {

        if (Object.keys(useDataToEdit).length > 0) {

            let arr_update = useArrDataTodo.map((data) => data.name === useDataToEdit.name ? useInputValueTodo : data);

            setArrDataTodo(arr_update);
            setDataToEdit({});
        } else {
            setArrDataTodo(item => item && [...item, useInputValueTodo]);
        }
        setInputValueTodo({
            name: "",
            date: "",
            priority: "",
            description: ""
        });
    }

    const onPrepareToEdit = (object) => {
        setDataToEdit(object);
    }

    const onDeleteData = (id) => {
        let arr_del = useArrDataTodo.filter((item) => item.name !== useArrDataTodo[id].name);
        setArrDataTodo(arr_del);
    }

    const onViewAlertDescription = (id) => {
        alert(useArrDataTodo[id].description);
    }



    return <Row>
        <p>
            El filtrador para eliminar y/o actualizar está bajo el "name", por lo que si se repite el name funcionará mal cuando intentemos
            eliminar, ya que nos eliminará todas las coincidencias.
        </p>
        <Col md={4} className="card_form_inputs_content">
            <Form.Group className="mb-3">
                <Form.Control className="card_form_inputs_input_content" type="text" placeholder="Enter name"
                    name="name" value={name} onChange={onChangeInputValueTodo} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control className="card_form_inputs_input_content" type="date"
                    name="date" value={date} onChange={onChangeInputValueTodo} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Select className="card_form_inputs_input_content" name="priority" value={priority} onChange={onChangeInputValueTodo}>
                    <option value="Low" >Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={3} className="card_form_inputs_input_content"
                    name="description" value={description} onChange={onChangeInputValueTodo} />
            </Form.Group>

            <div style={{ textAlign: "center" }}>
                <Button onClick={onAddData} className="btn_send_data_ok">
                    {Object.keys(useDataToEdit).length > 0 ? "Update" : "Add"}
                </Button>
            </div>
        </Col>

        <Col md={8} >
            <Card className="card_result_data_container">
                <Card.Body>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Priority</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                useArrDataTodo.map((e, i) => <tr>
                                    <td>{i + 1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.date}</td>
                                    <td>{e.priority}</td>
                                    <td>
                                        <ButtonGroup size="sm">
                                            <Button variant="primary" onClick={() => onViewAlertDescription(i)}><BsFillEyeFill /></Button>
                                            <Button variant="warning" onClick={() => onPrepareToEdit(e)}><AiFillEdit /></Button>
                                            <Button variant="danger" onClick={() => onDeleteData(i)}><BsFillTrash3Fill /></Button>
                                        </ButtonGroup>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Col>
    </Row>;
}