import { useEffect, useState } from "react";
import "../assets/css/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { sliderData } from "./config_flies/slider_config";
import { sliderStyles } from "./config_flies/slider_config";

function Slider(props) {
  const [index, setIndex] = useState(0);
  const numSlides = sliderData.length;
  useEffect(() => {
    const interval = setInterval(() => {
      const isLast = index === numSlides - 1;
      setIndex(isLast ? 0 : index + 1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [index, numSlides]);

  const next = () => {
    const isLast = index === numSlides - 1;
    setIndex(isLast ? 0 : index + 1);
  };
  const prev = () => {
    const isFirst = index === 0;
    setIndex(isFirst ? numSlides - 1 : index - 1);
  };
  const headingStyle = sliderStyles.headingStyle;
  const contentStyle = sliderStyles.contentStyle;
  const buttonStyle = sliderStyles.buttonStyle;
  return (
    <div
      className="slider-display"
      style={{
        height: props.height,
        width: props.width,
        backgroundColor: props.backgroundColor,
      }}
    >
      <div className="left-arrow arrow">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prev} />
      </div>
      <div className="right-arrow arrow">
        <FontAwesomeIcon icon={faChevronRight} onClick={next} />
      </div>
      <div className="slider-container">
        <div className="slider-img-container">
          <img
            alt="item-image"
            src={sliderData[index].imgUrl}
            height="100%"
            width="100%"
          />
        </div>
        <div className="slider-info-container">
          <h1 style={headingStyle}>{sliderData[index].heading}</h1>
          <p style={contentStyle}>{sliderData[index].content}</p>
          <button style={buttonStyle}>View-More</button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
