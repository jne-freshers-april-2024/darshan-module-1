import { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
  constructor(){
    super();
  }
  render() {

    return (
      <li className={classes.user}>
        name = {this.props.name}
        <br />
        address = {this.props.address}
      </li>
    );
  }
}

export default User;
