import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';




class FoodModal extends React.Component {



    render() {
        return (
            <>


                <Modal show={this.props.showModal}  >
                    <Modal.Header closeButton onClick={this.props.hideModal} >
                        <Modal.Title>Food Search</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={(e) => this.props.foodSearch(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Meal Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Meal Name"  onChange={(e) => this.props.setMealName(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Max Calories </Form.Label>
                                <Form.Control type="text" placeholder="Enter Calories" onChange={(e) => this.props.setMaxCalories(e)} />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                             </Button>
                            <Button variant="secondary" onClick={this.props.hideModal}>
                                Close
                             </Button>

                        </Form>

                    </Modal.Body>

                </Modal>
            </>
        )


    }

}
export default FoodModal;