import { Component } from "react";

class SignUpPage extends Component {

    handleFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h2>Sign-up page</h2>
                <div>
                    <form onSubmit={this.handleFormSubmit}>
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
};

export default SignUpPage;