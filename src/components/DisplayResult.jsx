import { Component } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class DisplayResult extends Component {

    render() {
        return (
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Result:</InputGroup.Text>
                <Form.Control 
                type="text"
                placeholder={`${this.props.result}`}
                aria-label="Disabled input example"
                readOnly/>
            </InputGroup>
        )
    }
}

export default DisplayResult