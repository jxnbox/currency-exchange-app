import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import CurrencyExchangePage from "./currencyExchangePage";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
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
            <div>
                <h2>Login page</h2>
                <div>
                    <Form onSubmit={handleFormSubmit}>
                        <Form.Label htmlFor="email">email: </Form.Label>
                        <Form.Control type="text" name="email" onChange={handleOnChangeEmail}/>
                        <Form.Label htmlFor="password">password: </Form.Label>
                        <Form.Control type="password" name="password" onChange={handleOnChangePassword}/>
                        <Button variant="primary" type="submit">continue</Button>
                    </Form>
                </div>
            </div>
        );
    } else {
        return <CurrencyExchangePage />
    }
}

export default LoginPage;