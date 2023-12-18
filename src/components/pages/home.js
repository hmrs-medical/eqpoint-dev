import "../../assets/css/home.css";
import Slider from "../slider";
import { useState } from "react";

function Home() {
  const viewPCert = function () {
    window.open(
      "https://www.dropbox.com/scl/fi/9pahahjaftv1fyxkl4h49/CustomersPerformanceCert.pdf?rlkey=3tuiyzv3rmq73ry5dj0gxouep&dl=0",
      "_blank"
    );
  };
  return (
    <div className="home">
      <section id="intro">
        <Slider
          numSlides={4}
          height={"75vh"}
          width={"100%"}
          backgroundColor={"rgb(243, 243, 243)"}
        />
        <div className="intro-about">
          A well-diversified company that supplies quality products manufactured
          by reliable resources and professional medical service
          representatives.
          <h3 style={{ color: "#3a8a4d", textAlign: "center" }}>
            <b>“WE BELIEVE IN HONESTY & CUSTOMER FIRST APPROACH”</b>
          </h3>
        </div>
      </section>
      <section id="about">
        <h1 className="section-heading">About us</h1>
        <div id="about-display">
          <div className="subtext" style={{ fontSize: "1.3 em" }}>
            Established in March 2005 as a distribution company with an aim of
            marketing and trading medical equipments, medical devices and
            disposables in most efficient manner. Our main focus is to develop
            professional relations with the customers to understand their need
            and offer solutions to fullfill those needs. We strive to provide
            best services with promt response.
          </div>
          <div className="cards-container">
            <PointerCard
              tagline={`"To emerge as a leader in the delivery of high quality products at an
              affordable price by offering wide range of products"`}
              displayPic={"/vision.jpg"}
              expand={false}
            />
            <PointerCard
              tagline={`"Quality, trust, compassion and ethics: the pillars of our profession and values we strive to foster in our team and organization."`}
              displayPic={"/values.png"}
              expand={true}
              data={
                <ul>
                  <li>
                    To provide best quality international products & services
                    with customer first approach.
                  </li>
                  <li>
                    Hold firmly on to the quality & ethical values of the noble
                    profession.
                  </li>
                  <li>
                    To be seen as a trustworthy and reliable source of highest
                    quality equipments aiming to win the trust of customers.
                  </li>
                  <li>
                    Provide assistance to the underprivileged, especially
                    towards their education, as a part of corporate social
                    responsibility in accomplising compassionate mission.
                  </li>
                </ul>
              }
            />

            <PointerCard
              tagline={`"We provide solutions for transfusion medicine, hematology, diagnostic oncology and blood bank management"`}
              displayPic={"/focus.jpg"}
              expand={true}
              data={
                <ul>
                  <li>Transfusion medicine</li>
                  <li>Hematology with special focus on BMT and Thallesemia</li>
                  <li>
                    Diagnostic oncology & research equipments & solutions
                    designing blood bank as per regulatory requirement
                  </li>
                  <li>
                    Stand-alone laboratories & hospital based laboratories
                  </li>
                  <li>
                    Turn key blood bank projects with best quality equipments
                  </li>
                </ul>
              }
            />
          </div>
          <h2 className="subheading">Principal Companies</h2>
          <div className="companies">
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="termo.png"
                height="120%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="thermo.png"
                height="100%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="ortho.png"
                height="100%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="optics.png"
                height="130%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="lisaline.png"
                height="100%"
                width="100%"
              />
            </div>
          </div>
          <h2 className="subheading">
            Basis of selection of products/services
          </h2>
          <ul className="subtext bullets">
            <li>
              With consultative discussion & in-depth analysis of the existing
              market segment.
            </li>
            <li>
              To understand customer expectations in terms of product features &
              benefits, quality & after sales services and their future
              requirements.
            </li>
            <li>
              Identification of gaps for carefully selecting product & services
              to meet customer expectations.
            </li>
          </ul>
          <h2 className="subheading">Team</h2>
          <div className="subtext">
            A strong back up of team comprising of engineers, sales managers,
            application specialists, manager logistics and administrative
            manager headed by management graduates with more than 2 decade of
            pharma & medical equipment industry experience.
          </div>
          <h2 className="subheading">Area of operation</h2>
          <div className="subtext">
            Pan India through channel partners with a focus on Delhi and NCR,
            Uttar Pradesh, Rajasthan & Uttarakhand, Punjab, Haryana.{" "}
          </div>
        </div>
      </section>
      <section id="clientel">
        <h1 className="section-heading">
          Building relationships based on trust
        </h1>
        <div className="clientel-display">
          <div className="testimonials">
            <h2 className="subheading">Testimonials</h2>
            <div className="testimonials-display">
              <div className="testimonial-left">
                <a href="Fortis_PC.jpeg" rel="noreferrer" target="_blank">
                  <img
                    alt="Fortis hospital performance certificate"
                    src="Fortis_PC.jpeg"
                    height="100%"
                    width="100%"
                  />
                </a>
              </div>
              <div className="testimonial-right">
                <div>
                  <a
                    href="Rajivgandhi_PC.jpeg"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Rajiv Gandhi hospital performance certificate"
                      src="Rajivgandhi_PC.jpeg"
                      height="100%"
                      width="100%"
                    />
                  </a>
                </div>
                <div>
                  <a href="BLK_PC.jpeg" rel="noreferrer" target="_blank">
                    <img
                      alt="BLK Max hospital performance certificate"
                      src="BLK_PC.jpeg"
                      height="100%"
                      width="100%"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="major-clients">
            <h2 className="subheading">Our major customers</h2>
            <div className="subtext major-clients-display">
              <ul>
                <li>Armed forces</li>
                <li>Fortis group hospitals</li>
                <li>Max group hospitals</li>
                <li>Rajiv Gandhi cancer institute & research centre</li>
                <li>Delhi heart & lung institute</li>
                <li>Jaipur golden hospital</li>
                <li>Rotary blood bank</li>
                <li>Cryo banks international</li>
                <li>Delhi govt. equipment procurement cell</li>
                <li>ESI hospital</li>
                <li>Maharaja agrasen hospital</li>
                <li>HIHT & medical college dehradun</li>
                <li>Subharti medical college & Hospital</li>
                <li>Susheela tiwari hospital Haldwani</li>
                <li>JLN medical college</li>
                <li>AMU aligarh</li>
                <li>Panacea biotech</li>
                <li>CCRUM ministry of health</li>
                <li>Central soil research station</li>
                <li>Central govt. etc.</li>
              </ul>
              <button id="performance-cert-btn" onClick={viewPCert}>
                View Performance Certificates
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function PointerCard({ displayPic, tagline, data, expand }) {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 1px 0 black",
    margin: "2vh",
    padding: "0.3% 0.3% 0.5% ",
    backgroundColor: "white",
    borderRadius: "7px",
    borderTopRightRadius: "7px",
    borderTopLeftRadius: "7px",
    height: "45vh",
  };
  const imgStyle = {
    height: "80%",
    width: "100%",
    borderTopRightRadius: "7px",
    borderTopLeftRadius: "7px",
    backgroundImage: `url(${displayPic})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const dataStyle = {
    minHeight: "20%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    fontSize: "1rem",
    fontFamily: "ariel",
    padding: "2% 2%",
    fontWeight: "570",
    color: "#444b71",
  };
  const bulletStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    padding: "2%",
    fontFamily: "ariel",
    borderRadius: "7px",
    fontSize: "1.2rem",
    backgroundColor: "#444b71",
    color: "white",
  };
  const buttonStyle = {
    width: "30%",
    height: "2.5vh",
    borderRadius: "5px",
    marginLeft: "1%",
    border: "none",
    boxShadow: "0 0 3px 0 green",
    fontWeight: "500",
  };
  const [cardData, setCardData] = useState(tagline);
  const [expandCard, setExpandCard] = useState(false);
  return (
    <div style={cardStyle}>
      {expandCard ? (
        <div style={bulletStyle}>
          <div className="card-data">{cardData}</div>
          <button
            className="card-button"
            style={buttonStyle}
            onClick={() => {
              setExpandCard(false);
              setCardData(tagline);
            }}
          >
            See Less
          </button>
        </div>
      ) : (
        <>
          <div style={imgStyle}></div>
          <div style={dataStyle}>
            <div className="card-data">{cardData}</div>

            {expand ? (
              <button
                className="card-button"
                style={buttonStyle}
                onClick={() => {
                  setExpandCard(true);
                  setCardData(data);
                }}
              >
                See More
              </button>
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
