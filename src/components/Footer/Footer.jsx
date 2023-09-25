import { footer } from "../../constants";
import Divider from "../Divider/Divider";
import "./Footer.scss";
import pathIcon from "../../assets/footer/pathIcon.svg";
import shield from "../../assets/footer/shield.svg";
import pin from "../../assets/footer/Pin.svg";
import isMobileHook from "../../isMobileHook";

const FooterMobile = () => (
  <footer className="mobile-footer">
    <section className="mobile-footer__about">
      <p className="mobile-footer__about__title mobile-footer__section__title">
        about whoosh
      </p>
      <div className="mobile-footer__about__body">
        <img
          src={pathIcon}
          alt="path icon"
          style={{ width: 44, height: 44, position: "relative", top: "17%" }}
        />
        <p className="small" style={{ textAlign: "left" }}>
          Express delivery of documents and parcels for organizations, express
          delivery of correspondence, purchases and other goods
        </p>
      </div>
    </section>
    <section className="mobile-footer__features">
      {footer.map((el, i) => {
        if (i === 2) return;
        return (
          <div key={i} className="mobile-footer__features__section">
            <p
              className="mobile-footer__features__section__title mobile-footer__section__title"
              style={{ borderBottomColor: "#c2d2f4" }}
            >
              {el.title}
            </p>
            <div className="mobile-footer__features__section__body">
              {el.elements.map((item) => (
                <div style={{ marginBottom: 14 }} key={item}>
                  <p className="small" style={{ cursor: "pointer" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
    <section className="mobile-footer__contacts">
      <p
        className="mobile-footer__contacts__title mobile-footer__section__title"
        style={{ borderBottomColor: "#c2d2f4" }}
      >
        {footer[2].title}
      </p>
      <div
        className="mobile-footer__contacts__body"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "78%",
        }}
      >
        <div>
          <h2>{footer[2].tel}</h2>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              marginTop: 21,
            }}
          >
            <img src={pin} alt="pin" />
            <p className="small">{footer[2].addr}</p>
          </div>
        </div>
        <div className="mobile-footer__contacts__body__socials">
          {footer[2].socials.map((item) => (
            <img src={item.icon} key={item.name} alt={item.name} />
          ))}
        </div>
      </div>
    </section>
    <section className="mobile-footer__bottom">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 13,
          alignItems: "center",
          width: 176,
        }}
      >
        <img
          src={shield}
          alt="shield icon"
          style={{
            width: 10,
            height: 13,
          }}
        />
        <p className="small">Privacy policy</p>
      </div>
      <div>
        <p className="small" style={{ marginTop: 24 }}>
          © 2022. All rights reserved.
        </p>
      </div>
    </section>
  </footer>
);

const FooterDesktop = () => (
  <footer>
    <section className="footer__top">
      <div style={{ display: "flex", gap: 16 }}>
        <img
          src={pathIcon}
          alt="path icon"
          style={{ width: 44, height: 44, position: "relative", top: "17%" }}
        />

        <div className="footer__top__section">
          <p className="footer__top__section__title">about whoosh</p>
          <div className="footer__top__section__body">
            <p className="small" style={{ textAlign: "left" }}>
              Express delivery of documents and parcels for organizations,
              express delivery of correspondence, purchases and other goods
            </p>
          </div>
        </div>
      </div>
      {footer.map((el, i) =>
        el.title !== "contact us" ? (
          <div key={i} className="footer__top__section">
            <p
              className="footer__top__section__title"
              style={{ borderBottomColor: "#c2d2f4" }}
            >
              {el.title}
            </p>
            <div className="footer__top__section__body">
              {el.elements.map((item) => (
                <div style={{ marginBottom: 14 }} key={item}>
                  <p className="small" style={{ cursor: "pointer" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div key={i} className="footer__top__section">
            <p
              className="footer__top__section__title"
              style={{ borderBottomColor: "#c2d2f4" }}
            >
              {el.title}
            </p>
            <div
              className="footer__top__section__body"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "78%",
              }}
            >
              <div>
                <h2>{el.tel}</h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    marginTop: 23,
                  }}
                >
                  <img src={pin} alt="pin" />
                  <p className="small">{el.addr}</p>
                </div>
              </div>
              <div className="footer__top__section__body__socials">
                {el.socials.map((item) => (
                  <img src={item.icon} key={item.name} alt={item.name} />
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </section>
    <Divider text="Made by" style={{ marginTop: 14 }} />
    <section className="footer__bottom">
      <div>
        <p className="small">© 2022. All rights reserved.</p>
      </div>
      <div
        style={{ display: "flex", gap: 13, alignItems: "center", width: 176 }}
      >
        <img
          src={shield}
          alt="shield icon"
          style={{
            width: 10,
            height: 13,
          }}
        />
        <p className="small">Privacy policy</p>
      </div>
    </section>
  </footer>
);

const Footer = () => {
  const isMobile = isMobileHook();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
};

export default Footer;
