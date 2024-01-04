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
                        <label htmlFor="username">username: </label>
                        <input type="text" name="username" id="username" />
                        <br />
                        <label htmlFor="password">password: </label>
                        <input type="password" name="password" id="password" />
                        <br />
                        <button>continue</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginPage;