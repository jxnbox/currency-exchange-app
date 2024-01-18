import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

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
        <div>
            <h2>Sign-up page</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="f-name">First name: </label>
                    <input type="text" name="f-name"/>
                    <label htmlFor="s-name">surname: </label>
                    <input type="text" name="s-name"/>
                    <br />
                    <label htmlFor="email">email: </label>
                    <input type="text" name="email"/>
                    <br />
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password"/>
                    <br />
                    <p>confirm password: </p>
                    <input type="password" name="password"/>
                    <br />
                    <button>continue</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;