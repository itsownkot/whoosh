import "./Partners.scss";
import bag from "../../assets/partners/bag.svg";
import partner1 from "../../assets/partners/partner1.svg";
import partner1hover from "../../assets/partners/partner1hover.svg";
import partner2 from "../../assets/partners/partner2.svg";
import partner2hover from "../../assets/partners/partner2hover.svg";
import partner3 from "../../assets/partners/partner3.svg";
import partner3hover from "../../assets/partners/partner3hover.svg";
import partner4 from "../../assets/partners/partner4.svg";
import partner4hover from "../../assets/partners/partner4hover.svg";
import partner5 from "../../assets/partners/partner5.svg";
import partner5hover from "../../assets/partners/partner5hover.svg";
import { useState } from "react";
import isMobileHook from "../../isMobileHook";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const partners = [
  {
    default: partner1,
    hover: partner1hover,
  },
  {
    default: partner2,
    hover: partner2hover,
  },
  {
    default: partner3,
    hover: partner3hover,
  },
  {
    default: partner4,
    hover: partner4hover,
  },
  {
    default: partner5,
    hover: partner5hover,
  },
];

const Partner = ({ partner }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <img
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
      src={isHover ? partner.hover : partner.default}
      className="partners__list__item"
      alt="partner"
    />
  );
};

const Partners = () => {
  const isMobile = isMobileHook();

  return (
    <div className="partners">
      <section className="partners__title">
        {!isMobile && <div />}
        <h1>Our Partners</h1>
        {!isMobile && (
          <button>
            <img src={bag} alt="bag" />
            <p>Let's collaborate</p>
          </button>
        )}
      </section>
      {!isMobile && (
        <section className="partners__list">
          {partners.map((item, i) => (
            <Partner partner={item} key={i} />
          ))}
        </section>
      )}
      {isMobile && (
        <section className="partners__list">
          <Slider
            arrows={false}
            className="center"
            centerPadding="0px"
            initialSlide={2}
            centerMode
            slidesToShow={3}
            infinite
            slidesToScroll={1}
            style={{
              width: "100%",
            }}
          >
            {partners.map((item, i) => (
              <Partner partner={item} key={i} />
            ))}
          </Slider>
        </section>
      )}
      {isMobile && (
        <div style={{ width: "100%", padding: "0 16px" }}>
          <button>
            <img src={bag} alt="bag" />
            <p>Let's collaborate</p>
          </button>
        </div>
      )}
    </div>
  );
};
export default Partners;
