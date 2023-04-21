const initialState = {
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
  ],
}

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case "ADD_CONTACT":
    const newContact = {
      name:  payload.name,
      cnumber: payload.cnumber,
      location: payload.location,
      id: Math.random().toString(),
    }   
    return { ...state, contacts:[...state.contacts, newContact ] }
    case "REMOVE_CONTACT":
      const undeletedcontacts = state.contacts.filter( contact => contact.id !== payload);
      return{contacts: undeletedcontacts,}
    case "EDIT_CONTACT":
      return  {contacts: state.contacts.map((contact) => (contact.id === payload.contact_id ? payload.new_contact : contact)), } 
    default:  
      return state;
  }
}
