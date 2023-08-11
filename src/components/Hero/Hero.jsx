import "./Hero.scss";
import { useState, useRef } from "react";
import arrowLeft from "../../assets/hero/Vector.svg";
import onFoot from "../../assets/hero/On foot.svg";
import car from "../../assets/hero/Car.svg";
import truck from "../../assets/hero/Truck.svg";
import cross from "../../assets/hero/Cross.svg";
import background from "../../assets/hero/Statue.svg";
import backgroundMob from "../../assets/hero/background-mobile.svg";
import lupa from "../../assets/hero/Lupa.svg";
import info from "../../assets/hero/info.svg";
import infoHover from "../../assets/hero/infoHover.svg";
import pickupIcon from "../../assets/hero/pickupIcon.svg";
import dropIcon from "../../assets/hero/dropIcon.svg";
import dots from "../../assets/hero/dots.svg";
import poster from "../../assets/hero/video-poster.svg";
import playBtn from "../../assets/hero/play-button.svg";
import isMobileHook from "../../isMobileHook";

const autoFill = [501, 502, 523, 534, 535, "112 str"];

const SwitchElement = ({
  value,
  switchState,
  text,
  setSwitchState,
  icon,
  iconName,
  isMobile,
}) => (
  <div
    className={
      value === switchState
        ? "hero__right__top__switch__item active"
        : "hero__right__top__switch__item"
    }
    onClick={() => {
      setSwitchState(value);
    }}
  >
    <div style={{ maxHeight: 56 }}>
      <img src={icon} alt={iconName} />
    </div>
    {!isMobile && <p className="small">{text}</p>}
  </div>
);

const LocationElement = ({ locationType, location, setLocation, name }) => {
  const searchResult = autoFill.filter((item) => {
    let searchQuery = location.toString().toLowerCase();
    let autoFillItem = item.toString().toLowerCase();
    return (
      searchQuery &&
      autoFillItem.startsWith(searchQuery) &&
      searchQuery !== autoFillItem
    );
  });

  return (
    <div className="hero__right__top__location__item">
      <label>
        <p>{locationType.toUpperCase()}</p>
        <input
          type="text"
          placeholder="location"
          value={location}
          style={
            location
              ? { borderBottom: "2px solid #2b6bf3", paddingBottom: 0 }
              : {}
          }
          onChange={({ target: { value } }) => {
            setLocation((prev) => {
              return {
                ...prev,
                [name]: value,
              };
            });
          }}
        />
      </label>
      {location && searchResult.length > 0 && (
        <div className="hero__right__top__location__item__dropdown">
          <div className="hero__right__top__location__item__dropdown__rightwrap" />
          {searchResult.map((item, i) => (
            <div
              className="hero__right__top__location__item__dropdown__row"
              key={item}
              onClick={() => {
                setLocation((prev) => ({
                  ...prev,
                  [name]: item,
                }));
              }}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const InfoButton = () => {
  const [hover, setHover] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <img
        onMouseOver={() => {
          setHover(true);
          setModalVisible(true);
        }}
        onMouseOut={() => {
          setHover(false);
          setModalVisible(false);
        }}
        src={hover ? infoHover : info}
        alt="info"
      />
      {modalVisible && (
        <div>
          <p>
            A commission is a piece of work that someone is asked to do and is
            paid for.
          </p>
        </div>
      )}
    </>
  );
};

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <video
        ref={videoRef}
        src=""
        width="100%"
        height="100%"
        controls={isPlaying}
      ></video>
      {!isPlaying && (
        <div className="hero__left__video__paused">
          <img src={poster} alt="video thumbnail" />
          <div
            className="hero__left__video__paused__button"
            onClick={togglePlay}
          >
            <img src={playBtn} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

const Hero = () => {
  const [switchState, setSwitchState] = useState("");
  const [locationInput, setLocationInput] = useState({
    from: "",
    to: "",
  });
  const isMobile = isMobileHook();

  return (
    <div className="hero">
      <img
        className="hero__background"
        src={isMobile ? backgroundMob : background}
        alt="statue and city"
      />
      <section className="hero__left">
        <div className="hero__left__top">
          <h1>Our service started{isMobile && <br />} work in New York</h1>
          <p>
            We make delivery exactly at the time you need - we can start to
            fulfill the order a few minutes after it arrives, or we can deliver
            on a specific day and hour.
          </p>
          <a href="">
            Read more{" "}
            <span>
              <img src={arrowLeft} alt="arrow left" />
            </span>
          </a>
        </div>
        <div className="hero__left__bottom">
          <h2>How it works</h2>
          <div className="hero__left__video">
            <Video />
          </div>
          {isMobile && (
            <div className="hero__left__bottom__pagging">
              <div className="active" />
              <div />
              <div />
              <div />
            </div>
          )}
        </div>
      </section>

      <section className="hero__right">
        <div className="hero__right__top">
          <div className="hero__right__top__title">
            <h2>Send a Parcel </h2>
            <InfoButton />
          </div>
          <div className="hero__right__top__switch">
            <SwitchElement
              value="to_10_lb"
              text="to 10lb"
              switchState={switchState}
              setSwitchState={setSwitchState}
              icon={onFoot}
              iconName="on foot"
              isMobile={isMobile}
            />
            <SwitchElement
              value="to_130_lb"
              text="up to 130lb"
              switchState={switchState}
              setSwitchState={setSwitchState}
              icon={car}
              iconName="car"
              isMobile={isMobile}
            />
            <SwitchElement
              value="over_130_lb"
              text="over 130lb"
              switchState={switchState}
              setSwitchState={setSwitchState}
              icon={truck}
              iconName="truck"
              isMobile={isMobile}
            />
          </div>

          <div className="hero__right__top__location">
            <div className="hero__right__top__location__icons">
              <img src={pickupIcon} alt="from icon" />
              <img
                src={dots}
                alt="dots"
                className="hero__right__top__location__icons__dots"
              />
              <img src={dropIcon} alt="to icon" />
            </div>
            <div className="hero__right__top__location__inputs">
              <LocationElement
                name="from"
                location={locationInput.from}
                setLocation={setLocationInput}
                locationType="pickup location"
              />
              <LocationElement
                name="to"
                location={locationInput.to}
                setLocation={setLocationInput}
                locationType="drop location"
              />
            </div>
          </div>

          <div className="hero__right__top__buttons">
            <button className="hero__right__top__buttons__order">
              <p className="menu">Order</p>
            </button>
            <button
              className="hero__right__top__buttons__clear"
              onClick={() => {
                setLocationInput({ from: "", to: "" });
              }}
            >
              <span>
                <img src={cross} alt="cross" />
              </span>
              <p>Clear All</p>
            </button>
          </div>
        </div>
        <div className="hero__right__bottom">
          <h2>Track a package</h2>
          <div className="hero__right__bottom__input">
            <input type="text" placeholder="Enter code" />
            <img src={lupa} alt="magnifier" />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
