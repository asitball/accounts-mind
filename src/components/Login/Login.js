import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleLogin = event =>{
        event.preventDefult()
    }
    return (
        <div className='container w-50'>
            <h4 className='mt-5 pt-5'>Please Login</h4>
            <Form onSubmit={handleLogin} className=' mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Group className="my-4" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </Form.Group>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter your password" required />
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
                <p>Are your new user? 
                    <Link to='/register'>Register</Link>
                </p>
            </Form>

        </div>
    );
};

export default Login;