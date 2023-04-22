import Card from "../Ui/Card";
import Button from "../Ui/Button";
import clasess from "./AddUser.module.css";
import { useState, useRef } from "react";
import ErrorModal from "./ErrorModal";

const Adduser = ({ onAddingUsers }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEneteredAge] = useState("");
  const [error, setError] = useState(null);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Empty Input",
        message: "Please enter a valid name & age",
      });
      return;
    }

    if (+enteredUserAge <= 0) {
      setError({
        title: "Invalid Age",
        message: "Your age must be >0",
      });
      return;
    }

    const userData = {
      userName: enteredName,
      age: enteredUserAge,
    };

    onAddingUsers(userData);

    //reseting on submit
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUserName("");
    // setEneteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEneteredAge(event.target.value);
  // };

  const errorResolverHandler = () => {
    setError(null);
  };

  return (
    <>
      {error !== null && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onOkay={errorResolverHandler}
        />
      )}
      <Card className={clasess.input}>
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            //value={nameInputRef.current.value}
            //onChange={usernameChangeHandler}
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            //value={ageInputRef.current.value}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default Adduser;
