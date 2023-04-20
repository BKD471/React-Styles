import Card from "../Ui/Card";
import clasess from "./AddUser.module.css";

const Adduser = (props) => {
  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={clasess.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default Adduser;
