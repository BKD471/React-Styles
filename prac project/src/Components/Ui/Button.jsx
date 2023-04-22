import classes from "./Button.module.css";

const Button = ({ onClick, type, children }) => {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
