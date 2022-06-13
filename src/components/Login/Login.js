import React from 'react';
import { Form, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div className='container w-50'>
            <h4 className='mt-5 pt-5'>Please Login</h4>
            <Form className=' mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
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
                <Button variant="primary" type="Login">
                    Login
                </Button>
                <br />
                <br />
                <Button onClick={signInWithGoogle} variant="primary" type="Login">
                    Google Sign In
                </Button>
            </Form>

        </div>
    );
};

export default Login;