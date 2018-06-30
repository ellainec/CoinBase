import React, { Component } from 'react';
import { Form, Button, Input, Card } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Layout from '../components/Layout';

class TestTestBaby extends Component {
    state = {
        balance: '',
        address: ''
    };

    onSubmit = async (event) => {
        event.preventDefault();
        try {
            const accountBalance = await web3.eth.getBalance(this.state.address);
            this.setState({ balance: accountBalance });
        }
        catch (err) {
            this.setState({ balance: err });
        }


    }
    render() {
        return (
            <Layout>
                <Form onSubmit={this.onSubmit}>
                    <Form.Field>
                        <label>Address</label>
                        <Input
                            onChange={event => this.setState({ address: event.target.value })}
                            />
                        <Button primary> Get Address </Button>
                    </Form.Field>
                </Form>
                <p>{ this.state.balance }</p>
            </Layout>
        );
    }
}

export default TestTestBaby;