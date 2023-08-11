import "./Divider.scss";
import box from "../../assets/divider/box.svg";

const Divider = ({ text, style }) => {
  return (
    <div className="divider" style={style}>
      <div className="divider__sides" />
      {text ? (
        <div className="divider__text">
          <p className="small">{text}</p>
        </div>
      ) : (
        <div className="divider__box">
          <img src={box} alt="box icon" />
        </div>
      )}
      <div className="divider__sides" />
    </div>
  );
};
export default Divider;
