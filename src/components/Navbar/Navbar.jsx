import "./Navbar.scss";
import { useState, useEffect, useRef } from "react";
import { us_cities } from "../../constants";
import Logo from "../../assets/navbar/Logo.svg";
import Lock from "../../assets/navbar/Lock.svg";
import Pin from "../../assets/navbar/Pin.svg";
import Search from "../../assets/navbar/Search.svg";
import SearchActive from "../../assets/navbar/Search-active.svg";
import closeBtn from "../../assets/navbar/sidebar-close.svg";
import openBtn from "../../assets/navbar/sidebar-hamburger.svg";
import profile from "../../assets/navbar/Profile.svg";
import isMobileHook from "../../isMobileHook";
import { motion } from "framer-motion";

const CitiesDropdown = ({
  displayCityList,
  setDisplayCityList,
  city,
  setCity,
  isMobile,
  setSidebarToggle,
}) => (
  <div className="nav__center__cities">
    <div
      className="nav__center__cities__city"
      onClick={() => setDisplayCityList(!displayCityList)}
    >
      <div className="nav__center__cities__city__icon">
        <img src={Pin} alt="pin" />
      </div>
      <div>
        <p>{city}</p>
      </div>
    </div>

    <div
      className={`nav__center__cities__list ${displayCityList ? "" : "hidden"}`}
    >
      {us_cities.map((item) => (
        <div
          key={item}
          className="nav__center__cities__list__item"
          onClick={() => {
            setCity(item);
            setDisplayCityList(false);
          }}
        >
          <p>{item}</p>
        </div>
      ))}
    </div>
    {isMobile && (
      <img
        src={closeBtn}
        alt="close sidebar"
        onClick={() => {
          setSidebarToggle(false);
        }}
      />
    )}
  </div>
);

const Navbar = () => {
  const [activeTrack, setActiveTrack] = useState(false);
  const [displayCityList, setDisplayCityList] = useState(false);
  const [city, setCity] = useState("Choose location");
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const refInput = useRef();
  const isMobile = isMobileHook();

  useEffect(() => {
    const handleClick = (event) => {
      let parentClasssName = event.target.offsetParent?.className;

      if (displayCityList && parentClasssName !== "nav__center__cities") {
        setDisplayCityList(false);
      }

      if (
        event.target.nodeName !== "INPUT" &&
        event.target.classList[1] !== "active"
      ) {
        setActiveTrack(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [displayCityList]);

  return (
    <nav className="nav">
      {isMobile && (
        <div style={{ cursor: "pointer" }}>
          <img src={profile} alt="profile icon" />
        </div>
      )}
      <div className="nav__logo">
        <img src={Logo} alt="logo" />
      </div>
      {isMobile && (
        <div style={{ cursor: "pointer" }}>
          <img
            src={openBtn}
            alt="sidebar hamburher icon"
            onClick={() => {
              setSidebarToggle(true);
            }}
          />
        </div>
      )}
      <motion.div
        className="nav__main"
        variants={{
          visible: { right: 0 },
          hidden: { right: "-80%" },
        }}
        animate={sidebarToggle ? "visible" : "hidden"}
        // style={sidebarToggle ? { right: 0 } : { right: "-80%" }}
      >
        <section className="nav__center">
          <CitiesDropdown
            displayCityList={displayCityList}
            setDisplayCityList={setDisplayCityList}
            city={city}
            setCity={setCity}
            isMobile={isMobile}
            setSidebarToggle={setSidebarToggle}
          />
          <div
            className={`nav__center__track ${
              activeTrack ? "active" : "default"
            }`}
            onClick={() => {
              setActiveTrack(true);
              refInput.current.focus();
            }}
          >
            <input type="text" ref={refInput} placeholder="Track a Package" />
            <img src={activeTrack ? SearchActive : Search} alt="search icon" />
          </div>
        </section>
        <section className="nav__right">
          <p>Send a Parcel</p>
          <p>Become a Courier</p>
          {isMobile && (
            <>
              <p>Affiliate Program</p>
              <p>Help & Support</p>
              <button className="sidebar__orderBtn">
                <p>Take a complex order</p>
              </button>
            </>
          )}
          {!isMobile && (
            <div className="nav__right__login">
              <img src={Lock} alt="lock" />
            </div>
          )}
        </section>
      </motion.div>
    </nav>
  );
};
export default Navbar;
