import { useEffect, useState } from "react";
import { getSymbols } from "../api/fetchData";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from "react-bootstrap/Stack";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const CurrencyExchangeForm = ({onSubmit}) => {

    const [currencyNames, setCurrencyNames] = useState([]);
    const [currencyAbbr, setCurrencyAbbr] = useState([]);

    useEffect(() => {
        if(!currencyNames.length) {
            getSymbols()
            .then(res => JSON.parse(res))
            .then(parsedRes => {
                setCurrencyAbbr(() => Object.keys(parsedRes.symbols))
                setCurrencyNames(() => Object.values(parsedRes.symbols))
            })
            .catch(error => {
                console.error('Error fetching symbols:', error);
            });
          };
    }, [currencyNames]);

    if(!currencyNames.length) {
        return <h2>LOADING</h2>
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
            <Stack gap={3}>
                <Row>
                    <Col xs lg="5">
                        <Form.Label htmlFor="select-base-currency">Base: </Form.Label>
                        <Form.Select  name="base-currency" id ="select-base-currency">
                            {currencyNames.map((currName, i) => {
                                return (
                                    <option value={currencyAbbr[i]} key={`${currName}-${i}`}>{currName}</option>
                                )
                            })}
                        </Form.Select>
                    </Col>
                    <Col>
                        <p>TO</p>
                    </Col>
                    <Col xs lg="5">
                        <Form.Label htmlFor="select-convert-currency">Convert: </Form.Label>
                        <Form.Select  name="convert-currency" id ="select-convert-currency">
                            {currencyNames.map((convertCurrName, i) => {
                                return (
                                    <option value={currencyAbbr[i]} key={`${convertCurrName}-${i}`}>{convertCurrName}</option>
                                )
                            })}
                        </Form.Select>
                    </Col>
                </Row>
                <FloatingLabel htmlFor="amount" label="Amount">
                    <Form.Control type="number" name="amount" placeholder="Amount"/>
                </FloatingLabel>
                <Button type="submit">convert</Button>
            </Stack>
            </Form>
        </div>
    )
}


export default CurrencyExchangeForm;