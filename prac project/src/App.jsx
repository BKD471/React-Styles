import React from "react";
import Adduser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";
import { users } from "./Components/utils/UserConfig";
import { useState } from "react";

const App = () => {
  const list = JSON.parse(JSON.stringify(users));
  const [userList, setUserList] = useState(list);

  const handleAddUsers = (user) => {
    setUserList((prevState) => {
      return [user, ...prevState];
    });
  };
  return (
    <div>
      <Adduser onAddingUsers={handleAddUsers} />
      <UserList listOfUsers={userList} />
    </div>
  );
};

export default App;
