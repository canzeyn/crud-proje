

import React from "react";
import Employee from "./Employee";
import { useState, useContext, useEffect } from "react";
import EmployeeContext from "../contexts/EmployeeContext";
import { Button, Modal, Form, FormGroup } from "react-bootstrap";
import AddForm from "../components/AddForm";
import { Label, Alert } from "reactstrap";
import Pagination from "./Pagination";



const EmployeeList = () => {



  const [showAlert , setShowAlert] = useState(false)

  const [show, setShow] = useState(false);

  const { employees } = useContext(EmployeeContext);

  const { addEmployee } = useContext(EmployeeContext);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  const [newEmployee, setNewEmployee] = useState({
    name: "", email: "", phone: "", address: ""
  })

  const { name, email, phone, address } = newEmployee;



  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  }


  const handleShowAlert = () => {setShowAlert(false)}



  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleClose();

    return () => {
      handleShowAlert()
    }
  }, [employees])

  return (

    <div>

      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div class="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success text-white" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
          </div>
        </div>
      </div>

      <Alert color="info" isOpen={showAlert} toggle={handleShowAlert}>bu alert</Alert>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {

            employees.sort((a,b) => a.name.localeCompare(b.name)).map((employee) => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            )
            )
          }

        </tbody>


      </table>



      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

          <Modal.Title>
            Add Employee
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>Name * </Form.Label>
              <Form.Control
                type="text"
                placeholder="Name *"
                required
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </FormGroup>

            <FormGroup>
              <Form.Label>Email * </Form.Label>
              <Form.Control
                type="email"
                placeholder="Email *"
                required
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </FormGroup><br />

            <FormGroup>

              <Form.Control
                as="textarea"
                placeholder="Address *"
                onChange={e => onInputChange(e)}
                name="address"
                value={address}
                rows={3}

              />
            </FormGroup><br />

            <FormGroup>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </FormGroup><br />

            <Button variant="success" type="submit" block>
              Add New Employee
            </Button>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>





    </div>
  )
}

export default EmployeeList;
