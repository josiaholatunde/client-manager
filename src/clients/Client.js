import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Clients.scss';
import Spinner from './Spinner';
import { getClients } from '../actions/clientActions';

class Client extends Component{
    state = {
        totalOwed: null
    }
    componentDidMount() {
        this.props.getClients();
    }
    static getDerivedStateFromProps(props, state) {
        const {clients} = props;

        if (clients) {
            const total = clients.reduce((total, client) => total + parseFloat(client.balance), 0);
            return {
                totalOwed: total
            }
        }
        return null;
    }
    render() {
        const { clients } = this.props;
        const { totalOwed } = this.state;

        if (clients) {
            return (
                <div className="flex">
                    <div>
                        <div>
                            <i className="fa fa-user"></i>
                            <h1>Client</h1>
                        </div>
                        <div>
                          <h4>Total Owed: {' '}
                            <span className="text-primary">${totalOwed.toFixed(2)}</span>
                          </h4>
                        </div>
                    </div>
                    <div className="row">
                        <table  cellSpacing="0">
                           <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Balance</th>
                                <th />
                            </tr>
                           </thead>
                            <tbody>
                                {clients.map(({_id, firstName, lastName, email, balance}) => {
                                    return (
                                        <tr key={_id}>
                                            <td> {`${firstName} ${lastName}`} </td>
                                            <td> {email} </td>
                                            <td> ${balance.toFixed(2)} </td>
                                            <td> 
                                                <Link className="btn" to={`client/${_id}`}>
                                                    <i className="fas fa-arrow-circle-right"></i>
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            )

        } else {
            return <Spinner />
        }
    }
}

const mapStateToProps = (state) => ({clients: state.client.clients})

export default connect(mapStateToProps, { getClients })(Client);