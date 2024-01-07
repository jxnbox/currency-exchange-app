import { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fbApp from '../firebase/firebase'

const auth = getAuth(fbApp);

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
              const result = await signInWithEmailAndPassword(auth, email, password);
              console.log(result);
            } catch (error) {
              console.error('Error signing in:', error.message);
            }
        }
        if (email && password) {
            getUser();
        };
    }, [email, password]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const enteredEmail = e.target[0].value;
        const enteredPassword = e.target[1].value;
        setEmail(enteredEmail);
        setPassword(enteredPassword);
        e.target[0].value = "";
        e.target[1].value = "";
    };

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
}

export default LoginPage;