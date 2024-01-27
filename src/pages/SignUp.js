import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUpPage = ({auth}) => {

    const [newUserEmail, setNewUserEmail] = useState('');
    const [newUserPassword, setNewUserPassword] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const enteredNewUserEmail = e.target[2].value;
        const enteredNewUserPassword = e.target[3].value;
        setNewUserEmail(enteredNewUserEmail)
        setNewUserPassword(enteredNewUserPassword)
    };

    useEffect(() => {

        const createUser = async () => {
            try {
                const result = await createUserWithEmailAndPassword(auth, newUserEmail, newUserPassword);
                console.log(result);
            } catch (error) {
                throw new Error(`Error : ${error}`)
            }
        };

        if (newUserEmail && newUserPassword) {
            createUser();
        }

    }, [newUserEmail,newUserPassword, auth]);

    return (
        <Container>
            <h2>Sign-up page</h2>
            <Container>
                <Form onSubmit={handleFormSubmit}>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="f-name">First name: </Form.Label>
                            <Form.Control type="text" name="f-name"/>
                        </Col>
                        <Col>
                            <Form.Label htmlFor="s-name">surname: </Form.Label>
                            <Form.Control  type="text" name="s-name"/>
                        </Col>
                    </Row>
                    <br />
                    <Form.Label htmlFor="email">email: </Form.Label>
                    <Form.Control  type="text" name="email"/>
                    <br />
                    <Form.Label htmlFor="password">password: </Form.Label>
                    <Form.Control  type="password" name="password"/>
                    <br />
                    <p>confirm password: </p>
                    <Form.Control  type="password" name="password"/>
                    <br />
                    <Button>continue</Button>
                </Form>
            </Container>
        </Container>
    );
};

export default SignUpPage;