import "../../assets/css/contact.css";

function Contact() {
  return (
    <div>
      <div className="contact-display">
        <h1 className="heading">
          Feel free to reach us with any queries you might have
        </h1>
        <div className="contact-info">
          <div className="address">
            <b>EMAIL:</b> xyzxyz@hmrs.co.in
            <br />
            Our head office is located at: <br /> PLOT NUMBER - 47 CSC 9 SECTOR
            7, ROHINI DELHI 110085, INDIA
            <br />
            <b>PHONE:</b> +91 11 65470843 <br />
            <b>FAX:</b> +91 11 27062764 <br />
          </div>
          <div className="map-display">
            <iframe
              title="google map office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.430815303244!2d77.10946547614591!3d28.706668380708834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0157b90bf289%3A0x86dc0d6eae2e7732!2sEquipment%20Point!5e0!3m2!1sen!2sin!4v1697293785094!5m2!1sen!2sin"
              width="80%"
              height="100%"
              style={{
                border: "0",
                borderRadius: "10px",
                margin: "auto",
                alignSelf: "center",
              }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
