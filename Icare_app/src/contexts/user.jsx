import { useState, createContext } from "react";
import axios from 'axios'

const UserContext = createContext();

function Provider({children}) {

    const [users, setUsers] = useState([]);
    
    const getUsers = async () => {
        const response = await axios.get("http://localhost:3001/users");
        const userArray = response.data;
        setUsers(userArray);
      };


      const valuesToShare = {
        users,
        getUsers
      }

    return (
        <UserContext.Provider value={valuesToShare}>
            {children}
        </UserContext.Provider>
    );
  }


export { Provider };
export default UserContext;