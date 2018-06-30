import React, { Component } from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

class RequestNew extends Component {
    static async getInitialProps(props) {
        const { address } = props.query;

        return { address };
    }
    state = {
        description: '',
        amount: '',
        recipient: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { description, amount, recipient } = this.state;

        try {
            this.setState({ loading: true, errorMessage: '' });
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(description, web3.utils.toWei(amount, 'ether'), recipient).send({
                from: accounts[0]
            });
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        }
        this.setState({ loading: false })
    };

    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h3> Create a Request</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Input label = 'Description'
                                value = {this.state.description}
                                onChange={event => this.setState({ description: event.target.value })}
                    />
                    <Form.Input label = 'Amount in Ether'
                                value = {this.state.amount}
                                onChange={event => this.setState({ amount: event.target.value })}
                    />
                    <Form.Input label = 'Recipient'
                                value = {this.state.recipient}
                                onChange={event => this.setState({ recipient: event.target.value })}
                    />
                    <Button primary content ='Create' loading={this.state.loading} />
                    <Message error header='Oops!' content={this.state.errorMessage} />
                </Form>
            </Layout>
        );
    }
}

export default RequestNew;