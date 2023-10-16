// import { Link } from "react-router-dom";
import "../assets/css/home.css";
import collage from "../assets/images/medicalEquipments.jpg";
import Slider from "./slider";
function Home() {
  return (
    <div className="home">
      <section id="intro">
        <div id="first-display">
          <div className="intro-collage">
            <img
              style={{ borderRadius: "inherit" }}
              src={collage}
              height="100%"
              width="100%"
              alt="medical equipments collage"
            />
          </div>
          <div className="intro-about subtext">
            A well-diversified company that supplies quality products
            manufactured by reliable resources and professional medical service
            representatives. We have established a reputation of trust with our
            customers in terms of excellent, efficient, and prompt supply of
            products.
          </div>
        </div>
        <div id="second-display">
          <div className="intro-about subtext">
            A well-diversified company that supplies quality products
            manufactured by reliable resources and professional medical service
            representatives. We have established a reputation of trust with our
            customers in terms of excellent, efficient, and prompt supply of
            products.
          </div>
          <div className="intro-collage">
            <img
              style={{ borderRadius: "inherit" }}
              src={collage}
              height="100%"
              width="100%"
              alt="medical equipments collage"
            />
            {/* <Link style={{textDecoration:'none',color:'black'}} to='/products'><div>View-Products</div></Link> */}
          </div>
        </div>
      </section>
      <section id="about">
        <h1 className="section-heading">About us</h1>
        <div id="about-display">
          <div className="subtext">
            Established in March 2005 as a distribution company with an aim of
            marketing and trading medical equipments, medical devices and
            disposables in most efficient manner. Our main focus is to develop
            professional relations with the customers to understand their need
            and offer solutions to fullfill those needs. We strive to provide
            best services with promt response.
          </div>
          <h2 className="subheading">Focus Areas</h2>
          <ul className="subtext" style={{ width: "70vw" }}>
            <li>Transfusion medicine</li>
            <li>Hematology with special focus on BMT and Thallesemia</li>
            <li>
              Diagnostic oncology & research equipments & solutions designing
              blood bank as per regulatory requirement
            </li>
            <li>Stand-alone laboratories & hospital based laboratories</li>
            <li>Turn key blood bank projects with best quality equipments</li>
          </ul>
          <h2 className="subheading">Team</h2>
          <div className="subtext">
            A strong back up of team comprising of engineers, sales managers,
            application specialists, manager logistics and administrative
            manager headed by management graduates with more than 2 decade of
            pharma & medical equipment industry experience.
          </div>
          <h2 className="subheading">Principal Companies</h2>
          <ul className="subtext" style={{ width: "70vw" }}>
            <li>TERUMO BCT</li>
            <li>THERMO FISCHER SCIENTIFIC</li>
            <li>OPTICS TECHNOLOGIES Ltd.</li>
            <li>LISA LINE</li>
            <li>HEMOCUE</li>
          </ul>
          <h2 className="subheading">Office</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.430815303244!2d77.10946547614591!3d28.706668380708834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0157b90bf289%3A0x86dc0d6eae2e7732!2sEquipment%20Point!5e0!3m2!1sen!2sin!4v1697293785094!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0", borderRadius: "10px", marginLeft: "1vw" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section id="clientel">
        <h1 className="section-heading">
          Building relationships based on trust
        </h1>
        <div id="clientel-display">
          <Slider numSlides={4} height={"30vh"} width={"30vw"} />
        </div>
      </section>
    </div>
  );
}

export default Home;
