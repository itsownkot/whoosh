import "./About.scss";
import calc from "../../assets/about/calc.svg";
import paperwork from "../../assets/about/paperwork.svg";
import payment from "../../assets/about/payment.svg";
import rightImage from "../../assets/about/rightImage.svg";
import isMobileHook from "../../isMobileHook";

const About = () => {
  const isMobile = isMobileHook();

  return (
    <div className="about">
      <h1>What we do</h1>
      <h4>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </h4>
      <section className="about__features">
        <div className="about__features__item">
          <div className="about__features__item__icon">
            <img src={calc} alt="calc" />
          </div>
          <h3>
            Online <span>calculation</span>
          </h3>
          <p>
            Instant calculation of the cost in the order form, the price is
            updated in the process of filling out the form
          </p>
        </div>
        <div className="about__features__item">
          <div className="about__features__item__icon">
            <img src={paperwork} alt="paperwork" />
          </div>
          <h3>Minimum paperwork</h3>
          <p>
            You can place an order for courier or freight delivery without
            registration and contract.
          </p>
        </div>
        <div className="about__features__item">
          <div className="about__features__item__icon">
            <img src={payment} alt="payment" />
          </div>
          <h3>Convenient payment</h3>
          <p>
            You can pay for delivery by card or in cash at any of the order
            addresses. For legal entities non-cash is available.
          </p>
        </div>
      </section>
      <button>
        <p className="menu">Get started!</p>
      </button>
      {!isMobile && (
        <img className="about__cityImage" src={rightImage} alt="city image" />
      )}
    </div>
  );
};
export default About;
