import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { BiPhoneCall, BiMailSend } from "react-icons/bi";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    event.preventDefault();
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullname: "",
      email: "",
      message: "",
    });
    alert("Thank you for reaching out");

    // handleShow()
  }
  return (
    <div className="footer">
      <Container>
        <div className="col-14">
          <div className="logo">
            Sheltt<span>ry</span>
          </div>
          <div className="iconList">
            <FaInstagram className="icon" />
            <FaWhatsapp className="icon" />
            <FaFacebookF className="icon" />
          </div>
          <div className="footerDesc">
            <h5>
              We have here an open platform, houses chosen to your taste,
              whereby you can rent an apartment directly from the Agents or
              Landlords. We recommend you give us your feedback.
            </h5>
          </div>
        </div>

        <Row className="col-1-4">
          <h3 className="footerHeader">Quick links</h3>
          <div className="quickLinks">
            <h5 className="links">Explore</h5>
            <h5 className="links">Locations</h5>{" "}
            <h5 className="links">Client Testimonials</h5>
          </div>
        </Row>

        <Row className="col-1-4-1">
          <h3 className="footerHeader">Give us your feedback</h3>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <textarea
              id=""
              cols="30"
              rows="7"
              placeholder="Message"
              name="message"
              onChange={handleChange}
            />
            <button>Submit</button>
          </form>
        </Row>

        <Row className="col-1-4">
          <h3 className="footerHeader">Contact Info</h3>
          <div className="contactList">
            <div className="contact">
              <BiPhoneCall className="icon" />
              <h5>09063435621</h5>
            </div>
            <div className="contact">
              <FaWhatsapp className="icon" />
              <h5>09063435621</h5>
            </div>
            <div className="contact">
              <BiMailSend className="icon" />
              <h5>info@shelttry.com</h5>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
