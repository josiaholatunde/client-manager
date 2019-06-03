import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './AppNavBar.scss';

class AppNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav>
                <div className="container">
                    <h2>
                        <Link to="/" className="brand">
                            ClientPanel
                        </Link>
                    </h2>
                    <ul>
                        <li>
                            <Link to="/" className="brand">
                                Dashboard
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

AppNavBar.propTypes = {};

export default AppNavBar;
