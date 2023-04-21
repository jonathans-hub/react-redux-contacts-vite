
export const addContact = (contact) =>{
 return{
  type: "ADD_CONTACT",
  payload: contact
 }
}
export const removeContact = (contact_id) => {
  return {
    type: "REMOVE_CONTACT",
    payload: contact_id, 
  };
};

export const editContact =(contact_id, new_contact)=>{
  return{
    type: "EDIT_CONTACT",
    payload: {contact_id, new_contact},
    }
}