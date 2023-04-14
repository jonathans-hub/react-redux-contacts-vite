import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";


function App() {
  const [state, setState] = useState({
    contacts: [
      {
        name: "Grace Alison",
        cnumber: "8024896621",
        location: "Cincinnati, Ohio",
        id: "dxfgbfgvnsdjkfnskf",
      },
      {
        name: "Morris Sawyer",
        cnumber: "9600248023",
        location: "Atlanta, Georgia",
        id: "3453sdfsjkvnsdjkfnskf",
      },
      {
        name: "Ruis Calvier",
        cnumber: "2324891257",
        location: "Conway, Arkansas",
        id: "cbbvdfjkvnwvnsdjku8nskf",
      },
    ],}
  )
 const addNewCOntact = (contact) => {
    contact.id = Math.random().toString();
    setState({
      contacts: [...state.contacts, contact],
    });
  };
 const removeContact = (id) => {
    let undeletedcontacts = state.contacts.filter((contact) => contact.id !== id);
    setState({
      contacts: undeletedcontacts
    });
  };
 const editContact=(id, updatedContact)=>{
    setState({
      contacts: state.contacts.map(contact=>contact.id === id ? updatedContact: contact)
    })
  }
  return (
    <>
    <Container fluid style={{ marginTop: "2rem" }}>
      <Row>
        <Col md="4" className= "mb-4">
          <AddContact addContact={addNewCOntact} />
        </Col>
        <Col md='7'>
          <Contacts contactData={state.contacts} removeContact={removeContact} editContact={editContact}/>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default App
