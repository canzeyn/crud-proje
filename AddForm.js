import React from "react";
import { Button, Form ,FormGroup } from 'react-bootstrap';

 const AddForm = () => {
    <div>
    <Form>
        <FormGroup>
            <Form.Control
                type="text"
                placeholder="Name *"
                required
            />
        </FormGroup>

        <FormGroup>
            <Form.Control
                type="email"
                placeholder="Email *"
                required
            />
        </FormGroup>

        <FormGroup>
            <Form.Control
                as="text-area"
                placeholder="Address *"
                rows={3}
            />
        </FormGroup>

        <FormGroup>
            <Form.Control
                type="text"
                placeholder="Phone"
            />
        </FormGroup>

        <Button variant="success" type="submit" block>
                Add New Employee
        </Button>

    </Form>
    </div>

}

export default AddForm;

