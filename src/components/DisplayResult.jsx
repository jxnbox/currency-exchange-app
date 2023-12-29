import { Component } from "react";

class DisplayResult extends Component {

    render() {
        return <p>Result: {this.props.result}</p>
    }
}

export default DisplayResult