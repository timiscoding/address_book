import React from 'react';
import { Link } from 'react-router';

class Contact extends React.Component {
  render(){
    let name = [this.props.contact.name.first, this.props.contact.name.last].join(' ');

    return (
      <li className="list-group-item">
        <Link to={'/user/' + this.props.contact.id} activeClassName="activeContact">{name}</Link>
      </li>
    )
  }
}

export default Contact;
