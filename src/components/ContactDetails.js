import React from 'react';
import PanelContainer from '../containers/PanelContainer';

class ContactDetails extends React.Component {
  render () {
    if (!this.props.params.id) {
      return (
        <PanelContainer colSize="col-sm-8">
        </PanelContainer>
      )
    }

    let contact = this.props.contacts.filter((contact) => {
      return contact.id == this.props.params.id;
    })[0];
    let name = contact.name.first + ' ' + contact.name.last;
    return (
      <PanelContainer colSize="col-sm-8">
        <h1>{name}</h1>
        <p>
          <span className="glyphicon glyphicon-earphone" />{contact.phone}<br/>
          <span className="glyphicon glyphicon-envelope" /><a href={'mailto:' + contact.email}>{contact.email}</a>
        </p>
        <address>
          <span><strong>{contact.company}</strong><br/></span>
          {
            contact.address.split(',').map((line, index) => {
              return (
                <span key={index}>{line}<br/></span>
              )
            })
          }
        </address>
      </PanelContainer>
    )
  }
}

export default ContactDetails;
