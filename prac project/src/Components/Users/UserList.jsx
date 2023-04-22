import UserCard from "./UserCard";
import Card from "../Ui/Card";
import classes from "./UserList.module.css";

const UserList = ({ listOfUsers }) => {
  console.log(listOfUsers);

  return (
    <Card className={classes.users}>
      <ul>
        {listOfUsers.map((user) => (
          <UserCard
            userName={user.userName}
            age={user.age}
            key={Math.random().toString()}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
