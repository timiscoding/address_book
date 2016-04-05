import React from 'react';
import Contact from './Contact';
import PanelContainer from '../containers/PanelContainer';

class ContactsList extends React.Component {
  render() {
    return (
      <PanelContainer colSize="col-sm-4">
        <div className="panel-body">
        <h1>Contacts List</h1>
        <ul className="list-group">
          {
            this.props.contacts.map((contact) => {
              return <Contact contact={contact} key={contact.id} />;
            })
          }
        </ul>
        </div>
      </PanelContainer>
    )
  }
}

export default ContactsList;
