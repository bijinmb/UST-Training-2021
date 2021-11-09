import React, { Component } from 'react';

class Form extends Component {
    initialState = {
        name: '',
        city: '',
        phone: '',
        email: ''
    }

    state = this.initialState
    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    render() {
        const { name, city, phone, email } = this.state;

        return (
            <form className="cust-form">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    value={city}
                    onChange={this.handleChange} />
                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange} /><br/>
                <input type="button" value="Submit" id="cust-btn" onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;