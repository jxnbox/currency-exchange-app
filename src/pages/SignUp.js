import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Stack } from "react-bootstrap";

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
        <div className="form-container">
            <Card border="primary" style={{width: '30rem'}}>
                <Card.Header>Sign-up page</Card.Header>
                <Container>
                    <Form onSubmit={handleFormSubmit}>
                        <Card.Body>
                            <Stack gap={4}>
                                <Row>
                                    <Col>
                                        <FloatingLabel htmlFor="f-name" label="First name">
                                            <Form.Control size="sm" type="text" name="f-name" placeholder="First name"/>
                                        </FloatingLabel>
                                    </Col>
                                    <Col>
                                        <FloatingLabel htmlFor="s-name" label="Surname">
                                            <Form.Control type="text" name="s-name" placeholder="Surname"/>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <FloatingLabel htmlFor="email" label="Email"> 
                                    <Form.Control  type="text" name="email" placeholder="Email"/>
                                </FloatingLabel>
                                <FloatingLabel htmlFor="password" label="Password"> 
                                    <Form.Control  type="password" name="password" placeholder="Password"/>
                                </FloatingLabel>
                                <FloatingLabel htmlFor="password" label="Confirm Password"> 
                                    <Form.Control  type="password" name="password" placeholder="Confirm Password"/>
                                </FloatingLabel>
                            </Stack>
                            <Button type="submit" className="login-submit-btn">continue</Button>        
                        </Card.Body>
                    </Form>
                </Container>
            </Card>
        </div>
    );
};

export default SignUpPage;