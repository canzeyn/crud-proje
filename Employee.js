import React from "react";
// import {Button} from "reactstrap";
import { useContext, useState } from "react";
import EmployeeContext from "../contexts/EmployeeContext";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Label, Input, FormGroup } from "reactstrap";
import EditForm from "./EditForm"


const Employee = ({ employee }) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleClose = () => setModal(false);

    const { deleteEmployee } = useContext(EmployeeContext);
    const { updateEmployee } = useContext(EmployeeContext)

    const id = employee.id;


    const [name, setName] = useState(employee.name);
    const [email, setEmail] = useState(employee.email);
    const [address, setAddress] = useState(employee.address);
    const [phone, setPhone] = useState(employee.phone);

    const updatedEmployee = { id, name, email, address, phone }

    const handleSubmit = (e) => {
        e.preventDefault()
    }


    return (


        <>

            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.address}</td>
            <td>{employee.phone}</td>
            <td>
                <Button onClick={toggle} className="btn text-warning bg-white" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></Button>
                <Button onClick={() => deleteEmployee(employee.id)} className="btn text-danger bg-white" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></Button>
            </td>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>
                    Add Form
                </ModalHeader>
                <ModalBody>

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="Name" > Name *</Label>
                            <Input type="text" placeholder="Name *" value={name} name="name" onChange={(e) => setName(e.target.value)} required />

                        </FormGroup>
                        <Label for="Email" > Email *</Label>
                        <Input type="email" placeholder="Email *" value={email} name="email" onChange={(e) => setEmail(e.target.value)} required />

                        {/* <FormGroup>
                <Label for="password"> Password</Label>
                <Input type="password" placeholder="Password *" required />

            </FormGroup> */}

                        <FormGroup>
                            <Label for="Address" value={address} name="address" > Address</Label>
                            <Input type="textarea" placeholder="Address" value={address} name="address" onChange={(e) => setAddress(e.target.value)} required />
                        </FormGroup>

                        <FormGroup>
                            <Label for="Phone" > Phone *</Label>
                            <Input type="text" placeholder="Phone *" value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} required />
                        </FormGroup>

                        <Button variant="success" type="submit" block>
                            Edit employee
                        </Button>

                    </Form>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={toggle}>
                        Close Button
                    </Button>
                </ModalFooter>
            </Modal>


        </>


    )
}

export default Employee;
