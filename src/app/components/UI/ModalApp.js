import { Modal, Alert } from 'react-bootstrap';


export const ModalApp = ({ children, openModal, closeModal, pathname, itemSelected }) => {

    return <Modal show={openModal} keyboard onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>
                Problem {pathname.charAt(pathname.length - 1)}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Alert className='alert_info_item_description'>
                <Alert.Heading>Item {itemSelected.item}</Alert.Heading>
                <p>{itemSelected.description} </p>
            </Alert>

            <div className='modal_app_content_children'>
                {children}
            </div>
        </Modal.Body>
    </Modal>;
}