import { Component } from "react";

class LoginPage extends Component {

    handleFormSubmit(e) {
        e.preventDefault();
    }


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