import { useState } from "react";
import "../../assets/css/contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div className="root">
      <div className="contact-display">
        <section
          style={{
            backgroundImage: "url(/reachout.jpg)",
            backgroundSize: "contain",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#a1d4dc",
            height: "70vh",
          }}
        >
          <div className="query-display">
            {submitted ? (
              <h3 style={{ color: "#3a8a4d", padding: "1%" }}>
                We have recieved your query and we appreciate you taking the
                step to reach out to us. Our team will get back to you on your
                submitted mail ID as soon as possible. Thankyou for being
                patient.
              </h3>
            ) : (
              <>
                <h1 className="heading">Hi! How can we help you?</h1>
                <form
                  method="post"
                  onSubmit={handleSubmit}
                  className="query-form"
                >
                  <label for="email">Your Email:</label>
                  <input name="email" type="text" />
                  <label for="subject">Subject:</label>
                  <input name="subject" type="text" />
                  <textarea name="body" placeholder="Your query" />
                  <button type="submit">Submit</button>
                </form>
              </>
            )}
          </div>
        </section>

        <div className="contact-info">
          <div className="address">
            <AddressCard img={"/email.png"} data={"info@equipmentpoint.in"} />
            <AddressCard
              img={"/address.png"}
              data={
                "PLOT NUMBER - 47 CSC 9, Sector-7 Rohini , Delhi - 110085, India"
              }
            />
            <AddressCard img={"/phone.png"} data={"+91 11 65470843"} />
            <AddressCard img={"/fax.png"} data={"+91 11 27062764"} />
          </div>
          <div className="map-display">
            <iframe
              title="google map office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.430815303244!2d77.10946547614591!3d28.706668380708834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0157b90bf289%3A0x86dc0d6eae2e7732!2sEquipment%20Point!5e0!3m2!1sen!2sin!4v1697293785094!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: "0",
                borderRadius: "10px",
              }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddressCard({ img, data }) {
  return (
    <div className="address-card">
      <div className="left-box">
        <img alt="address icon" height={"100%"} width="100%" src={img} />
      </div>
      <div className="right-box">{data}</div>
    </div>
  );
}

export default Contact;
