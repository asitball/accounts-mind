import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container mt-4'>
            <h2>1. Difference between authorization and authentication:</h2>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Authorization</th>
                        <th>Authentication</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Authorization determines what resources a user can access</td>
                        <td>Authentication verifies who the user is.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                        <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Authorization always takes place after authentication.</td>
                        <td>Authentication is the first step of a good identity and access management process.</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Authentication is visible to and partially changeable by the user.</td>
                        <td>Authorization isn’t visible to or changeable by the user.</td>
                    </tr>

                </tbody>
            </Table>
            <div className='mt-4'>
                <h2>2. What other services does firebase provide other than Authentication:</h2>
                <p>Firebase is one of the most popular authentication system for web & apps development. Firebase authentication system is very easy and usefull fro every developer. Fisebase also some authentication system  this list below:</p>
                <ul>
                    <li>
                        Back4App
                    </li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>NativeScript</li>
                    <li>RxDB</li>
                    <li>Flutte</li>
                    <li>Flutte</li>
                </ul>
            </div>
        </div>
    );
};

export default Blogs;