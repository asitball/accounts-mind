import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmationPassword] = useState('');
    const [error, setError] = useState('');
    
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePassword = event => {
        setPassword(event.target.value)
    }
    const handleConfirmationPassword = event => {
        setConfirmationPassword(event.target.value)
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if(password !==confirmationPassword){
            setError('your confirmation password is wrong')
        }
        createUserWithEmailAndPassword(email, password);
        console.log(email,password)
    }
    return (
        <div className='container w-50'>
            <h4 className='mt-5 pt-5'>Please Register</h4>
            <Form onSubmit={handleCreateUser} className=''>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Group className="my-4" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Enter your password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your confirmation Password</Form.Label>
                    <Form.Control onBlur={handleConfirmationPassword} type="password" placeholder="Enter your confirm password" required />
                </Form.Group>
                <p style={{color:'red'}}>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="Register">
                    Register
                </Button>
                <p>
                    Already have an account?
                    <Link to='/login'>Login</Link>
                </p>
            </Form>

        </div>
    );
};

export default Register;