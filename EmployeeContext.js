import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const EmployeeContext = createContext("");




export const EmployeeContextProvider = (props) => {
    const [employees, setEmployees] = useState([
        { id: uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Thomas Harfsdfsd', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Thomas Hardsgy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Thomas Hk gkdsvsddy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
        { id: uuidv4(), name: 'Thomas Hsdgökwlrewdy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222' },
    ]);



    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, { id: uuidv4(), name, email, address, phone }])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !== id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }

    return (

        <EmployeeContext.Provider value={{ employees, addEmployee, deleteEmployee, updateEmployee }}>
            {props.children}
        </EmployeeContext.Provider>

    )
}

export default EmployeeContext;



