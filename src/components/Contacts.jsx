import React from "react";
import { Container, Row } from "react-bootstrap";
import Contact from "./Contact";

  const Contacts = (props)=> {
  return (
    <Container>
      <Row>
        {props.contactData.map((contact) => {
          return (
            <Contact
              contactInfo={contact}
              key={contact.id}
              removeContact={props.removeContact}
              editContact={props.editContact}
            />
          );
        })} 
      </Row>
    </Container>
  );
}
export default Contacts