import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";
import { addContact, removeContact, editContact } from "./reducers/contactActions"

function App() {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  const addNewCOntact = (contact) => {
      dispatch(addContact(contact))
  };
  const removeCOntact = (id) => {
    dispatch(removeContact(id))
  };
  const editCOntact = (id, updatedContact) => {
    dispatch(editContact(id, updatedContact))
  };
  return (
    <>
      <Container fluid style={{ marginTop: "2rem" }}>
        <Row>
          <Col md="4" className="mb-4">
            <AddContact addContact={addNewCOntact} />
          </Col>
          <Col md="7">
            <Contacts
              contactData={contacts}
              removeContact={removeCOntact}
              editContact={editCOntact}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
