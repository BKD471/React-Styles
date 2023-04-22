import Button from "../Ui/Button";
import Card from "../Ui/Card";
import classes from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const BackDrop = ({ onOkay }) => {
  return <div className={classes.backdrop} onClick={onOkay} />;
};

const OverLay = ({ title, message, onOkay }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={onOkay}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = ({ title, message, onOkay }) => {
  console.log(document.getElementById("backdrop-root"));
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onOkay={onOkay} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <OverLay title={title} message={message} onOkay={onOkay} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
