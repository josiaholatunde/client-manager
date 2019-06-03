import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AddClient.scss';
import PropTypes from 'prop-types';
import { addClient } from '../actions/clientActions';

class AddClient extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        balance: '',
        errors: {}
    }
    handleChange = e => this.setState({[e.target.name]: e.target.value});

    handleSubmit = e => {
        e.preventDefault();
        let balance = '';
        if (!this.state.balance) {
            balance = 0;
        }
        this.props.addClient({ balance, ...this.state});
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            balance: 0,
            errors: {}
        })
        this.props.history.push('/');
    }

    render() {
        const { firstName, lastName, email, balance, phone} = this.state;
        return (
            <div>
                <div className="row">
                    <Link to="/">
                        <i className="fa fa-arrow-circle-left"></i>
                        Back to Dashboard
                    </Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-header">Add Client</div>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" id="firstName" onChange={this.handleChange} required minLength="2"
                         className="form-input" value={firstName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" id="lastName" onChange={this.handleChange} required minLength="2"  className="form-input"
                         value={lastName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={this.handleChange} className="form-input"
                         value={email}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" onChange={this.handleChange} className="form-input"
                         value={phone}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="balance">Balance</label>
                        <input type="text" name="balance" id="balance" onChange={this.handleChange} className="form-input"
                         value={balance}  />
                    </div>
                    <input type="submit" className="btn-primary"  value="Submit" />
                </form>
            </div>
        );
    }
}

AddClient.propTypes = {
    addClient: PropTypes.func.isRequired
};

export default connect(null, { addClient })(AddClient);
