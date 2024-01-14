import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fbApp from '../firebase/firebase';
import CurrencyExchangePage from "./currencyExchangePage";

const auth = getAuth(fbApp);

const LoginPage = ({updateUserState}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoginLoggedIn] = useState(false);

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
        if (email && password) {
            getUser();
        };

    }, [email, password, updateUserState]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = e.target[0].value;
        const enteredPassword = e.target[1].value;
        setEmail(enteredEmail);
        setPassword(enteredPassword);
        e.target[0].value = "";
        e.target[1].value = "";
        if (isLoggedIn) {
            window.location.assign("/")
        }
    };

    if (!isLoggedIn) {
        return (
            <div>
                <h2>Login page</h2>
                <div>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="email">email: </label>
                        <input type="text" name="email"/>
                        <br />
                        <label htmlFor="password">password: </label>
                        <input type="password" name="password"/>
                        <br />
                        <button>continue</button>
                    </form>
                </div>
            </div>
        );
    } else {
        return <CurrencyExchangePage />
    }
}

export default LoginPage;