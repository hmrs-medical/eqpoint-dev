import "../../assets/css/home.css";
import Slider from "../slider";

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
          <h2 className="subheading">Vision</h2>
          <div className="subtext">
            To emerge as a leader in the delivery of high quality products at an
            affordable price by offering wide range of products backed by a
            dedicated team of sales & service engineers ensuring best in class
            services.
          </div>
          <h2 className="subheading">Core Values</h2>
          <ul className="subtext bullets">
            <li>
              To provide best quality international products & services with
              customer first approach.
            </li>
            <li>
              Hold firmly on to the quality & ethical values of the noble
              profession.
            </li>
            <li>
              To be seen as a trustworthy and reliable source of highest quality
              equipments aiming to win the trust of customers.
            </li>
            <li>
              Provide assistance to the underprivileged, especially towards
              their education, as a part of corporate social responsibility in
              accomplising compassionate mission.
            </li>
          </ul>
          <h2 className="subheading">Focus Areas</h2>
          <ul className="subtext bullets">
            <li>Transfusion medicine</li>
            <li>Hematology with special focus on BMT and Thallesemia</li>
            <li>
              Diagnostic oncology & research equipments & solutions designing
              blood bank as per regulatory requirement
            </li>
            <li>Stand-alone laboratories & hospital based laboratories</li>
            <li>Turn key blood bank projects with best quality equipments</li>
          </ul>
          <h2 className="subheading">Principal Companies</h2>
          <div className="companies">
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="http://localhost:3000/termo.png"
                height="120%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="http://localhost:3000/thermo.png"
                height="100%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="http://localhost:3000/ortho.png"
                height="100%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="http://localhost:3000/optics.png"
                height="130%"
                width="100%"
              />
            </div>
            <div className="company-item">
              <img
                alt="terumo-logo"
                src="http://localhost:3000/lisaline.png"
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
          <h2 className="subheading">Our Office</h2>
          <div className="office-display">
            <iframe
              title="google map office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.430815303244!2d77.10946547614591!3d28.706668380708834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0157b90bf289%3A0x86dc0d6eae2e7732!2sEquipment%20Point!5e0!3m2!1sen!2sin!4v1697293785094!5m2!1sen!2sin"
              width="50%"
              height="90%"
              style={{
                border: "0",
                borderRadius: "10px",
                marginLeft: "1vw",
                alignSelf: "center",
              }}
              loading="lazy"
            ></iframe>
            <div className="subtext">
              Our head office is located at: <br /> PLOT NUMBER - 47 CSC 9
              SECTOR 7, ROHINI DELHI 110085, INDIA
              <br />
              <b>PHONE:</b> +91 11 65470843 <br />
              <b>FAX:</b> +91 11 27062764 <br />
              <b>TIN:</b> 07360290789 <br />
              <b>C.S.T NO:</b> 07360290789
              <br />
              <b>IEC NO:</b> 0505075440 <br />
              <b>D.L.NO:</b> 31(1377) 20B, 31(1377) 21B AND
              <br />
            </div>
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
                <a
                  href="http://localhost:3000/Fortis_PC.jpeg"
                  rel="noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Fortis hospital performance certificate"
                    src="http://localhost:3000/Fortis_PC.jpeg"
                    height="100%"
                    width="100%"
                  />
                </a>
              </div>
              <div className="testimonial-right">
                <div>
                  <a
                    href="http://localhost:3000/Rajivgandhi_PC.jpeg"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Rajiv Gandhi hospital performance certificate"
                      src="http://localhost:3000/Rajivgandhi_PC.jpeg"
                      height="100%"
                      width="100%"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="http://localhost:3000/BLK_PC.jpeg"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="BLK Max hospital performance certificate"
                      src="http://localhost:3000/BLK_PC.jpeg"
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

export default Home;
