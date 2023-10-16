import { useEffect, useState } from "react";
import "../assets/css/slider.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
function Slider(props) {
  const [index, setIndex] = useState(1);
  const numSlides = props.numSlides;
  useEffect(() => {
    const interval = setInterval(() => {
      const isLast = index === numSlides;
      setIndex(isLast ? 1 : index + 1);
    }, 6000);
    return () => {
      clearInterval(interval);
    };
  }, [index, numSlides]);

  const next = () => {
    const isLast = index === numSlides;
    setIndex(isLast ? 1 : index + 1);
  };
  const prev = () => {
    const isLast = index === 1;
    setIndex(isLast ? numSlides - 1 : index - 1);
  };

  return (
    <div
      className="slider-display"
      style={{ height: props.height, width: props.width }}
    >
      <div className="left-arrow arrow">
        <FontAwesomeIcon icon={faChevronLeft} onClick={prev} />
      </div>
      <div className="right-arrow arrow">
        <FontAwesomeIcon icon={faChevronRight} onClick={next} />
      </div>
      <div
        style={{
          backgroundImage: `url(http://localhost:3000/img${index}.jpeg)`,
        }}
        className="slider-container"
      ></div>
    </div>
  );
}

export default Slider;
