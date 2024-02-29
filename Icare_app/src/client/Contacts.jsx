import {
  useFetchContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} from "../store/newIndex";

function Contacts() {
  const user = {
    name: "Adam",
    id: 1,
  };


  const user2 = {
    id: 1,
    contact: "Jack the Rabbit",
    email: "email@email",
  };

  const user3 = {
    id: 6,
    contact: "Jack the Rabbit",
    email: "email@email",
  };

  const { data, error, isLoading } = useFetchContactsQuery(user);
  const [addContact, results] = useAddContactMutation();
  const [removeContact, result] = useRemoveContactMutation();

  const handleAddContact = () => {
    console.log(user2)
    addContact(user2)
  }

  const handleRemoveContact = () => {
    console.log(user3)
    console.log(result)
    removeContact(user3)
  }

  console.log(data, error, isLoading);

  let content;

  if (isLoading) {
    content = <div>Loading dataaaaaa</div>;
  } else if (error) {
    <div>An error has occured</div>;
  } else {
    content = data.map((contact) => {
      return <div key={contact.id}>{contact.contact}</div>;
    });
  }

  return <div>
    <button onClick={handleAddContact}> Add Contact
        </button>
        <button onClick={handleRemoveContact}>Remove</button>{content}</div>;
}

export default Contacts;
