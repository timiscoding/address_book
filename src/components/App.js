import React from 'react';
import ContactsList from './ContactsList';

let contacts_data = [
  {
    "id": 0,
    "name": {
      "first": "Barbra",
      "last": "Barrera"
    },
    "company": "ZENTIX",
    "email": "barbrabarrera@zentix.com",
    "phone": "+64 (92) 4439-2958",
    "address": "575 Glenmore Avenue, Russellville, TAS 7339"
  },
  {
    "id": 1,
    "name": {
      "first": "Leonard",
      "last": "Neal"
    },
    "company": "JUMPSTACK",
    "email": "leonardneal@jumpstack.com",
    "phone": "+64 (92) 6443-3232",
    "address": "326 Ditmas Avenue, Fivepointville, WA 4125"
  },
  {
    "id": 2,
    "name": {
      "first": "Fanny",
      "last": "Estes"
    },
    "company": "ZOINAGE",
    "email": "fannyestes@zoinage.com",
    "phone": "+64 (95) 7560-2538",
    "address": "692 Hinsdale Street, Kiskimere, VIC 3154"
  },
  {
    "id": 3,
    "name": {
      "first": "Gladys",
      "last": "Cook"
    },
    "company": "COSMOSIS",
    "email": "gladyscook@cosmosis.com",
    "phone": "+64 (83) 3473-2866",
    "address": "348 Lawton Street, Fingerville, QLD 6054"
  },
  {
    "id": 4,
    "name": {
      "first": "Maricela",
      "last": "Giles"
    },
    "company": "MUSIX",
    "email": "maricelagiles@musix.com",
    "phone": "+64 (95) 1412-2046",
    "address": "509 Hull Street, Hachita, ACT 7075"
  },
  {
    "id": 5,
    "name": {
      "first": "Hendrix",
      "last": "Randall"
    },
    "company": "CYTREK",
    "email": "hendrixrandall@cytrek.com",
    "phone": "+64 (80) 5593-2229",
    "address": "237 Benson Avenue, Harmon, NSW 7161"
  },
  {
    "id": 6,
    "name": {
      "first": "Clay",
      "last": "Russell"
    },
    "company": "ZENSOR",
    "email": "clayrussell@zensor.com",
    "phone": "+64 (84) 5475-2803",
    "address": "478 Lewis Place, Madaket, NT 2276"
  }
];

class App extends React.Component {
  render () {
    const childrenWithProps = React.Children.map(this.props.children,
      (child) => React.cloneElement(child, { contacts: contacts_data  }));
    return (
      <div className="row row-centered">
        <div className="wrapper col-sm-10 col-centered">
          <ContactsList contacts={contacts_data} />
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default App;
