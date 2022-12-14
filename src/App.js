import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [UserList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((previousList) => {
      return [
        ...previousList,
        { name: uName, age: uAge, id: Math.random.toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={UserList}></UsersList>
    </div>
  );
}

export default App;
