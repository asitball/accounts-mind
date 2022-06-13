import React from 'react';
import { Form, Button } from 'react-bootstrap';
const Register = () => {
    return (
        <div className='container w-50'>
            <h4 className='mt-5 pt-5'>Please Register</h4>
            <Form className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Group className="my-4" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="Register">
                   Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;