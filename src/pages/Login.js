import { Component } from "react";
import {initializeApp} from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../firebase/firebase';

const fbApp = initializeApp(firebaseConfig);
const auth = getAuth();

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
        }
    };

    handleFormSubmit= (e) => {
        e.preventDefault();
        this.setState({
            email : e.target[0].value,
            password : e.target[1].value
        }, () => {
            signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("incorrect")
            });
        });
        e.target[0].value = "";
        e.target[1].value = "";
    };


    render() {
        return (
            <div>
                <h2>Login page</h2>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
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
        )
    }
}

export default LoginPage;