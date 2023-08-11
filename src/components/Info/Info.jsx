import "./Info.scss";
import scooter from "../../assets/info/scooter.svg";
import route from "../../assets/info/Route.svg";
import bag from "../../assets/info/bag.svg";
import support from "../../assets/info/Support.svg";

const Info = () => {
  return (
    <div className="info">
      <h1>Express delivery market revolution</h1>
      <h4>
        Express courier service in the city. We are a reliable logistics partner
        for delivery services for online stores and restaurants!
      </h4>
      <section className="info__section">
        <div className="info__section__item">
          <h5>Become a courier</h5>
          <div style={{ display: "flex", gap: 8 }}>
            <div className="info__section__item__icon">
              <img src={scooter} alt="scooter" />
            </div>
            <img src={route} alt="route" />
          </div>
          <p>
            You choose a schedule. You decide how much and when to earn.
            Earnings from day one
          </p>
        </div>
        <div className="info__section__item">
          <h5>Help & Support</h5>
          <div className="info__section__item__icon">
            <img src={support} alt="support" />
          </div>
          <p>Door-to-door delivery in 90 minutes or at your convenience</p>
        </div>
        <div className="info__section__item">
          <h5>Affiliate Program</h5>
          <div className="info__section__item__icon">
            <img src={bag} alt="bag" />
          </div>
          <p>
            Use our service and feel new quality of this traditional service!
          </p>
        </div>
      </section>
    </div>
  );
};
export default Info;
