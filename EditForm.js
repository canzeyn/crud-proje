import React from "react";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";
import { useContext } from "react";
import EmployeeContext from "../contexts/EmployeeContext";



const EditForm = () => {

    const { updatedEmployee } = useContext(EmployeeContext);
    <div>







        <Form>
            <FormGroup>
                <Label for="Name"> Name *</Label>
                <Input type="text" placeholder="Name *" required />

            </FormGroup>
            <Label for="Email"> Email *</Label>
            <Input type="email" placeholder="Email *" required />

            <FormGroup>
                <Label for="password"> Password</Label>
                <Input type="password" placeholder="Password *" required />

            </FormGroup>

            <FormGroup>
                <Label for="Address"> Address</Label>
                <Input type="textarea" placeholder="Address" required />
            </FormGroup>

            <FormGroup>
                <Label for="Phone"> Phone *</Label>
                <Input type="text" placeholder="Phone *" required />
            </FormGroup>

            <Button variant="success" type="submit" block>
                Edit employee
            </Button>

        </Form>





    </div>
}


export default EditForm;
