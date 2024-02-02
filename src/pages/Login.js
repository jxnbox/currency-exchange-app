import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import CurrencyExchangePage from "./currencyExchangePage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const LoginPage = ({updateUserState, auth}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoginLoggedIn] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const getUser = async () => {
            try {
              const result = await signInWithEmailAndPassword(auth, email, password);
              updateUserState(result.user.uid);
              setLoginLoggedIn(true);
            } catch (error) {
              console.error('Error signing in:', error.message);
            }
        }
        if (formSubmitted) {
            getUser();
        };

    }, [email, password, updateUserState, formSubmitted ,auth]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true)
        e.target[0].value = "";
        e.target[1].value = "";
    };

    const handleOnChangeEmail = (e) => {
        const enteredEmail = e.target.value;
        setEmail(enteredEmail);
    };

    const handleOnChangePassword = (e) => {
        const enteredPassword = e.target.value;
        setPassword(enteredPassword);
    }

    if (!isLoggedIn) {
        return (
            <div className="form-container">
                <Card border="primary" style={{width: '30rem'}}>
                    <Card.Header>Login page</Card.Header>
                    <Form onSubmit={handleFormSubmit}>
                        <Card.Body>
                            <Stack gap={4}>
                                <FloatingLabel htmlFor="email" label="Email Address">
                                    <Form.Control type="text" name="email" onChange={handleOnChangeEmail} className="email-login-inputfield" placeholder="Email Address" />
                                </FloatingLabel>
                                <FloatingLabel htmlFor="password" label="password">
                                    <Form.Control type="password" name="password" onChange={handleOnChangePassword} placeholder=""/>
                                </FloatingLabel>
                            </Stack>
                            <Button variant="primary" className="login-submit-btn" type="submit">continue</Button>
                        </Card.Body>
                    </Form>
                </Card>
            </div>
        );
    } else {
        return <CurrencyExchangePage />
    }
}

export default LoginPage;