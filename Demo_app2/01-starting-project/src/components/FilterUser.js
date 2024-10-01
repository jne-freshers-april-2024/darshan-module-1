import React, { Component } from "react";
import './filteruser.css';
import Users from "./Users";

export const DUMMY_USERS = [
    { id: 'u1', name: 'A', address: 'Pune' },
    { id: 'u2', name: 'B', address: 'Dhule' },
    { id: 'u3', name: 'C', address: 'Nashik' },
    { id: 'u4', name: 'D', address: 'Mumbai' },
];

class FilterUser extends Component {
    constructor() {
        super();
        this.state = {
            filterUser: DUMMY_USERS,
            serachItem: ''
        };

        // Bind the event handler to this component
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        // Update the searchItem state
        this.setState({ serachItem: event.target.value });
    }

    componentDidUpdate(prevProps, prevState) {
        // Update filterUser only when serachItem changes to avoid infinite loop
        if (prevState.serachItem !== this.state.serachItem) {
            this.setState({
                filterUser: DUMMY_USERS.filter((user) =>
                    user.name.toLowerCase().includes(this.state.serachItem.toLowerCase())
                )
            });
        }
    }

    render() {
        return (
            <div className="search">
                <input
                    type="search"
                    value={this.state.serachItem}
                    onChange={this.onChangeHandler}
                    placeholder="Search users..."
                />
                <Users users={this.state.filterUser} />
            </div>
        );
    }
}

export default FilterUser;
