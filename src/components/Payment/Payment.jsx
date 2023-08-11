import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Payment.scss";
import gpay from "../../assets/payment/paywithgoogle.svg";
import sofort from "../../assets/payment/sofort.svg";
import union from "../../assets/payment/union pay.svg";
import mastercard from "../../assets/payment/mastercard.svg";
import visa from "../../assets/payment/visa.svg";
import amex from "../../assets/payment/amex.svg";
import nextArrow from "../../assets/payment/Right.svg";
import prevArrow from "../../assets/payment/Left.svg";
import isMobileHook from "../../isMobileHook";

const logos = [gpay, sofort, union, mastercard, visa, amex];

function NextArrow({ onClick, className }) {
  return (
    <div
      // className={className}
      style={{
        width: 20,
        height: 20,
        position: "absolute",
        right: "-5%",
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
      }}
      onClick={onClick}
    >
      <img src={nextArrow} alt="next arrow" />
    </div>
  );
}
function PrevArrow({ onClick, className }) {
  return (
    <div
      // className={className}
      style={{
        width: 20,
        height: 20,
        position: "absolute",
        left: "-5%",
        top: 0,
        bottom: 0,
        marginTop: "auto",
        marginBottom: "auto",
      }}
      onClick={onClick}
    >
      <img src={prevArrow} alt="prev arrow" />
    </div>
  );
}

const Payment = () => {
  const isMobile = isMobileHook();

  return (
    <div className="payment">
      <h1>Payment methods</h1>
      <section className="payment__logos">
        <Slider
          className="center"
          centerPadding="50px"
          // initialSlide={2}
          arrows={!isMobile}
          centerMode
          slidesToShow={isMobile ? 2 : 5}
          infinite
          slidesToScroll={1}
          style={
            isMobile
              ? { width: "100%" }
              : {
                  width: 1024,
                }
          }
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
        >
          {logos.map((item, i) => (
            <div className="payment__logos__item" key={i}>
              <img src={item} alt="logo" />
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};
export default Payment;
