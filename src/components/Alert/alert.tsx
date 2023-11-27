import image from "./../../assets/darth.jpeg";
import "./alert.scss";

const Alert = (props: { message: string }) => {
  return (
    <div className="alert-container">
      <img src={image} height={100}></img>
      {props.message}
    </div>
  );
};

export default Alert;
