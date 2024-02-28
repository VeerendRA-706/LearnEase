import React from "react";
import "./Contact.css";
import Message from "../../assets/chat.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import phone from "../../assets/telephone.png";
import White_arrow from "../../assets/White-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bbcad507-85a0-43bb-b326-22225cd8f43d");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <>
      <div className="contact">
        <div className="contact_col">
          <h3>
            Send us a message <img src={Message} alt="" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              {" "}
              <img src={email} alt="" />
              Contact@edusity.com
            </li>
            <li>
              <img src={phone} alt="" />
              +1 123 456 789
            </li>
            <li>
              <img src={location} alt="" />
              123 Main Street, Anytown, USA 12345
            </li>
          </ul>
        </div>
        <div className="contact_col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your phone"
              required
            />
            {/* <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            /> */}
            <label>Write your messages here</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
            <button type="submit" className="btn dark-btn">
              Submit now <img src={White_arrow} alt="" />
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
